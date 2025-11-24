import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { url } from "inspector";
import { Movie } from "./UpComing";

export type MovieCardProps = {
  movie: Movie;
};

export const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Card className="flex flex-col bg-secondary rounded overflow-hidden content-between justify-between">
      <div className="w-full aspect-[2/3]">
        <img
          src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
          className="w-full h-full object-cover"
        />
      </div>
      <CardFooter className="flex flex-col gap-2 items-start p-4">
        <div className="flex items-center gap-1">
          <img src="/Vector (2).png" className="h-4 w-4" />
          <p>{movie.vote_average}</p>
          <p>/10</p>
        </div>
        <CardTitle className="text-[18px] font-normal">{movie.title}</CardTitle>
      </CardFooter>
    </Card>
  );
};
