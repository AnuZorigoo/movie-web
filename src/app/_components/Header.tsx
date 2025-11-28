import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  NavigationMenuItem,
  NavigationMenu,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export type Genres = {
  id: number;
  name: string;
};

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
    <header className="w-full flex justify-center border-b border-[#E4E4E7]">
      <div className="w-full h-[59px] flex items-center justify-between px-4">
        <div className="flex gap-2 items-center">
          <img src="/film.png" className="w-5 h-5" />
          <img src="/Movie Z.png" className="h-5" />
        </div>
        <div className="hidden md:flex h-9 w-[488px] gap-2 items-center">
          <NavigationMenu>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium border border-[#E4E4E7]">
                Genre
              </NavigationMenuTrigger>

              <NavigationMenuContent className="border border-[#E4E4E7] w-[577px] h-[333px] bg-white p-5">
                <div className="flex flex-col w-full h-full">
                  <p className="text-[24px] font-semibold">Genres</p>
                  <p className="text-[16px] font-light">
                    See lists of movies by genre
                  </p>
                  <div className="w-full h-px bg-[#777785] mt-5 mb-5"></div>

                  <div className="flex flex-wrap gap-2 w-[500px] h-[333px]">
                    {genres.map((genre) => (
                      <Link
                        rel="preload"
                        href={`/genres/${genre.id}`}
                        key={genre.id}
                      >
                        <div
                          key={genre.id}
                          className="text-sm hover:underline cursor-pointer flex items-center gap-1 border border-[#E4E4E7] rounded-lg text-[12px] font-semibold px-2 py-1"
                        >
                          <p> {genre?.name + "ll"}</p>

                          <ChevronRight className="h-4 w-4" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenu>
          <div className="flex items-center gap-2 px-2 py-1 w-60 h-9 border border-[#E4E4E7] rounded">
            <Search className="w-5 h-5 text-gray-500" />
            <Input
              className="flex-1 border-none focus-visible:ring-0 shadow-none"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="md:hidden">
            <Search className="h-5 w-5 text-gray-700" />
          </button>
          <Button variant="outline" className="w-9 h-9 p-0">
            <img src="/Vector (1).png" className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};
