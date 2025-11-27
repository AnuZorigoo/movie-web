import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

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
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  runtime: number;
};

export const MovieCarousel = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGFmYmVhZGExOGMxNTUzM2E2MDQ0OWZlOTA1NWE2YiIsIm5iZiI6MTc2MzUyMzMwNC4zMTQsInN1YiI6IjY5MWQzYWU4ZTdkOTBmYjA0MGZjMWQyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h3XN8YvwLBISzrh3ZLkaoNFCrHhUO1LPaVAYjq_oDsE",
            },
          }
        );

        const data = await res.json();
        setMovies(data.results ?? []);
      } catch (error) {
        console.log("ERROR:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return <div className="text-center text-white text-xl py-10">Loading…</div>;
  }

  return (
    <div className="flex flex-col items-center w-full">
      <Carousel className="w-full">
        <CarouselContent>
          {movies.map((item) => (
            <CarouselItem key={item.id}>
              <Link href={`/movie/${item.id}`}>
                <div className="relative">
                  <img
                    src={
                      item.backdrop_path
                        ? `https://image.tmdb.org/t/p/original${item.backdrop_path}`
                        : "/fallback.jpg"
                    }
                    alt={item.title}
                    className="w-full h-[700px] object-cover rounded"
                  />

                  <div className="absolute bottom-10 left-10 z-20 flex flex-col gap-3 text-white max-w-[350px]">
                    <p className="text-lg">Now Playing:</p>

                    <p className="text-4xl font-extrabold">{item.title}</p>

                    <div className="flex items-center gap-2">
                      <img src="/Vector (2).png" />
                      <p className="text-lg font-semibold">
                        {item.vote_average.toFixed(1)}
                      </p>
                      <p className="text-lg opacity-70">/10</p>
                    </div>

                    <p className="text-sm line-clamp-3">{item.overview}</p>

                    <Button variant="secondary" className="w-[150px] h-10">
                      <Play className="mr-2" />
                      Watch Trailer
                    </Button>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-3" />
        <CarouselNext className="absolute right-3" />
      </Carousel>
    </div>
  );
};
