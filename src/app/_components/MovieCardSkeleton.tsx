import { Skeleton } from "@/components/ui/skeleton";
export function MovieCardSkeleton() {
  return (
    <div className="flex flex-col bg-secondary rounded overflow-hidden">
      <Skeleton className="w-full"></Skeleton>
      <Skeleton className="flex flex-col gap-1 items-start h-[150px]">
        <div className="flex items-center gap-1"></div>
        <Skeleton className="text-[18px] font-normal"></Skeleton>
      </Skeleton>
    </div>
  );
}
