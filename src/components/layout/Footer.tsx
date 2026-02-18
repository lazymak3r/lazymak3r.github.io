import {IconGitHub} from '../../assets/icons/IconGitHub'
import {IconLinkedIn} from '../../assets/icons/IconLinkedIn'
import {IconTwitterX} from '../../assets/icons/IconTwitterX'

const socialLinks = [
    {
        label: 'GitHub',
        href: 'https://github.com/lazymak3r',
        icon: <IconGitHub className="w-5 h-5"/>,
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/aram-suqiasyan-476305180/',
        icon: <IconLinkedIn className="w-5 h-5"/>,
    },
    {
        label: 'Twitter',
        href: 'https://twitter.com/AramSuqiasyan97',
        icon: <IconTwitterX className="w-5 h-5"/>,
    },
]

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-bg-surface/50">
            <div className="section-container py-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <p className="font-display font-bold text-lg gradient-brand-text mb-1">LazyMak3R</p>
                        <p className="text-text-muted text-sm">Full-Stack Software Engineer</p>
                    </div>

                    <div className="flex items-center gap-4">
                        {socialLinks.map(link => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.label}
                                className="text-text-secondary hover:text-brand-cyan transition-colors duration-200 p-2"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>

                    <p className="text-text-muted text-sm">
                        © {new Date().getFullYear()} Aram Suqiasyan
                    </p>
                </div>
            </div>
        </footer>
    )
}
