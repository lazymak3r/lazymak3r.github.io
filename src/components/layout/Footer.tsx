
import {GithubLogoIcon, LinkedinLogoIcon, TelegramLogoIcon, XLogoIcon} from '@phosphor-icons/react';
const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/lazymak3r',
    icon: <GithubLogoIcon weight="fill" className="w-5 h-5" />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aramsuqiasyan',
    icon: <LinkedinLogoIcon weight="fill" className="w-5 h-5" />,
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/AramSuqiasyan97',
    icon: <XLogoIcon weight="fill" className="w-5 h-5" />,
  },
  {
    label: 'Telegram',
    href: 'https://t.me/suqiasyan20aram',
    icon: <TelegramLogoIcon weight="fill" className="w-5 h-5" />,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-separator)] bg-bg-surface">
      <div className="section-container py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display font-bold text-lg gradient-brand-text mb-1">
              Aram Suqiasyan
            </p>
            <p className="text-text-muted text-sm">
              Senior AI Product Engineer - Agentic Systems, AI Automations, LLM Evals and RAG
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-text-secondary hover:text-brand-soft transition-colors duration-200 p-2"
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
  );
}
