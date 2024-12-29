import { SortArray } from "@/interfaces/common";
import { randomHexColor } from "@/lib/utils";
import SelectionSort from "./SelectionSort";

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
      <div>Insertion Sort Page</div>
      <SelectionSort sortArray={arr} />
    </>
  );
}
