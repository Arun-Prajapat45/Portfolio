export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-[4vh] border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#00d4ff]/40 pulse-dot" />
            <span className="mono text-xs text-white/20 tracking-widest">
              SYSTEM OPERATIONAL
            </span>
          </div>
          <div className="text-xs text-white/20 mono tracking-wider text-center">
            © {currentYear} Arun Prajapati. All rights reserved.
          </div>
          <div className="mono text-[10px] text-white/10 tracking-widest">
            v2.0.0
          </div>
        </div>
      </div>
    </footer>
  );
}
