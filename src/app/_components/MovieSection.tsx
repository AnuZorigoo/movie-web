"use client";

import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Header } from "./Header";
import { Footer } from "./Footer";

export type Movie = {
  id: number;
  name: string;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  genres: [];
  vote_average: number;
  vote_count: number;
  runtime: number;
};

type Response = {
  results: Movie[];
};

type CategoryBlockProps = {
  title: string;
  apiUrl: string;
  seeMorePath: string;
};

const CategoryBlock = ({ title, apiUrl, seeMorePath }: CategoryBlockProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl, {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGFmYmVhZGExOGMxNTUzM2E2MDQ0OWZlOTA1NWE2YiIsIm5iZiI6MTc2MzUyMzMwNC4zMTQsInN1YiI6IjY5MWQzYWU4ZTdkOTBmYjA0MGZjMWQyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h3XN8YvwLBISzrh3ZLkaoNFCrHhUO1LPaVAYjq_oDsE",
          },
        });
        const data: Response = await res.json();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [apiUrl]);

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex justify-between items-center px-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <Link href={seeMorePath}>
          <Button variant="secondary" className="flex items-center gap-2">
            See more <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 px-4">
        {movies?.slice(0, 10).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export const MoviesSection = () => {
  return (
    <div className="w-full flex flex-col gap-10 pt-5">
      <CategoryBlock
        title="UpComing"
        apiUrl="https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
        seeMorePath="/category/upcoming"
      />
      <CategoryBlock
        title="Popular"
        apiUrl="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
        seeMorePath="/category/popular"
      />
      <CategoryBlock
        title="Top Rated"
        apiUrl="https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
        seeMorePath="/category/top_rated"
      />
    </div>
  );
};

const DashboardPage = () => {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <Header />
      <MoviesSection />
      <Footer />
    </div>
  );
};

export default DashboardPage;
