import { Card, CardFooter, CardContent, CardTitle } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';


export const TopRated = () => {
    return (
        <div className="w-[1440px]  flex flex-col gap-10 items-center pt-10">
            <div className="h-9 w-[1277px] flex justify-between items-center">
                <p className="font-semibold text-[24px]">Top Rated</p>
                <div className="flex items-center gap-2"><p> See more</p>
                    <ArrowRight className="h-4 w-4" /></div>
            </div>
            <div className="grid grid-cols-5 grid-rows-2 gap-8 w-[1277px] h-[910px]">
                {movie.map((item, index) => (
                    <Card key={index} className="flex flex-col  items-start p-0 bg-secondary rounded">
                        <img src={item.image} className="w-[229.729736328125px] h-[340px] rounded"></img>
                        <CardFooter className="w-full px-0 flex flex-col g-4 items-start ">
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
        image: "/Slide 4_3 - 1 (16).png",
        review: "6,9",
        title: "Pulp Fiction",
    },
    {
        image: "/Slide 4_3 - 1 (17).png",
        review: "6,9",
        title: "The Lord of the Rings: Fellowship of the Kings",
    },
    {
        image: "/Slide 4_3 - 1 (18).png",
        review: "6,9",
        title: "The Good, the Bad and the Ugly",
    },
    {
        image: "/Slide 4_3 - 1 (19).png",
        review: "6,9",
        title: "Forrest Gump",
    },
    {
        image: "/Slide 4_3 - 1 (20).png",
        review: "6,9",
        title: "Fight Club",
    },
    {
        image: "/Slide 4_3 - 1 (21).png",
        review: "6,9",
        title: "Saving Private Ryan",
    },
    {
        image: "/Slide 4_3 - 1 (22).png",
        review: "6,9",
        title: "City of God",
    },
    {
        image: "/Slide 4_3 - 1 (23).png",
        review: "6,9",
        title: "The Green Mile",
    },
    {
        image: "/Slide 4_3 - 1 (24).png",
        review: "6,9",
        title: "Life is Beautiful",
    },
    {
        image: "/Slide 4_3 - 1 (25).png",
        review: "6,9",
        title: "Terminator 2: Judgement Day",
    },
];