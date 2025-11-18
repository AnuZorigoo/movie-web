import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { NavigationMenuItem, NavigationMenu, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
import { ChevronRight } from 'lucide-react';

export const Header = () => {
  return (
    <div className="w-[1440px] h-[59px] flex justify-center items-center">
      <div className="w-screen h-9 flex justify-between items-center  gap-8 pl-10 pr-10">
        <div className="h-5 w-[92px] flex gap-2">
          <img src="/film.png" className=" w-5 h-5"></img>
          <img src="/Movie Z.png"></img>
        </div>
        <div className="flex h-9 w-[488px] gap-2 items-center">
          <NavigationMenu>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium border border-[#E4E4E7]">
                Genre
              </NavigationMenuTrigger>

              <NavigationMenuContent className="border border-[#E4E4E7] w-[577px] h-[333px] bg-white p-5">
                <div className="flex flex-col w-[577px] h-[333px]">
                  <p className="text-[24px] font-semibold">Genres</p>
                  <p className="text-[16px] font-light">See lists of movies by genre</p>

                  <div className="w-full h-px bg-[#777785] mt-5 mb-5"></div>


                  <div className=" flex flex-wrap gap-2">
                    {genres.map((item, index) => (
                      <p key={index} className="text-sm hover:underline cursor-pointer h-5 border border-[#E4E4E7] rounded-lg text-[12px] font-semibold px-2 flex">
                        {item.name} <ChevronRight className="h-4 w-4" />
                      </p>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenu>

          <div className="flex items-center gap-2 px-2 py-1 w-[379px] h-9 border border-[#E4E4E7] rounded">
            <Search className="w-5 h-5 text-gray-500" />

            <Input
              className="flex-1 border-none focus-visible:ring-0 shadow-none"
              placeholder="Search"
            />
          </div>
        </div>
        <div>
          <Button variant="outline" className="w-9 h-9 p-0">
            <img src="/Vector (1).png" className="h-4 w-4"></img>
          </Button>
        </div>
      </div>
    </div>
  );
};
const genres = [
  {
    name: "Action"
  },
  {
    name: "Adventure"
  },
  {
    name: "Animation"
  },
  {
    name: "Biography"
  },
  {
    name: "Comedy"
  },
  {
    name: "Crime"
  },
  {
    name: "Documentary"
  },
  {
    name: "Drama"
  },
  {
    name: "Family"
  },
  {
    name: "Fantasy"
  },
  {
    name: "Film-Noir"
  },
  {
    name: "Game-Show"
  },
  {
    name: "History"
  },
  {
    name: "Horror"
  },
  {
    name: "Music"
  },
  {
    name: "Musical"
  },
  {
    name: "Mystery"
  },
  {
    name: "News"
  },
  {
    name: "Reality-TV"
  },
  {
    name: "Romance"
  }, {
    name: "Sci-Fi"
  }, {
    name: "Short"
  }, {
    name: "Sport"
  }, {
    name: "Talk-Show"
  }, {
    name: "Thriller"
  }, {
    name: "War"
  },
  {
    name: "Western"
  },

]