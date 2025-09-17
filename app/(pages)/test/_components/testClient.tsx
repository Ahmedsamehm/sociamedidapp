"use client";
import React, { useRef } from "react";
import useGetPost from "../_hooks/useGetPost";
import CardTest from "./cardTest";
import { useVirtualizer } from "@tanstack/react-virtual";

const TestClient = () => {
  const { isPending, post } = useGetPost();

  const scrollRef = useRef<HTMLDivElement>(null);

  const Virtualizer = useVirtualizer({
    count: post?.length || 0,
    getScrollElement: () => scrollRef.current,
    estimateSize: () => 160,
    gap: 20,
  });

  const VirtualItems = Virtualizer.getVirtualItems();

  if (isPending) {
    return <div>Loading...</div>;
  }

  // first dev for scrolling
  // for relative and hight item
  //  3- for wrapping items
  return (
    <div ref={scrollRef} className="min-h-screen w-full overflow-auto">
      <div className="space-y-3 relative size-full" style={{ height: `${Virtualizer.getTotalSize()} px` }}>
        {VirtualItems.map((VItem: any) => {
          const items = post?.[VItem.index];

          if (!items) return null;
          return (
            <div
              key={VItem.index}
              className="absolute top-0 left-0 w-full"
              style={{
                transform: `translateY(${VItem.start}px)`,
                height: `${VItem.size}px `,
                width: "100%",
              }}
              data-index={VItem.index}
              ref={Virtualizer.measureElement}
            >
              <CardTest key={VItem.id} item={items} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TestClient;
