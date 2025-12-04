"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { MovieCard } from "./MovieCard";
import { Movie } from "./MovieSection";
import { Response } from "../category/[categoryName]/page";
import { MovieCardSkeleton } from "./MovieCardSkeleton";
import { PaginationSection } from "./PaginationSection";

export const MoviesByGenre = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const genreIds = searchParams.get("genreIds")?.split(",") || [];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genreIds.join()}&page=${currentPage}`,
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGFmYmVhZGExOGMxNTUzM2E2MDQ0OWZlOTA1NWE2YiIsIm5iZiI6MTc2MzUyMzMwNC4zMTQsInN1YiI6IjY5MWQzYWU4ZTdkOTBmYjA0MGZjMWQyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h3XN8YvwLBISzrh3ZLkaoNFCrHhUO1LPaVAYjq_oDsE",
            },
          }
        );
        const data: Response = (await res.json()) as Response;

        setMovies(data.results);
        setTotalPages(data.total_pages);

        console.log(data.results);

        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [genreIds.join()]);

  return (
    <div className="w-[1080px] flex flex-col gap-8 ">
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-[806px]">
          {Array.from({ length: 20 }).map((_, index) => (
            <MovieCardSkeleton key={index} />
          ))}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-[806px]">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <PaginationSection
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
