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
    <div className="flex bg-zinc-50 font-sans flex-col items-center gap-[52px]">
      <Header />
      <MovieCarousel />
      <div className="w-full mx-auto flex flex-col gap-10 pt-10">
        <div className="w-full mx-auto flex justify-between items-center px-4">
          <p className="font-semibold text-[24px]">Up Coming</p>
          <Button
            className="border-0 bg-white text-black flex items-center gap-2"
            variant="secondary"
          >
            See more <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <UpComing />
      </div>
      <div className="w-full mx-auto flex flex-col gap-10 pt-10">
        <div className="w-full mx-auto flex justify-between items-center px-4">
          <p className="font-semibold text-[24px]">Popular</p>
          <Button
            className="border-0 bg-white text-black flex items-center gap-2"
            variant="secondary"
          >
            See more <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <Popular />
      </div>
      <div className="w-full mx-auto flex flex-col gap-10 pt-10">
        <div className="w-full mx-auto flex justify-between items-center px-4">
          <p className="font-semibold text-[24px]">Top Rated</p>
          <Button
            className="border-0 bg-white text-black flex items-center gap-2"
            variant="secondary"
          >
            See more <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <TopRated />
      </div>
      <Footer />
    </div>
  );
}
