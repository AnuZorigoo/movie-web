import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export const MovieCarousel = () => {
  return (
    <div className="h-[600px] w-7xl flex flex-col items-center">
      <Carousel className="w-[1440px]">
        <CarouselContent>
          {slides.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative">
                <div className="p-1">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[600px] w-full object-cover rounded"
                  />
                </div>
                <div className="h-[404px] w-[264px] gap-4 z-30 flex flex-col absolute bottom-10 left-30 text-[#FAFAFA]">
                  <p className="text-[16px]">Now Playing:</p>
                  <p className="text-[36px] font-extrabold">{item.title}</p>
                  <div className="flex gap-1 items-center h-7 w-7">
                    <img src="/Vector (2).png"></img>
                    <p className="font-semibold text-[16px]">{item.review}</p>
                    <p className="text-[16px] text-muted-foreground">/10</p>
                  </div>
                  <p className="text-[12px] h-20 w-[302px]">
                    {item.description}
                  </p>

                  <Button variant="secondary" className="w-[145px] h-10">
                    <Play />
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
const slides = [
  {
    image: "/wicked.jpg",
    title: "Wicked",
    review: "6,9",
    description:
      "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. ",
  },
  {
    image: "/movie2.png",
    title: "Gladiator II",
    review: "6,9",
    description:
      "After his home is conquered by the tyrannical emperors who now lead Rome, Lucius is forced to enter the Colosseum and must look to his past to find strength to return the glory of Rome to its people. ",
  },

  {
    image: "/movie3.jpg",
    title: "Moana 2",
    review: "6,9",
    description:
      "After receiving an unexpected call from her wayfinding ancestors, Moana must journey to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced.",
  },
];
