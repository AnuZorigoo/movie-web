"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { MovieCard } from "./MovieCard";
import { Movie } from "./MovieSection";


export const MoviesByGenre = () => {
    const [movies, setMovies]=useState<Movie[]>([]);
  const searchParams = useSearchParams();

  const genreIds = searchParams.get("genreIds")?.split(",") || [],
    
  

  useEffect(() => {
    const fetchData = async () => {

        try{
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genreIds.join()}&page=${1}`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGFmYmVhZGExOGMxNTUzM2E2MDQ0OWZlOTA1NWE2YiIsIm5iZiI6MTc2MzUyMzMwNC4zMTQsInN1YiI6IjY5MWQzYWU4ZTdkOTBmYjA0MGZjMWQyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h3XN8YvwLBISzrh3ZLkaoNFCrHhUO1LPaVAYjq_oDsE",
          },
        }
      );
      const data = await res.json();
      console.log(data);

      setMovies(data.results)
    }; } 
  });
  return(
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-[806px]">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>

  )
};
