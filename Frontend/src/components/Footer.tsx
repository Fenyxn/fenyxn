export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3 gradient-text">Fenyxn</h3>
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
