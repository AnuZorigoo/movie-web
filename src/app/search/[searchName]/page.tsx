"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Header } from "@/app/_components/Header";
import { Footer } from "@/app/_components/Footer";
import { MovieCard } from "@/app/_components/MovieCard";

const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGFmYmVhZGExOGMxNTUzM2E2MDQ0OWZlOTA1NWE2YiIsIm5iZiI6MTc2MzUyMzMwNC4zMTQsInN1YiI6IjY5MWQzYWU4ZTdkOTBmYjA0MGZjMWQyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h3XN8YvwLBISzrh3ZLkaoNFCrHhUO1LPaVAYjq_oDsE";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") ?? "";

  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      setLoading(true);

      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=1`,
        {
          headers: {
            accept: "application/json",
            Authorization: TOKEN,
          },
        }
      );

      const data = await res.json();
      setMovies(data.results || []);
      setLoading(false);
    };

    fetchMovies();
  }, [query]);

  return (
    <div>
      <Header />

      <main className="px-10 py-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Search results for: <span className="italic">{query}</span>
        </h1>

        {loading && <p>Loading...</p>}

        {!loading && movies.length === 0 && <p>No movies found.</p>}

        {!loading && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
