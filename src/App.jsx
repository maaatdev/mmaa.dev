const stack = ['C', 'C++', 'Go', 'Python', 'JavaScript', 'PHP', 'Swift', 'Lua', 'Linux', 'Docker', 'AWS', 'GCP', 'Nginx', 'Neovim', 'Git', 'Proxmox']

export default function App() {
  return (
    <main className="min-h-screen grid place-items-center px-4 py-8 sm:px-6 sm:py-12">
      <section className="site-shell w-full max-w-[460px] space-y-3 sm:space-y-4">
        <div className="card card-main">
          <div>
            <h1 className="font-(--font-title) text-[1.35rem] leading-relaxed text-white sm:text-2xl">Mat</h1>
            <p className="mt-2 text-xl leading-none text-(--color-muted) sm:text-2xl">Full Stack Developer</p>
            <p className="text-lg leading-none text-(--color-muted) sm:text-xl">& Network Engineer</p>
          </div>
          <div className="status-dot" aria-hidden="true" />
        </div>

        <div className="card space-y-1 text-lg leading-tight text-(--color-text) sm:text-xl">
          <p><span className="text-(--color-muted)">42</span> alumni</p>
          <p>cybersecurity, cloud, backend, low-level</p>
        </div>

        <div className="card flex flex-wrap gap-2">
          {stack.map(t => (
            <span key={t} className="tech-chip border border-(--color-border) px-2.5 py-1 text-base leading-none text-(--color-muted)">
              {t}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 text-center text-lg sm:text-xl">
          <a href="https://github.com/maaatdev" target="_blank" rel="noopener noreferrer" className="card link-card text-(--color-muted)">github</a>
          <a href="mailto:contact@mmaa.dev" className="card link-card text-(--color-muted)">email</a>
        </div>

      </section>
    </main>
  )
}
