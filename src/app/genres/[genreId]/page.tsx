"use client";
import { Footer } from "@/app/_components/Footer";
import { Header } from "@/app/_components/Header";
import { use, useEffect, useState } from "react";
import { Movie } from "@/app/_components/MovieCarousel";
import { MovieCard } from "@/app/_components/MovieCard";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

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
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genreId}&page=${1}`,
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

        console.log(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [genreId]);

  return (
    <div className="flex flex-col gap-8 items-center">
      <Header />
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
            <div className="flex flex-wrap gap-2 w-[272px] h-[333px]">
              {genres?.map((genre) => (
                <Link href={`/genres/${genre.id}`} key={genre.id}>
                  <div
                    key={genre.id}
                    className="text-sm hover:underline cursor-pointer flex items-center gap-1 border border-[#E4E4E7] rounded-lg text-[12px] font-semibold px-2 py-1"
                  >
                    <p>{genre.name}</p>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-[806px]">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MovieGenresPage;
