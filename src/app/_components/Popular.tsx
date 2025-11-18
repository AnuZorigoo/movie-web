import { Card, CardFooter, CardContent, CardTitle } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';


export const Popular = () => {
    return (
        <div className="w-[1440px]  flex flex-col gap-10 items-center pt-10">
            <div className="h-9 w-[1277px] flex justify-between items-center">
                <p className="font-semibold text-[24px]">Popular</p>
                <div className="flex items-center gap-2"><p> See more</p>
                    <ArrowRight className="h-4 w-4" /></div>
            </div>
            <div className="grid grid-cols-5 grid-rows-2 gap-8 w-[1277px] h-[910px]">
                {movie.map((item, index) => (
                    <Card key={index} className="flex flex-col content-between p-0 bg-secondary rounded">
                        <img src={item.image} className="w-[229.729736328125px] h-[340px] rounded"></img>
                        <CardFooter className="w-full px-0 flex flex-col g-4 items-start pb-4">
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
    )
}
const movie = [
    {
        image: "/Slide 4_3 - 1 (6).png",
        review: "6,9",
        title: "The Shawshank Redemption",
    },
    {
        image: "/Slide 4_3 - 1 (7).png",
        review: "6,9",
        title: "The Godfather",
    },
    {
        image: "/Slide 4_3 - 1 (8).png",
        review: "6,9",
        title: "The Dark Knight",
    },
    {
        image: "/Slide 4_3 - 1 (9).png",
        review: "6,9",
        title: "12 Angry Men",
    },
    {
        image: "/Slide 4_3 - 1 (10).png",
        review: "6,9",
        title: "The Lord of the Rings: The  Return of the King",
    },
    {
        image: "/Slide 4_3 - 1 (11).png",
        review: "6,9",
        title: "Internstellar",
    },
    {
        image: "/Slide 4_3 - 1 (12).png",
        review: "6,9",
        title: "Se7en",
    },
    {
        image: "/Slide 4_3 - 1 (13).png",
        review: "6,9",
        title: "It’s a Wonderful life",
    },
    {
        image: "/Slide 4_3 - 1 (14).png",
        review: "6,9",
        title: "Seven samurai",
    },
    {
        image: "/Slide 4_3 - 1 (15).png",
        review: "6,9",
        title: "The Silence of the Lambs",
    },
];
