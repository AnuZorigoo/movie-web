import { Skeleton } from "@/components/ui/skeleton";
export function MovieCardSkeleton() {
  return (
    <Skeleton className="flex flex-col bg-secondary rounded overflow-hidden">
      <div className="w-full"></div>
      <Skeleton className="flex flex-col gap-1 items-start h-[150px]">
        <div className="flex items-center gap-1"></div>
        <Skeleton className="text-[18px] font-normal"></Skeleton>
      </Skeleton>
    </Skeleton>
  );
}
