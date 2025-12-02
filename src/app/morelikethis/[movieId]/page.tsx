"use client";
import { use, useEffect, useState } from "react";
import { Movie } from "@/app/_components/MovieSection";
import { MovieCard } from "../../_components/MovieCard";
import { Header } from "@/app/_components/Header";
import { Footer } from "@/app/_components/Footer";
import { PaginationSection } from "@/app/_components/PaginationSection";
import { Response } from "@/app/category/[categoryName]/page";

const MoreLikeThisPage = ({
  params,
}: {
  params: Promise<{ movieId: string }>;
}) => {
  const { movieId } = use(params);
  const [movie, setMovie] = useState<Movie>();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=${currentPage}`,
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGFmYmVhZGExOGMxNTUzM2E2MDQ0OWZlOTA1NWE2YiIsIm5iZiI6MTc2MzUyMzMwNC4zMTQsInN1YiI6IjY5MWQzYWU4ZTdkOTBmYjA0MGZjMWQyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h3XN8YvwLBISzrh3ZLkaoNFCrHhUO1LPaVAYjq_oDsE",
            },
          }
        );
        const data = await res.json();
        setMovie(data);

        setTotalPages(data.total_pages);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [currentPage]);

  return (
    <div className="w-full mx-auto flex flex-col gap-10 pt-10">
      <Header />
      <div className="w-full mx-auto flex justify-between items-center px-4">
        <p className="font-semibold text-[24px]">More Like this</p>
      </div>
      <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-3 w-full">
        {movie?.results.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <PaginationSection
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
      <Footer />
    </div>
  );
};

export default MoreLikeThisPage;
