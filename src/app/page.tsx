"use client";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Search } from "lucide-react";
import { Header } from "./_components/Header";
import { MovieCarousel } from "./_components/MovieCarousel";
import { UpComing } from "./_components/UpComing";
import { Popular } from "./_components/Popular";
import { TopRated } from "./_components/TopRated"

export default function Home() {
  return (
    <div className="flex bg-zinc-50 font-sans flex-col items-center">
      <Header />
      <MovieCarousel />
      <UpComing />
      <Popular/>
      <TopRated/>
    </div>
  );
}
