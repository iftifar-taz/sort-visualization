import { SortArray } from "@/interfaces/common";
import { randomHexColor } from "@/lib/utils";
import { Metadata } from "next";
import BubbleSort from "./BubbleSort";

export const metadata: Metadata = {
  title: "Bubble Sort",
};

export default function Page() {
  const arr: SortArray[] = [];
  for (let i = 0; i < 10; i++) {
    arr.push({
      id: i,
      value: ((Math.random() * 10) << 0) + 1,
      hex: randomHexColor(),
      isSelected: false,
    });
  }
  return (
    <>
      <div>Bubble Sort Page</div>
      <BubbleSort sortArray={arr} />
    </>
  );
}
