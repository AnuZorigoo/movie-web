import { Skeleton } from "@/components/ui/skeleton";
export function MovieIdSkeleton() {
  return (
    <Skeleton className="flex flex-col items-center top-[191px] gap-6">
      <Skeleton className=" w-[1080px] flex justify-between ">
        <Skeleton className=" h-[72px] flex flex-col">
          <div className="flex text-[18px] gap-3"></div>
        </Skeleton>
        <Skeleton className="flex flex-col">
          <div className="flex gap-2">
            <img src="/Vector (2).png" className="w-7 h-7"></img>
            <div className="flex flex-col gap-1"></div>
          </div>
        </Skeleton>
      </Skeleton>
      <Skeleton className="w-[1080px] h-[428px] flex justify-between">
        <div className="flex justify-between"></div>
      </Skeleton>
      <Skeleton className=" w-[1080px] gap-5 flex-col flex">
        <div className="flex gap-2"></div>

        <div className="flex gap-[53px]"></div>
        <div className="flex gap-[53px]"></div>
        <div className="flex gap-[53px]">
          <p className="text-[16px]"></p>
        </div>
      </Skeleton>
      <Skeleton className="flex flex-col gap-8">
        <div className="flex justify-between w-[1080px]"></div>
        <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-3 w-[1080px]"></div>
      </Skeleton>
    </Skeleton>
  );
}
