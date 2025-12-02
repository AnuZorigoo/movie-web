"use client";
import Image from "next/image";
import { Header } from "./_components/Header";
import { MovieCarousel } from "./_components/MovieCarousel";
import { Footer } from "./_components/Footer";
import { MoviesSection } from "./_components/MovieSection";

export default function Home() {
  return (
    <div className="flex bg-zinc-50 font-sans flex-col items-center gap-[42px] dark:bg-black">
      <Header />

      <MovieCarousel />

      <MoviesSection />

      <Footer />
    </div>
  );
}
