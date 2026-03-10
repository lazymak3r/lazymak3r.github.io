import {useRef, useState, useEffect, useCallback} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {SectionWrapper} from '../ui/SectionWrapper'

type GameState = 'idle' | 'countdown' | 'running' | 'cashedout' | 'crashed'

const GROWTH_RATE = 0.062

interface Particle {
    x: number
    y: number
    vx: number
    vy: number
    alpha: number
    size: number
    color: string
    life: number
    maxLife: number
}

interface HistoryEntry {
    value: number
    won: boolean
}

function generateCrashPoint(): number {
    return Math.max(1.01, 0.99 / (1 - Math.random() * 0.95))
}

function getMultiplier(elapsedMs: number): number {
    return Math.exp((elapsedMs / 1000) * GROWTH_RATE)
}

function drawRocket(ctx: CanvasRenderingContext2D, x: number, y: number, angle: number) {
    const s = 13
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(angle + Math.PI / 2)

    ctx.shadowColor = '#1aaccc'
    ctx.shadowBlur = 10

    ctx.beginPath()
    ctx.ellipse(0, 0, s * 0.42, s, 0, 0, Math.PI * 2)
    ctx.fillStyle = '#f0f4f8'
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(-s * 0.42, -s * 0.5)
    ctx.quadraticCurveTo(0, -s * 2.1, s * 0.42, -s * 0.5)
    ctx.fillStyle = '#1aaccc'
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(-s * 0.42, s * 0.3)
    ctx.lineTo(-s * 0.95, s * 1.25)
    ctx.lineTo(-s * 0.42, s * 0.85)
    ctx.closePath()
    ctx.fillStyle = '#4812e4'
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(s * 0.42, s * 0.3)
    ctx.lineTo(s * 0.95, s * 1.25)
    ctx.lineTo(s * 0.42, s * 0.85)
    ctx.closePath()
    ctx.fillStyle = '#4812e4'
    ctx.fill()

    ctx.shadowBlur = 0
    ctx.restore()
}

function drawFlame(ctx: CanvasRenderingContext2D, x: number, y: number, angle: number, t: number) {
    const s = 13
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(angle + Math.PI / 2)

    const flicker = 0.7 + Math.sin(t * 0.03) * 0.3
    const grad = ctx.createLinearGradient(0, s, 0, s + 20 * flicker)
    grad.addColorStop(0, 'rgba(251,191,36,0.9)')
    grad.addColorStop(0.5, 'rgba(239,68,68,0.6)')
    grad.addColorStop(1, 'rgba(239,68,68,0)')

    ctx.beginPath()
    ctx.moveTo(-s * 0.28, s)
    ctx.quadraticCurveTo(0, s + 22 * flicker, s * 0.28, s)
    ctx.fillStyle = grad
    ctx.fill()

    ctx.restore()
}

