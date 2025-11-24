"use client";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Search } from "lucide-react";
import { Header } from "./_components/Header";
import { MovieCarousel } from "./_components/MovieCarousel";
import { TopRated } from "./_components/TopRated";
import { Footer } from "./_components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { UpComing } from "./_components/UpComing";
import { Popular } from "./_components/Popular";

export default function Home() {
  return (
    <div className="flex bg-zinc-50 font-sans flex-col items-center gap-[42px]">
      <Header />
      <MovieCarousel />

      <UpComing />

      <Popular />

      <TopRated />

      <Footer />
    </div>
  );
}
