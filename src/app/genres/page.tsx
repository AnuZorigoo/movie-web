import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { GenreList } from "@/app/_components/GenreList";
import { MoviesByGenre } from "@/app/_components/MovieByGenre";
import { MovieCardSkeleton } from "@/app/_components/MovieCardSkeleton";

const MovieGenresPage = () => {
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
            <React.Suspense
              fallback={
                <div className="flex flex-wrap gap-4 max-w-md border-r">
                  <div className="h-6 w-24 bg-gray-200 rounded animate-pulse" />
                  <div className="h-6 w-20 bg-gray-200 rounded animate-pulse" />
                  <div className="h-6 w-28 bg-gray-200 rounded animate-pulse" />
                </div>
              }
            >
              <GenreList />
            </React.Suspense>
          </div>
          <React.Suspense
            fallback={
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-[806px]">
                {Array.from({ length: 8 }).map((_, index) => (
                  <MovieCardSkeleton key={index} />
                ))}
              </div>
            }
          >
            <MoviesByGenre />
          </React.Suspense>
        </div>
      </div>
    </div>
  );
};

export default MovieGenresPage;
