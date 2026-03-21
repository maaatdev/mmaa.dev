import { motion } from 'framer-motion'

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

const letterAnim = {
  hidden: { opacity: 0, y: 30, rotateX: -90 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.6 + i * 0.12,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const links = [
  {
    label: 'GitHub',
    href: 'https://github.com/maaatdev',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:contact@mmaa.dev',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
]

const stack = {
  languages: ['C', 'C++', 'Go', 'Python', 'JavaScript', 'PHP', 'Swift', 'Lua'],
  infra: ['Linux', 'Docker', 'AWS', 'GCP', 'Nginx'],
  tools: ['Neovim', 'Git', 'Zsh', 'Proxmox'],
}

export default function App() {
  const matLetters = ['M', 'a', 't']

  return (
    <div className="min-h-screen bg-(--color-bg)">
      {/* Subtle grid background */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative mx-auto max-w-2xl px-6 py-24 sm:py-32">
        {/* Hero — Hello, I'm Mat */}
        <motion.header
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fade}
          className="mb-12"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-sm font-mono text-(--color-muted) mb-3"
          >
            Hey there, I&apos;m
          </motion.p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight flex">
            {matLetters.map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={letterAnim}
                className="inline-block bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent"
                style={{ perspective: 400 }}
              >
                {letter}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="text-lg text-(--color-muted) mt-4"
          >
            Full Stack Developer &amp; Network Engineer
          </motion.p>
        </motion.header>

        {/* Divider */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fade}
          className="h-px bg-(--color-border) mb-10"
        />

        {/* About — terminal style */}
        <motion.section
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fade}
          className="mb-12"
        >
          <h2 className="text-xs font-mono uppercase tracking-widest text-(--color-muted) mb-4">
            /etc/profile
          </h2>
          <div className="rounded-lg border border-(--color-border) bg-(--color-surface) p-5 font-mono text-sm leading-relaxed">
            <p className="text-(--color-muted) mb-3">
              <span className="text-emerald-400">mat@arch</span>
              <span className="text-(--color-muted)"> ~ $ </span>
              <span className="text-(--color-text)">cat /etc/profile</span>
            </p>
            <div className="space-y-1 text-(--color-accent)">
              <p><span className="text-(--color-muted)">role    </span> full stack developer &amp; network engineer</p>
              <p><span className="text-(--color-muted)">school  </span> 42 — alumni</p>
              <p><span className="text-(--color-muted)">focus   </span> cybersecurity, cloud infra, backend, low-level</p>
              <p><span className="text-(--color-muted)">editor  </span> nvim</p>
              <p><span className="text-(--color-muted)">shell   </span> zsh</p>
            </div>
          </div>
        </motion.section>

        {/* Stack */}
        <motion.section
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fade}
          className="mb-12"
        >
          <h2 className="text-xs font-mono uppercase tracking-widest text-(--color-muted) mb-4">
            Stack
          </h2>
          <div className="space-y-3">
            {Object.entries(stack).map(([category, techs]) => (
              <div key={category}>
                <p className="text-xs text-(--color-muted) mb-1.5 font-mono">{`// ${category}`}</p>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-(--color-border) bg-(--color-surface) px-3 py-1.5 text-sm text-(--color-accent) transition-colors hover:border-zinc-500 hover:text-(--color-text)"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Divider */}
        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fade}
          className="h-px bg-(--color-border) mb-10"
        />

        {/* Contact / Links */}
        <motion.section
          custom={6}
          initial="hidden"
          animate="visible"
          variants={fade}
          className="mb-16"
        >
          <h2 className="text-xs font-mono uppercase tracking-widest text-(--color-muted) mb-4">
            Contact
          </h2>
          <div className="flex gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-(--color-border) bg-(--color-surface) px-4 py-2.5 text-sm text-(--color-accent) transition-all hover:border-zinc-500 hover:text-(--color-text) hover:bg-zinc-800/50"
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          custom={7}
          initial="hidden"
          animate="visible"
          variants={fade}
          className="text-xs text-(--color-muted) font-mono"
        >
          <span className="opacity-50">$</span> mmaa.dev — {new Date().getFullYear()}
        </motion.footer>
      </div>
    </div>
  )
}
