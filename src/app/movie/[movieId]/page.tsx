"use client";

import { Movie } from "@/app/_components/MovieSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { use, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { MovieCard } from "@/app/_components/MovieCard";
import Link from "next/link";
import { MovieIdSkeleton } from "@/app/_components/MovieIdSkeleton";
type CastMember = {
  id: number;
  name: string;
  character: string;
};

type CrewMember = {
  id: number;
  name: string;
  job: string;
};

const MovieDetailPage = ({
  params,
}: {
  params: Promise<{ movieId: string }>;
}) => {
  const { movieId } = use(params);
  const [movie, setMovie] = useState<Movie>();
  const [video, setVideo] = useState<string>("");
  const [more, setMore] = useState<Movie>();

  const [cast, setCast] = useState<CastMember[]>([]);
  const [crew, setCrew] = useState<CrewMember[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGFmYmVhZGExOGMxNTUzM2E2MDQ0OWZlOTA1NWE2YiIsIm5iZiI6MTc2MzUyMzMwNC4zMTQsInN1YiI6IjY5MWQzYWU4ZTdkOTBmYjA0MGZjMWQyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h3XN8YvwLBISzrh3ZLkaoNFCrHhUO1LPaVAYjq_oDsE",
            },
          },
        );

        const videoRes = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGFmYmVhZGExOGMxNTUzM2E2MDQ0OWZlOTA1NWE2YiIsIm5iZiI6MTc2MzUyMzMwNC4zMTQsInN1YiI6IjY5MWQzYWU4ZTdkOTBmYjA0MGZjMWQyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h3XN8YvwLBISzrh3ZLkaoNFCrHhUO1LPaVAYjq_oDsE",
            },
          },
        );

        const castRes = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGFmYmVhZGExOGMxNTUzM2E2MDQ0OWZlOTA1NWE2YiIsIm5iZiI6MTc2MzUyMzMwNC4zMTQsInN1YiI6IjY5MWQzYWU4ZTdkOTBmYjA0MGZjMWQyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h3XN8YvwLBISzrh3ZLkaoNFCrHhUO1LPaVAYjq_oDsE",
            },
          },
        );
        const moreRes = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`,
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGFmYmVhZGExOGMxNTUzM2E2MDQ0OWZlOTA1NWE2YiIsIm5iZiI6MTc2MzUyMzMwNC4zMTQsInN1YiI6IjY5MWQzYWU4ZTdkOTBmYjA0MGZjMWQyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h3XN8YvwLBISzrh3ZLkaoNFCrHhUO1LPaVAYjq_oDsE",
            },
          },
        );

        const data = await res.json();
        const videoData = await videoRes.json();
        const castData = await castRes.json();
        const moreData = await moreRes.json();

        const teaser = videoData?.results?.filter(
          (item) => item.type.toLowerCase() === "trailer",
        )[0];

        setVideo(teaser?.key);

        setMovie(data);

        setCast(castData.cast || []);
        setCrew(castData.crew || []);
        setMore(moreData);
        setLoading(false);

        console.log(videoData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const directors = crew.filter((p) => p.job === "Director");
  const writers = crew.filter(
    (p) => p.job === "Writer" || p.job === "Screenplay" || p.job === "Story",
  );
  const topStars = cast.slice(0, 3);

  return (
    <div className="flex flex-col items-center gap-20">
      {loading && <MovieIdSkeleton />}
      {!loading && (
        <div className="flex flex-col items-center top-[191px] gap-6">
          <div className=" w-[1080px] flex justify-between ">
            <div className=" h-[72px] flex flex-col">
              <p className="font-extrabold text-[36px]">{movie?.title}</p>
              <div className="flex text-[18px] gap-3">
                <p>{movie?.release_date}</p>
                <p></p>
                <p>
                  {Math.floor(movie?.runtime / 60)}h {movie?.runtime % 60}min
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p> Rating</p>
              <div className="flex gap-2">
                <img src="/Vector (2).png" className="w-7 h-7"></img>
                <div className="flex flex-col gap-1">
                  <p>{movie?.vote_average}</p>
                  <p>{movie?.vote_count}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1080px] h-[428px] flex justify-between">
            <div className="flex justify-between">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
              ></img>
              <ReactPlayer
                src={`https://www.youtube.com/watch?v=${video}`}
                width={760}
                height={428}
              />
            </div>
          </div>
          <div className=" w-[1080px] gap-5 flex-col flex">
            <div className="flex gap-2">
              {movie?.genres?.map((g: { id: number; name: string }) => (
                <span
                  key={g.id}
                  className="px-3 py-1 rounded-full border text-[12px] font-semibold"
                >
                  {g.name}
                </span>
              ))}
            </div>
            <div>{movie?.overview}</div>
            <div className="flex gap-[53px]">
              <p className="text-[16px] font-bold">Director</p>
              <p>{directors.map((d) => d.name).join(", ")}</p>
            </div>
            <div className="flex gap-[53px]">
              <p className="text-[16px] font-bold">Writers</p>
              <p>{writers.map((w) => w.name).join(", ")}</p>
            </div>
            <div className="flex gap-[53px]">
              <p className="text-[16px] font-bold">Stars</p>
              <p className="text-[16px]">
                {topStars.map((s) => s.name).join(", ")}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex justify-between w-[1080px]">
              <p className="text-[24px] font-semibold">More like this</p>

              <Link href={`/morelikethis/${movieId}`}>
                <Button variant="secondary">
                  See more <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-3 w-[1080px]">
              {more?.results.slice(0, 5).map((movie: Movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailPage;
