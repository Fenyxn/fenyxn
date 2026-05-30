export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <svg viewBox="0 0 100 100" className="w-9 h-9">
                <defs>
                  <linearGradient id="footerLogoGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#a78bfa" />
                  </linearGradient>
                </defs>
                <path d="M50 15 L85 65 L65 65 L50 35 L35 65 L15 65 Z" fill="url(#footerLogoGrad)" />
                <polygon points="50,42 58,58 50,74 42,58" fill="#ffffff" />
                <circle cx="50" cy="84" r="3" fill="#a78bfa" />
              </svg>
              <div>
                <p className="text-lg font-bold tracking-widest text-white leading-none">fenyxn</p>
                <p className="text-[9px] text-slate-400 tracking-[0.2em] font-medium uppercase leading-none mt-0.5">
                  Rising from data
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Building real-time fintech systems, trading automation, and production-grade software.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <a href="mailto:fenyxn2402@gmail.com" className="hover:text-white transition-colors">
                  fenyxn2402@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Fenyxn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  github.com/Fenyxn
                </a>
              </li>
              <li>
                <a
                  href="https://portfolio.fenyxn.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  portfolio.fenyxn.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-6 text-xs text-slate-600 text-center">
          © {new Date().getFullYear()} Fenyxn. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
