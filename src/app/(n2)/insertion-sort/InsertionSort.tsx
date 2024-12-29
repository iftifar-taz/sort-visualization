"use client";

import { Button } from "@/components/ui/button";
import { SortArray } from "@/interfaces/common";
import { sleep } from "@/lib/utils";
import { ChevronFirst, ChevronRight } from "lucide-react";
import { useState } from "react";

interface BubbleSortProps {
  sortArray: SortArray[];
}

export default function InsertionSort({ sortArray }: BubbleSortProps) {
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [loading, setLoading] = useState(false);
  const [localArray, setLocalArray] = useState<SortArray[]>([...sortArray]);

  function handleRestartOnClick() {
    setLoading(true);
    setLocalArray([...sortArray]);
    setLoading(false);
  }

  async function handleNextOnClick() {
    setLoading(true);
    // TO:DO
    setLoading(false);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 justify-center">
        <Button
          className="bg-blue-700"
          onClick={handleRestartOnClick}
          disabled={loading}
        >
          <ChevronFirst /> Restart
        </Button>
        <Button
          className="bg-blue-700"
          onClick={handleNextOnClick}
          disabled={loading}
        >
          <ChevronRight /> Next
        </Button>
      </div>
      <div className="flex gap-4 justify-center items-end">
        {localArray.map((x) => {
          return (
            <div
              className="w-8"
              style={{
                height: `${x.value * 10}px`,
                backgroundColor: x.hex,
                border: x.isSelected ? "3px solid" : "",
              }}
              key={x.id}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
