"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight, Search, Moon, Sun } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  NavigationMenuItem,
  NavigationMenu,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { useEffect, useState } from "react";
import Link from "next/link";
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
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchGenres = async () => {
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

    fetchGenres();
  }, []);

  const handleSearch = async (value: string) => {
    setQuery(value);

    if (!value.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${value}&language=en-US`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGFmYmVhZGExOGMxNTUzM2E2MDQ0OWZlOTA1NWE2YiIsIm5iZiI6MTc2MzUyMzMwNC4zMTQsInN1YiI6IjY5MWQzYWU4ZTdkOTBmYjA0MGZjMWQyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h3XN8YvwLBISzrh3ZLkaoNFCrHhUO1LPaVAYjq_oDsE",
          },
        }
      );

      const data = await res.json();
      setResults(data.results ?? []);
    } catch (error) {
      console.log("SEARCH ERROR:", error);
    }

    setLoading(false);
  };

  return (
    <header className="w-full flex justify-center border-b border-[#E4E4E7] dark:border-gray-700 relative">
      <div className="w-full h-[59px] flex items-center justify-between px-4 relative">
        <Link href="/">
          <div className="flex gap-2 items-center">
            <img src="/film.png" className="w-5 h-5" />
            <img src="/Movie Z.png" className="h-5" />
          </div>
        </Link>
        <div className="hidden md:flex h-9 w-[488px] gap-2 items-center relative">
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
                      <Link
                        href={`/genres?genreIds=${genre.id}`}
                        key={genre.id}
                      >
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
          <div className="relative flex items-center gap-2 px-2 py-1 w-60 h-9 border border-[#E4E4E7] dark:border-gray-700 rounded">
            <Search className="w-5 h-5 text-gray-500" />
            <Input
              className="flex-1 border-none focus-visible:ring-0 shadow-none bg-transparent"
              placeholder="Search"
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
            />
            {query && (
              <div className="absolute top-10 left-0 w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg max-h-80 overflow-y-auto z-50">
                {loading && (
                  <p className="text-center py-3 text-sm text-gray-500">
                    Searching...
                  </p>
                )}
                {!loading && results.length === 0 && (
                  <p className="text-center py-3 text-sm text-gray-500">
                    Result not found
                  </p>
                )}
                {results.map((movie) => (
                  <Link
                    href={`/movie/${movie.id}`}
                    key={movie.id}
                    onClick={() => {
                      setQuery("");
                      setResults([]);
                    }}
                  >
                    <div className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer flex items-center gap-2">
                      <img
                        src={
                          movie.poster_path
                            ? `https://image.tmdb.org/t/p/w92${movie.poster_path}`
                            : "/fallback.jpg"
                        }
                        className="w-10 h-14 object-cover rounded"
                      />
                      <p className="text-sm">{movie.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
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
