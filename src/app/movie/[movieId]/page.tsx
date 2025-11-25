"use client";

import { Footer } from "@/app/_components/Footer";
import { Header } from "@/app/_components/Header";
import { Movie } from "@/app/_components/UpComing";
import { use, useEffect, useState } from "react";
import ReactPlayer from "react-player";

const MovieDetailPage = ({
  params,
}: {
  params: Promise<{ movieId: string }>;
}) => {
  const { movieId } = use(params);
  const [movie, setMovie] = useState<Movie>();
  const [video, setVideo] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGFmYmVhZGExOGMxNTUzM2E2MDQ0OWZlOTA1NWE2YiIsIm5iZiI6MTc2MzUyMzMwNC4zMTQsInN1YiI6IjY5MWQzYWU4ZTdkOTBmYjA0MGZjMWQyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h3XN8YvwLBISzrh3ZLkaoNFCrHhUO1LPaVAYjq_oDsE",
            },
          }
        );

        const videoRes = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
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
        const videoData = await videoRes.json();
        console.log(videoData?.results[0].key);

        setMovie(data);
        setVideo(videoData?.results[0].key);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center gap-20">
      <Header />
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
        <div className="h-[271px] w-[1080px] gap-5 flex-col flex">
          <div>{movie?.genre_ids}</div>
          <div>{movie?.overview}</div>
          <div>
            <p className="text-[16px] font-bold">Director</p>
            <p></p>
          </div>
          <div>
            <p className="text-[16px] font-bold">Writers</p>
            <p></p>
          </div>
          <div>
            <p className="text-[16px] font-bold">Stars</p>
            <p></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MovieDetailPage;
