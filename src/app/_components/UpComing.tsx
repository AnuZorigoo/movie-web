import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';

export const UpComing = () => {
  return (
    <div className="w-[1440px] flex flex-col gap-10 items-center pt-10">
      <div className="h-9 w-[1277px] flex justify-between items-center">
        <p className="font-semibold text-[24px]">UpComing</p>
        <div className="flex items-center gap-2"><p> See more</p>
          <ArrowRight className="h-4 w-4" /></div>
      </div>
      <div className="grid grid-cols-5 grid-rows-2 gap-8 w-[1277px] h-[910px]">
        {movie.map((item, index) => (
          <Card key={index} className="flex flex-col content-between p-0 bg-secondary rounded">
            <img src={item.image} className="w-[229.729736328125px] h-[340px] rounded"></img>
            <CardFooter className="w-full px-0 flex flex-col g-4 items-start  ">
              <div className="flex items-center gap-1">
                <img src="/Vector (2).png" className="h-4 w-4"></img>
                <p>{item.review}</p>
                <p>/10</p>
              </div>
              <CardTitle className="text-[18px] font-normal">{item.title}</CardTitle>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

const movie = [
  {
    image: "/641528080ffbeccc1a7cdd3a5199e0755d66e253.jpg",
    review: "6,9",
    title: "Dear Santa",
  },
  {
    image: "/how to.jpg",
    review: "6,9",
    title: "How To Train Your Dragon Live Action",
  },
  {
    image: "/alien.jpg",
    review: "6,9",
    title: "Alien Romulus",
  },
  {
    image: "/ashes.jpg",
    review: "6,9",
    title: "From the Ashes",
  },
  {
    image: "/Slide 4_3 - 1.png",
    review: "6,9",
    title: "Space Dogg",
  },
  {
    image: "/Slide 4_3 - 1 (1).png",
    review: "6,9",
    title: "The Order",
  },
  {
    image: "/Slide 4_3 - 1 (2).png",
    review: "6,9",
    title: "Y2K",
  },
  {
    image: "/Slide 4_3 - 1 (3).png",
    review: "6,9",
    title: "Solo Leveling: ReAwakening",
  },
  {
    image: "/Slide 4_3 - 1 (4).png",
    review: "6,9",
    title: "Get Away",
  },
  {
    image: "/Slide 4_3 - 1 (5).png",
    review: "6,9",
    title: "Sonic the Hedgehog 3",
  },
];
