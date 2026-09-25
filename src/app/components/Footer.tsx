import Link from "next/link";
import { LuDumbbell } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-[#0b0c10] border-t border-gray-800/60 py-6 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo Section */}
        <div>
            <Link href="/" className="flex items-center gap-2.5 group text-lg font-extrabold tracking-wider text-white uppercase py-2 transition-transform active:scale-95">
                <span className="text-lime-400 flex items-center gap-2"><LuDumbbell /> FITLOG</span>
            </Link>
        </div>
            

        <div>

        {/* Copyright Text */}
        <p className="text-gray-500 text-xs text-center md:text-right font-medium">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;