"use client";

import { use, useEffect, useState } from "react";
import { Movie } from "@/app/_components/MovieCarousel";
import { MovieCard } from "@/app/_components/MovieCard";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { PaginationSection } from "@/app/_components/PaginationSection";
import { Skeleton } from "@/components/ui/skeleton";
import { MovieCardSkeleton } from "@/app/_components/MovieCardSkeleton";
import { GenreList } from "@/app/_components/GenreList";
import { MoviesByGenre } from "@/app/_components/MovieByGenre";

type Genres = {
  id: number;
  name: string;
};

const MovieGenresPage = ({
  params,
}: {
  params: Promise<{ genreId: string }>;
}) => {
  const { genreId } = use(params);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genres[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const genreRes = await fetch(
          "https://api.themoviedb.org/3/genre/movie/list?language=en",
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGFmYmVhZGExOGMxNTUzM2E2MDQ0OWZlOTA1NWE2YiIsIm5iZiI6MTc2MzUyMzMwNC4zMTQsInN1YiI6IjY5MWQzYWU4ZTdkOTBmYjA0MGZjMWQyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h3XN8YvwLBISzrh3ZLkaoNFCrHhUO1LPaVAYjq_oDsE",
            },
          }
        );

        const genreData = (await genreRes.json()) as { genres: Genres[] };

        setGenres(genreData.genres);
        console.log(genreData.genres);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genreId}&page=${currentPage}`,
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGFmYmVhZGExOGMxNTUzM2E2MDQ0OWZlOTA1NWE2YiIsIm5iZiI6MTc2MzUyMzMwNC4zMTQsInN1YiI6IjY5MWQzYWU4ZTdkOTBmYjA0MGZjMWQyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h3XN8YvwLBISzrh3ZLkaoNFCrHhUO1LPaVAYjq_oDsE",
            },
          }
        );

        const data = await res.json();

        setMovies(data.results);
        setTotalPages(data.total_pages);

        console.log(data.results);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [genreId, currentPage]);

  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="w-[1080px] flex flex-col gap-8 ">
        <div className="w-full flex justify-between">
          <p className="text-[30px] font-semibold">Search filter</p>
        </div>
        <div className="flex gap-1 w-[1080px] justify-between">
          <div className="flex flex-col gap-5">
            <p className="text-[24px] font-semibold">Genres</p>
            <p className="text-[16px] font-normal">
              See lists of movies by genre
            </p>
            <GenreList />
          </div>
          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-[806px]">
              {Array.from({ length: 20 }).map((_, index) => (
                <MovieCardSkeleton key={index} />
              ))}
            </div>
          )}
          {!loading && <MoviesByGenre />}
        </div>
      </div>
    </div>
  );
};

export default MovieGenresPage;
