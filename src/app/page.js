"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Header } from "./_components/Header";
import { MovieCarousel } from "./_components/MovieCarousel";
import { UpComing } from "./_components/UpComing";

export default function Home() {
  return (
    <div className="flex h-screen  bg-zinc-50 font-sans flex-col">
      <Header />
      <MovieCarousel />
      <UpComing />
    </div>
  );
}
