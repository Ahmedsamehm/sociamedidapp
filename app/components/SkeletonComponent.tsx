import React from "react";
import { Skeleton } from "./shared/skeleton";

const SkeletonComponent = ({ hight }: { hight?: string }) => {
  "use memo";
  return (
    <div className="flex flex-col space-y-3 p-3">
      <Skeleton className={`${hight ? `h-[${hight}]` : "h-[50vh]"}  w-full rounded-xl`} />
      <div className="space-y-2">
        <Skeleton className="h-6  w-full" />
      </div>
    </div>
  );
};

export default SkeletonComponent;