export function CrashGame() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const rafRef = useRef<number>(0)
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
    const startTimeRef = useRef<number>(0)
    const crashPointRef = useRef<number>(2)
    const particlesRef = useRef<Particle[]>([])
    const lastTrailRef = useRef<number>(0)
    const frameRef = useRef<number>(0)
    const cashedOutRef = useRef(false)
    const dprRef = useRef(1)

    const sndBeep = useRef<HTMLAudioElement | null>(null)
    const sndLoop = useRef<HTMLAudioElement | null>(null)
    const sndExplosion = useRef<HTMLAudioElement | null>(null)
    const sndSwoosh = useRef<HTMLAudioElement | null>(null)

    const [state, setState] = useState<GameState>('idle')
    const [multiplier, setMultiplier] = useState(1.0)
    const [countdown, setCountdown] = useState(3)
    const [history, setHistory] = useState<HistoryEntry[]>([])

    const spawnTrail = useCallback((x: number, y: number, angle: number) => {
        const now = performance.now()
        if (now - lastTrailRef.current < 35) return
        lastTrailRef.current = now
        const back = angle + Math.PI
        const spread = 0.5
        for (let i = 0; i < 2; i++) {
            const a = back + (Math.random() - 0.5) * spread
            const spd = 1 + Math.random() * 2.5
            particlesRef.current.push({
                x, y,
                vx: Math.cos(a) * spd,
                vy: Math.sin(a) * spd,
                alpha: 0.85,
                size: 1.5 + Math.random() * 2.5,
                color: Math.random() > 0.5 ? '#fbbf24' : '#ef4444',
                life: 0,
                maxLife: 20 + Math.random() * 15,
            })
        }
    }, [])

    const spawnExplosion = useCallback((x: number, y: number) => {
        const colors = ['#f43f5e', '#f59e0b', '#ef4444', '#fbbf24', '#ffffff']
        for (let i = 0; i < 70; i++) {
            const angle = Math.random() * Math.PI * 2
            const spd = 2 + Math.random() * 7
            particlesRef.current.push({
                x, y,
                vx: Math.cos(angle) * spd,
                vy: Math.sin(angle) * spd,
                alpha: 1,
                size: 2 + Math.random() * 4,
                color: colors[Math.floor(Math.random() * colors.length)],
                life: 0,
                maxLife: 45 + Math.random() * 45,
            })
        }
    }, [])

    const spawnWin = useCallback((x: number, y: number) => {
        const colors = ['#10b981', '#22d3ee', '#34d399', '#a7f3d0', '#ffffff']
        for (let i = 0; i < 50; i++) {
            const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.4
            const spd = 2 + Math.random() * 6
            particlesRef.current.push({
                x, y,
                vx: Math.cos(angle) * spd,
                vy: Math.sin(angle) * spd,
                alpha: 1,
                size: 2 + Math.random() * 3,
                color: colors[Math.floor(Math.random() * colors.length)],
                life: 0,
                maxLife: 50 + Math.random() * 35,
            })
        }
    }, [])

    const updateParticles = useCallback((ctx: CanvasRenderingContext2D) => {
        particlesRef.current = particlesRef.current.filter(p => p.life < p.maxLife)
        for (const p of particlesRef.current) {
            p.x += p.vx
            p.y += p.vy
            p.vy += 0.1
            p.vx *= 0.97
            p.life++
            p.alpha = (1 - p.life / p.maxLife) * 0.9
            ctx.beginPath()
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
            ctx.fillStyle = p.color
            ctx.globalAlpha = p.alpha
            ctx.fill()
            ctx.globalAlpha = 1
        }
    }, [])

    const getCoords = useCallback((elapsedMs: number, mult: number, W: number, H: number) => {
        const elapsedSec = elapsedMs / 1000
        const timeRange = Math.max(elapsedSec + 2, 8)
        const multRange = Math.max(mult - 1 + 0.5, 2)
        const toX = (t: number) => (t / timeRange) * W
        const toY = (m: number) => H - ((m - 1) / multRange) * H * 0.82 - H * 0.1
        return {toX, toY, elapsedSec, timeRange, multRange}
    }, [])

    const draw = useCallback((elapsedMs: number, crashed: boolean, cashedOut: boolean) => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const dpr = dprRef.current
        const W = canvas.width / dpr
        const H = canvas.height / dpr
        const currentMult = crashed ? crashPointRef.current : getMultiplier(elapsedMs)

        ctx.clearRect(0, 0, W, H)
        ctx.fillStyle = '#0a0812'
        ctx.fillRect(0, 0, W, H)

        const {toX, toY, elapsedSec} = getCoords(elapsedMs, currentMult, W, H)

        ctx.strokeStyle = 'rgba(255,255,255,0.04)'
        ctx.lineWidth = 1
        for (let i = 1; i <= 4; i++) {
            const yGrid = H - (H * 0.82 * i) / 4 - H * 0.1
            ctx.beginPath()
            ctx.moveTo(0, yGrid)
            ctx.lineTo(W, yGrid)
            ctx.stroke()
        }

        if (elapsedSec < 0.02) {
            updateParticles(ctx)
            return
        }

        const steps = 120
        const points: [number, number][] = []
        for (let i = 0; i <= steps; i++) {
            const t = (i / steps) * elapsedSec
            points.push([toX(t), toY(getMultiplier(t * 1000))])
        }

        const [ex, ey] = points[points.length - 1]
        const [px, py] = points[Math.max(0, points.length - 3)]
        const tangent = Math.atan2(ey - py, ex - px)

        const lineColor1 = crashed ? '#f43f5e' : cashedOut ? '#10b981' : '#4812e4'
        const lineColor2 = crashed ? '#f43f5e' : cashedOut ? '#22d3ee' : '#1aaccc'
        const fillAlpha = crashed ? 0.12 : cashedOut ? 0.12 : 0.18
        const fillColor = crashed ? '244,63,94' : cashedOut ? '16,185,129' : '72,18,228'

        const glowColor2 = crashed
            ? 'rgba(244,63,94,'
            : cashedOut
            ? 'rgba(34,211,238,'
            : 'rgba(26,172,204,'

        const glowLayers = [
            {width: 14, a0: 0.03, a1: 0.05},
            {width: 7,  a0: 0.06, a1: 0.1},
            {width: 2.5, a0: 0.7, a1: 1},
        ]

        for (const layer of glowLayers) {
            const grad = ctx.createLinearGradient(0, H * 0.9, ex, ey)
            grad.addColorStop(0, `rgba(${fillColor},${layer.a0})`)
            grad.addColorStop(1, `${glowColor2}${layer.a1})`)
            ctx.beginPath()
            ctx.moveTo(points[0][0], points[0][1])
            for (let i = 1; i < points.length; i++) ctx.lineTo(points[i][0], points[i][1])
            ctx.strokeStyle = grad
            ctx.lineWidth = layer.width
            ctx.lineJoin = 'round'
            ctx.lineCap = 'round'
            ctx.stroke()
        }

        const fillGrad = ctx.createLinearGradient(0, ey, 0, H)
        fillGrad.addColorStop(0, `rgba(${fillColor},${fillAlpha})`)
        fillGrad.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.beginPath()
        ctx.moveTo(points[0][0], points[0][1])
        for (let i = 1; i < points.length; i++) ctx.lineTo(points[i][0], points[i][1])
        ctx.lineTo(ex, H)
        ctx.lineTo(0, H)
        ctx.closePath()
        ctx.fillStyle = fillGrad
        ctx.fill()

        // Stroke clean top line
        const strokeGrad = ctx.createLinearGradient(0, H * 0.9, ex, ey)
        strokeGrad.addColorStop(0, lineColor1)
        strokeGrad.addColorStop(1, lineColor2)
        ctx.beginPath()
        ctx.moveTo(points[0][0], points[0][1])
        for (let i = 1; i < points.length; i++) ctx.lineTo(points[i][0], points[i][1])
        ctx.strokeStyle = strokeGrad
        ctx.lineWidth = 2.5
        ctx.lineJoin = 'round'
        ctx.lineCap = 'round'
        ctx.stroke()

        updateParticles(ctx)

        if (!crashed) {
            if (!cashedOut) {
                spawnTrail(ex, ey, tangent)
                drawFlame(ctx, ex, ey, tangent, frameRef.current)
            }
            drawRocket(ctx, ex, ey, tangent)
        } else {
            const glow = ctx.createRadialGradient(ex, ey, 0, ex, ey, 30)
            glow.addColorStop(0, 'rgba(244,63,94,0.8)')
            glow.addColorStop(1, 'rgba(0,0,0,0)')
            ctx.beginPath()
            ctx.arc(ex, ey, 30, 0, Math.PI * 2)
            ctx.fillStyle = glow
            ctx.fill()
            ctx.beginPath()
            ctx.arc(ex, ey, 5, 0, Math.PI * 2)
            ctx.fillStyle = '#f43f5e'
            ctx.fill()
        }

        frameRef.current++
    }, [getCoords, updateParticles, spawnTrail])

    const drawIdle = useCallback(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return
        const dpr = dprRef.current
        const W = canvas.width / dpr
        const H = canvas.height / dpr
        ctx.fillStyle = '#0a0812'
        ctx.fillRect(0, 0, W, H)
        ctx.strokeStyle = 'rgba(255,255,255,0.04)'
        ctx.lineWidth = 1
        for (let i = 1; i <= 4; i++) {
            const y = H - (H * 0.82 * i) / 4 - H * 0.1
            ctx.beginPath()
            ctx.moveTo(0, y)
            ctx.lineTo(W, y)
            ctx.stroke()
        }
    }, [])

    useEffect(() => {
        const canvas = canvasRef.current
        if (canvas) {
            const dpr = window.devicePixelRatio || 1
            dprRef.current = dpr
            const cssW = canvas.offsetWidth || 560
            const cssH = 240
            canvas.width = cssW * dpr
            canvas.height = cssH * dpr
            canvas.getContext('2d')?.scale(dpr, dpr)
        }

        drawIdle()

        sndBeep.current = new Audio('/sounds/countdown.mp3')
        sndLoop.current = new Audio('/sounds/rising-tone-loop.mp3')
        sndLoop.current.loop = true
        sndLoop.current.volume = 0.5
        sndExplosion.current = new Audio('/sounds/explosion.mp3')
        sndSwoosh.current = new Audio('/sounds/swoosh.mp3')

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
            if (intervalRef.current) clearInterval(intervalRef.current)
            sndLoop.current?.pause()
        }
    }, [drawIdle])

    const startGame = useCallback(() => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current)
        if (intervalRef.current) clearInterval(intervalRef.current)
        particlesRef.current = []
        frameRef.current = 0
        cashedOutRef.current = false
        crashPointRef.current = generateCrashPoint()
        setMultiplier(1.0)
        setState('countdown')
        setCountdown(3)
        drawIdle()

        sndBeep.current!.currentTime = 0
        sndBeep.current!.play().catch(() => {})

        let count = 3
        intervalRef.current = setInterval(() => {
            count--
            if (count <= 0) {
                clearInterval(intervalRef.current!)
                sndLoop.current!.currentTime = 0
                sndLoop.current!.play().catch(() => {})
                setState('running')
                startTimeRef.current = performance.now()

                const tick = () => {
                    const elapsed = performance.now() - startTimeRef.current
                    const mult = getMultiplier(elapsed)

                    if (mult >= crashPointRef.current) {
                        sndLoop.current!.pause()
                        sndLoop.current!.currentTime = 0
                        sndExplosion.current!.currentTime = 0
                        sndExplosion.current!.play().catch(() => {})
                        const canvas = canvasRef.current
                        if (canvas) {
                            const {toX, toY, elapsedSec} = getCoords(elapsed, crashPointRef.current, canvas.width / dprRef.current, canvas.height / dprRef.current)
                            spawnExplosion(toX(elapsedSec), toY(crashPointRef.current))
                        }
                        draw(elapsed, true, false)
                        setMultiplier(crashPointRef.current)
                        setState('crashed')
                        setHistory(prev => [{value: crashPointRef.current, won: false}, ...prev].slice(0, 8))
                        return
                    }

                    draw(elapsed, false, false)
                    setMultiplier(mult)
                    rafRef.current = requestAnimationFrame(tick)
                }

                rafRef.current = requestAnimationFrame(tick)
            } else {
                setCountdown(count)
            }
        }, 1000)
    }, [draw, drawIdle, getCoords, spawnExplosion])

    const cashOut = useCallback(() => {
        if (cashedOutRef.current) return
        cashedOutRef.current = true
        if (rafRef.current) cancelAnimationFrame(rafRef.current)
        const elapsed = performance.now() - startTimeRef.current
        const mult = getMultiplier(elapsed)

        const canvas = canvasRef.current
        if (canvas) {
            const {toX, toY, elapsedSec} = getCoords(elapsed, mult, canvas.width / dprRef.current, canvas.height / dprRef.current)
            spawnWin(toX(elapsedSec), toY(mult))
        }

        sndLoop.current!.pause()
        sndLoop.current!.currentTime = 0
        sndSwoosh.current!.currentTime = 0
        sndSwoosh.current!.play().catch(() => {})
        setMultiplier(mult)
        setState('cashedout')
        setHistory(prev => [{value: mult, won: true}, ...prev].slice(0, 8))

        const drainParticles = () => {
            draw(elapsed, false, true)
            if (particlesRef.current.length > 0) {
                rafRef.current = requestAnimationFrame(drainParticles)
            }
        }
        rafRef.current = requestAnimationFrame(drainParticles)
    }, [draw, getCoords, spawnWin])

    const multColor =
        state === 'crashed' ? '#f43f5e' :
        state === 'cashedout' ? '#10b981' :
        '#f8fafc'

    return (
        <SectionWrapper id="demo" className="bg-bg-surface/30">
            <div className="section-container">
                <div className="mb-14 text-center">
                    <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-3">
                        Live Demo
                    </p>
                    <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary">
                        Crash Game <span className="gradient-brand-text">Demo</span>
                    </h2>
                    <p className="mt-4 text-text-secondary text-sm max-w-md mx-auto">
                        A provably fair crash game. Cash out before the multiplier crashes — built with Canvas API and React.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <div className="flex items-center gap-2 mb-3 min-h-7">
                        <span className="text-xs shrink-0" style={{color: 'var(--color-text-muted)'}}>History:</span>
                        <div className="flex gap-1.5 flex-wrap">
                            <AnimatePresence>
                                {history.map((h, i) => (
                                    <motion.span
                                        key={`${history.length - i}`}
                                        initial={{opacity: 0, scale: 0.6, y: -6}}
                                        animate={{opacity: 1, scale: 1, y: 0}}
                                        className="text-xs px-2 py-0.5 rounded-full font-semibold tabular-nums"
                                        style={{
                                            background: h.won ? 'rgba(16,185,129,0.12)' : 'rgba(244,63,94,0.12)',
                                            color: h.won ? '#10b981' : '#f43f5e',
                                            border: `1px solid ${h.won ? 'rgba(16,185,129,0.25)' : 'rgba(244,63,94,0.25)'}`,
                                        }}
                                    >
                                        {h.value.toFixed(2)}×
                                    </motion.span>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="card-gradient-border">
                        <div className="p-6">
                            <div className="text-center mb-5 h-20 flex flex-col items-center justify-center">
                                <AnimatePresence mode="wait">
                                    {state === 'countdown' && (
                                        <motion.span
                                            key={countdown}
                                            initial={{scale: 1.8, opacity: 0}}
                                            animate={{scale: 1, opacity: 1}}
                                            exit={{scale: 0.4, opacity: 0}}
                                            transition={{duration: 0.35}}
                                            className="font-display font-bold text-6xl leading-none"
                                            style={{color: 'var(--color-text-muted)'}}
                                        >
                                            {countdown}
                                        </motion.span>
                                    )}
                                    {state !== 'countdown' && (
                                        <motion.span
                                            key="mult"
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1}}
                                            className="font-display font-bold text-6xl tabular-nums leading-none"
                                            style={{color: multColor}}
                                        >
                                            {state === 'idle' ? '1.00×' : `${multiplier.toFixed(2)}×`}
                                        </motion.span>
                                    )}
                                </AnimatePresence>

                                <AnimatePresence>
                                    {state === 'crashed' && (
                                        <motion.span
                                            initial={{opacity: 0, y: 4}}
                                            animate={{opacity: 1, y: 0}}
                                            exit={{opacity: 0}}
                                            className="text-xs font-semibold mt-2 tracking-widest uppercase"
                                            style={{color: '#f43f5e'}}
                                        >
                                            Crashed at {multiplier.toFixed(2)}×
                                        </motion.span>
                                    )}
                                    {state === 'cashedout' && (
                                        <motion.span
                                            initial={{opacity: 0, y: 4}}
                                            animate={{opacity: 1, y: 0}}
                                            exit={{opacity: 0}}
                                            className="text-xs font-semibold mt-2 tracking-widest uppercase"
                                            style={{color: '#10b981'}}
                                        >
                                            Cashed Out at {multiplier.toFixed(2)}×
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </div>

                            <motion.div
                                animate={state === 'crashed' ? {x: [-5, 5, -4, 4, -2, 2, 0]} : {x: 0}}
                                transition={{duration: 0.4, ease: 'easeOut'}}
                            >
                                <canvas
                                    ref={canvasRef}
                                    width={560}
                                    height={240}
                                    className="w-full rounded-lg"
                                />
                            </motion.div>

                            <div className="mt-5 flex justify-center">
                                <AnimatePresence mode="wait">
                                    {(state === 'idle' || state === 'crashed' || state === 'cashedout') && (
                                        <motion.button
                                            key="start"
                                            initial={{opacity: 0, y: 6}}
                                            animate={{opacity: 1, y: 0}}
                                            exit={{opacity: 0, y: -6}}
                                            whileHover={{scale: 1.04}}
                                            whileTap={{scale: 0.96}}
                                            onClick={startGame}
                                            className="px-8 py-2.5 rounded-button font-semibold text-sm text-white cursor-pointer"
                                            style={{background: 'linear-gradient(90deg, #4812e4, #1aaccc)'}}
                                        >
                                            {state === 'idle' ? 'Start Game' : 'Play Again'}
                                        </motion.button>
                                    )}
                                    {state === 'countdown' && (
                                        <motion.p
                                            key="waiting"
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1}}
                                            className="text-sm"
                                            style={{color: 'var(--color-text-muted)'}}
                                        >
                                            Get ready...
                                        </motion.p>
                                    )}
                                    {state === 'running' && (
                                        <motion.button
                                            key="cashout"
                                            initial={{opacity: 0, y: 6}}
                                            animate={{opacity: 1, y: 0}}
                                            exit={{opacity: 0, y: -6}}
                                            whileHover={{scale: 1.04}}
                                            whileTap={{scale: 0.96}}
                                            onClick={cashOut}
                                            className="px-8 py-2.5 rounded-button font-semibold text-sm text-white cursor-pointer"
                                            style={{background: 'linear-gradient(90deg, #10b981, #22d3ee)'}}
                                        >
                                            Cash Out {multiplier.toFixed(2)}×
                                        </motion.button>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}