import { ReactNode } from "react";

interface NMasonryProps<T> {
  children: ReactNode[];
  numberOfColumns: number;
}

/**
 * NOTE: This is not true masonry since the heights at the bottom of the component
 * are not managed logically.
 */
export default function NMasonry<T>(props: NMasonryProps<T>) {
  var columnItems: ReactNode[][] = [];

  props.children.forEach((value, index) => {
    const columnIndex = index % props.numberOfColumns;
    if (columnItems[columnIndex] == undefined) {
      columnItems[columnIndex] = [];
    }
    columnItems[columnIndex].push(value);
  });

  // NOTE: If you wanna do lazy loading: https://github.com/civiccc/react-waypoint
  // @TODO: - Fix clumping when the page loads, or wait until content before showing numbers?
  // If you want to reproduce the clumping just hold "Shift" + click refresh on the browser to clear
  // the cache for images.

  return (
    <div className="flex flex-col justify-center gap-2 md:flex-row">
      {columnItems.map((values, index) => (
        <div className="flex flex-col items-center gap-2" key={index}>
          {values.map((subValues, subIndex) => (
            <div key={subIndex}>{subValues}</div>
          ))}
        </div>
      ))}
    </div>
  );
}
