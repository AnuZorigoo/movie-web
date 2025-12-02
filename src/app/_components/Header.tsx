"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  NavigationMenuItem,
  NavigationMenu,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { useEffect, useState } from "react";
import Link from "next/link";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export type Genres = {
  id: number;
  name: string;
};

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      <Sun className="h-[1.2rem] w-[1.2rem] transition-all rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] transition-all rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export const Header = () => {
  const [genres, setGenres] = useState<Genres[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/genre/movie/list?language=en",
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGFmYmVhZGExOGMxNTUzM2E2MDQ0OWZlOTA1NWE2YiIsIm5iZiI6MTc2MzUyMzMwNC4zMTQsInN1YiI6IjY5MWQzYWU4ZTdkOTBmYjA0MGZjMWQyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h3XN8YvwLBISzrh3ZLkaoNFCrHhUO1LPaVAYjq_oDsE",
            },
          }
        );

        const data = (await res.json()) as { genres: Genres[] };
        setGenres(data.genres);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <header className="w-full flex justify-center border-b border-[#E4E4E7] dark:border-gray-700">
      <div className="w-full h-[59px] flex items-center justify-between px-4">
        <Link href="/">
          <div className="flex gap-2 items-center">
            <img src="/film.png" className="w-5 h-5" />
            <img src="/Movie Z.png" className="h-5" />
          </div>
        </Link>

        <div className="hidden md:flex h-9 w-[488px] gap-2 items-center">
          <NavigationMenu>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium border border-[#E4E4E7] dark:border-gray-700">
                Genre
              </NavigationMenuTrigger>

              <NavigationMenuContent className="border border-[#E4E4E7] dark:border-gray-700 w-[577px] h-[333px] bg-white dark:bg-gray-900 p-5">
                <div className="flex flex-col w-full h-full">
                  <p className="text-[24px] font-semibold">Genres</p>
                  <p className="text-[16px] font-light">
                    See lists of movies by genre
                  </p>
                  <div className="w-full h-px bg-[#777785] mt-5 mb-5"></div>

                  <div className="flex flex-wrap gap-2 w-[500px] h-[333px]">
                    {genres.map((genre) => (
                      <Link href={`/genres/${genre.id}`} key={genre.id}>
                        <div className="text-sm hover:underline cursor-pointer flex items-center gap-1 border border-[#E4E4E7] dark:border-gray-700 rounded-lg text-[12px] font-semibold px-2 py-1">
                          <p>{genre.name}</p>
                          <ChevronRight className="h-4 w-4" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenu>

          <div className="flex items-center gap-2 px-2 py-1 w-60 h-9 border border-[#E4E4E7] dark:border-gray-700 rounded">
            <Search className="w-5 h-5 text-gray-500" />
            <Input
              className="flex-1 border-none focus-visible:ring-0 shadow-none bg-transparent"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="md:hidden">
            <Search className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          </button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
