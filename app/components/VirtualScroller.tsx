import React, { useEffect } from "react";

import { useEditContext } from "../context/EditContext";

import { useVirtualizer } from "@tanstack/react-virtual";
import { LoaderCircle } from "lucide-react";
import { PostProps } from "./PostCard";

type Posts = {
  data: string[];
  hasNextPage: boolean;
  fetchNextPage: () => void;
  isFetchingNextPage: boolean;

  estimateSize: () => number;
  renderItem: (post: PostProps) => React.JSX.Element;
  overscan: number;
  gap: number;
};

const VirtualScroller = ({ data, hasNextPage, fetchNextPage, isFetchingNextPage, renderItem, overscan, gap }: Posts) => {
  const { scrollRef } = useEditContext();

  const Virtualizer = useVirtualizer({
    count: hasNextPage ? data.length + 1 : data.length,
    getScrollElement: () => {
      return scrollRef?.current ?? document.body;
    },
    estimateSize: () => 800,
    gap,
    overscan,
  });

  const VirtualItems = Virtualizer.getVirtualItems();

  useEffect(() => {
    const lastItem = VirtualItems[VirtualItems.length - 1];
    if (!lastItem) return;

    if (lastItem.index >= data.length - 1 && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [VirtualItems, hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <div ref={Virtualizer.setRef} className="relative">
      {VirtualItems.map((vItem) => {
        if (vItem.index === data.length - 1) {
          return (
            <div key={vItem.key} ref={Virtualizer.measureElement} style={{ transform: `translateY(${vItem.start}px)` }} className="absolute top-0 left-0 w-full py-4 flex justify-center">
              {isFetchingNextPage ? <LoaderCircle className="animate-spin size-10" /> : null}
            </div>
          );
        }

        const card = data?.[vItem?.index];
        if (!card) {
          return (
            <div key={vItem.key} style={{ height: vItem.size }}>
              <LoaderCircle className="animate-spin size-4 mx-auto" />
            </div>
          );
        }

        return (
          <div
            key={vItem.key}
            ref={Virtualizer.measureElement}
            className="absolute top-0 left-0 w-full"
            style={{
              transform: `translateY(${vItem.start}px)`,
              width: "100%",
              height: `fit-content`,
            }}
            data-index={vItem.index}
          >
            {renderItem(card, vItem?.index)}
          </div>
        );
      })}
    </div>
  );
};

export default VirtualScroller;
