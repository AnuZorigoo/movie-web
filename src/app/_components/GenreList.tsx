"use client";

import { Button } from "@/components/ui/button";
import { Badge, ChevronRight } from "lucide-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const GenreList = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const genreIds = searchParams.get("genreIds")?.split(",") || [];

  const [genres, setGenres] = useState<MovieGenre[]>([]);

  const handleClickGenre = (genreId: string) => {
    const params = new URLSearchParams(searchParams.toString());

    const updatedGenreIds = genreIds?.includes(genreId)
      ? genreIds.filter((id) => id !== genreId)
      : [...genreIds, genreId];

    params.set("genreIds", updatedGenreIds.join(","));
    router.push(pathname + "?" + params);
  };

  useEffect(() => {
    const fetchData = async () => {
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

      const data = await res.json();

      setGenres(data.genres);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 max-w-md border-r">
      {genres?.map((el) => {
        return (
          <Button
            key={el.id}
            className="flex"
            variant={
              genreIds.includes(el.id.toString()) ? "default" : "outline"
            }
            onClick={() => handleClickGenre(el.id.toString())}
          >
            {el.name} <ChevronRight />
          </Button>
        );
      })}
    </div>
  );
};
