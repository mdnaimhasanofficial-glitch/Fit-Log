import Link from "next/link";
import { LuDumbbell } from "react-icons/lu";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0d0d0d]/90 backdrop-blur-md border-b border-zinc-800/80 shadow-lg shadow-black/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="navbar min-h-16 p-0 justify-between">
          {/* Left side: Mobile Menu & Brand Logo */}
          <div className="navbar-start w-auto">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-square text-zinc-300 hover:text-white hover:bg-zinc-800/60 lg:hidden mr-1"
                aria-label="Toggle navigation menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-md dropdown-content bg-[#141414] rounded-xl z-50 mt-3 w-56 p-2 shadow-2xl border border-zinc-800 text-zinc-300 space-y-1"
              >
                <li>
                  <Link
                    href="/workouts"
                    className="flex items-center gap-2 font-semibold text-lime-400 bg-lime-500/10 active:bg-lime-500/20 rounded-lg py-2.5"
                  >
                    Workouts
                  </Link>
                </li>
                <li>
                  <Link
                    href="/my-plan"
                    className="font-medium hover:text-white hover:bg-zinc-800/60 rounded-lg py-2.5"
                  >
                    My Plan
                  </Link>
                </li>
              </ul>
            </div>

            <Link
              href="/"
              className="flex items-center gap-2.5 group text-xl font-extrabold tracking-wider text-white uppercase py-2 transition-transform active:scale-95"
            >
              <div className="p-1.5 rounded-lg bg-lime-400/10 border border-lime-400/20 text-lime-400 group-hover:bg-lime-400 group-hover:text-black transition-all duration-300">
                <LuDumbbell className="text-xl -rotate-45 transition-transform group-hover:scale-110" />
              </div>
              <span className="bg-linear-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                FITLOG
              </span>
            </Link>
          </div>

          {/* Center: Navigation Pill Tabs */}
          <div className="navbar-center hidden lg:flex">
            <nav className="flex items-center p-1 rounded-full bg-zinc-900/90 border border-zinc-800/80 shadow-inner">
              <Link
                href="/workouts"
                className="px-5 py-1.5 rounded-full bg-lime-400 text-black font-bold text-xs uppercase tracking-wider shadow-sm shadow-lime-400/20 transition-all hover:bg-lime-300"
              >
                Workouts
              </Link>
              <Link
                href="/my-plan"
                className="px-5 py-1.5 rounded-full text-zinc-400 hover:text-white font-medium text-xs uppercase tracking-wider transition-colors"
              >
                My Plan
              </Link>
            </nav>
          </div>

          {/* Right side: Plan and Saved Counters */}
          <div className="navbar-end w-auto flex items-center gap-4 sm:gap-6">
            <Link
              href="/plan"
              className="group flex items-center gap-2 text-sm font-semibold text-zinc-300 hover:text-white transition-colors"
            >
              <span>Plan</span>
              <span className="flex items-center justify-center min-w-5.5 h-5 px-1.5 rounded-full bg-lime-400 text-black text-xs font-bold shadow-sm shadow-lime-400/30 group-hover:scale-110 transition-transform">
                0
              </span>
            </Link>

            <div className="h-4 w-px bg-zinc-800 hidden sm:block" />

            <Link
              href="/saved"
              className="group flex items-center gap-2 text-sm font-semibold text-zinc-300 hover:text-white transition-colors"
            >
              <span>Saved</span>
              <span className="flex items-center justify-center min-w-5.5 h-5 px-1.5 rounded-full border border-zinc-700 bg-zinc-900/50 text-zinc-400 text-xs font-medium group-hover:border-zinc-500 group-hover:text-zinc-200 group-hover:scale-110 transition-all">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
