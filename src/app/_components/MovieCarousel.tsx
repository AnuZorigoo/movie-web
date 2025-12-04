import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export type Movie = {
  id: number;
  backdrop_path: string;
  title: string;
  overview: string;
  vote_average: number;
};

export const MovieCarousel = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const [showTrailer, setShowTrailer] = useState(false);

  const API_KEY =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGFmYmVhZGExOGMxNTUzM2E2MDQ0OWZlOTA1NWE2YiIsIm5iZiI6MTc2MzUyMzMwNC4zMTQsInN1YiI6IjY5MWQzYWU4ZTdkOTBmYjA0MGZjMWQyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h3XN8YvwLBISzrh3ZLkaoNFCrHhUO1LPaVAYjq_oDsE";

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
          {
            headers: {
              accept: "application/json",
              Authorization: API_KEY,
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

  const handleWatchTrailer = async (movieId: number) => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        {
          headers: {
            accept: "application/json",
            Authorization: API_KEY,
          },
        }
      );

      const data = await res.json();

      const trailer =
        data.results?.find(
          (v: any) =>
            v.type === "Trailer" && v.official === true && v.site === "YouTube"
        ) || data.results?.find((v: any) => v.type === "Trailer");

      if (trailer) {
        setTrailerKey(trailer.key);
        setShowTrailer(true);
      } else {
        alert("Trailer not found");
      }
    } catch (error) {
      console.log("TRAILER ERROR:", error);
    }
  };

  if (loading) {
    return <div className="text-center text-white text-xl py-10">Loading…</div>;
  }

  return (
    <div className="flex flex-col items-center w-full">
      {showTrailer && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-full max-w-3xl aspect-video bg-black">
            <button
              className="absolute -top-12 right-0 text-white"
              onClick={() => setShowTrailer(false)}
            >
              <X size={32} />
            </button>

            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1`}
              allow="autoplay"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      <Carousel className="w-full">
        <CarouselContent>
          {movies.slice(0, 5).map((item) => (
            <CarouselItem key={item.id}>
              <div className="relative">
                <img
                  src={
                    item.backdrop_path
                      ? `https://image.tmdb.org/t/p/original${item.backdrop_path}`
                      : "/fallback.jpg"
                  }
                  alt={item.title}
                  className="w-full h-[800px] object-cover rounded"
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

                  <Button
                    variant="secondary"
                    className="w-[150px] h-10"
                    onClick={(e) => {
                      e.preventDefault();
                      handleWatchTrailer(item.id);
                    }}
                  >
                    <Play className="mr-2" />
                    Watch Trailer
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-3" />
        <CarouselNext className="absolute right-3" />
      </Carousel>
    </div>
  );
};
