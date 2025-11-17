import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const Header = () => {
  return (
    <div className="w-screen h-[59px] flex justify-center items-center">
      <div className="w-screen h-9 flex justify-between items-center  gap-8 pl-10 pr-10">
        <div className="h-5 w-[92px] flex gap-2">
          <img src="/film.png" className=" w-5 h-5"></img>
          <img src="/Movie Z.png"></img>
        </div>
        <div className="  flex h-9 w-[488px] gap-2">
          <Button variant="outline" className="h-9 w-[97px]">
            <ChevronDown />
            Genre
          </Button>
          <div className="flex items-center gap-2 border rounded px-2 py-1">
            <Search className="w-5 h-5 text-gray-500" />

            <Input
              className="flex-1 border-none focus-visible:ring-0"
              placeholder="Search"
              onChange={(e) => {
                setValue(e.target.value);
              }}
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
