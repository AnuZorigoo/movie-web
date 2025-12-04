"use client";
import { MoviesSection } from "@/app/_components/MovieSection";
import { useEffect, useState } from "react";
import { MovieCard } from "@/app/_components/MovieCard";
import { Button } from "@/components/ui/button";
import { PaginationSection } from "@/app/_components/PaginationSection";

import { use } from "react";
import { title } from "process";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MovieCardSkeleton } from "@/app/_components/MovieCardSkeleton";

const CategoryPage = ({
  params,
}: {
  params: Promise<{ categoryName: string }>;
}) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const { categoryName } = use(params);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${categoryName}?language=en-US&page=${currentPage}`,
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGFmYmVhZGExOGMxNTUzM2E2MDQ0OWZlOTA1NWE2YiIsIm5iZiI6MTc2MzUyMzMwNC4zMTQsInN1YiI6IjY5MWQzYWU4ZTdkOTBmYjA0MGZjMWQyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h3XN8YvwLBISzrh3ZLkaoNFCrHhUO1LPaVAYjq_oDsE",
            },
          }
        );
        const data = (await res.json()) as Response;

        setMovies(data.results);
        setTotalPages(data.total_pages);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [categoryName, currentPage]);

  return (
    <div className="w-full mx-auto flex flex-col gap-10 pt-10">
      <div className="w-full mx-auto flex justify-between items-center px-4">
        <p className="font-semibold text-[24px]">
          {categoryName
            .split("_")
            .map((item) => item[0].toUpperCase() + item.slice(1))
            .join(" ")}
        </p>
      </div>
      {loading && (
        <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-3 w-full">
          {Array.from({ length: 20 }).map((_, index) => (
            <MovieCardSkeleton key={index} />
          ))}
        </div>
      )}
      {!loading && (
        <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-3 w-full">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
      <PaginationSection
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default CategoryPage;

export type Movie = {
  id: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_dat: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type Response = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};
