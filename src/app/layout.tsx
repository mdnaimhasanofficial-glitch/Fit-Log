import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ExerciseProvider from "./context/ExerciseContext";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Perfect SEO & Dynamic Title Metadata
export const metadata: Metadata = {
  title: {
    default: "FitLog | Workout Library & Fitness Tracker",
    template: "%s | FitLog",
  },
  description:
    "Track your workouts, organize daily exercise plans, and calculate calories burned with FitLog — developed by Naim.",
  keywords: ["Fitness Tracker", "Workout Library", "Exercise Planner", "FitLog"],
  authors: [{ name: "Naim" }],
  creator: "Naim",
  openGraph: {
    title: "FitLog | Workout Library & Fitness Tracker",
    description: "Track your workouts, organize daily exercise plans, and calculate calories burned with FitLog.",
    type: "website",
    locale: "en_US",
    siteName: "FitLog",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0b0c10] text-white">
        <ExerciseProvider>

          
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ExerciseProvider>
      </body>
    </html>
  );
}