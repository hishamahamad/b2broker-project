/// <reference lib="webworker" />
import { DataItem } from "./data.model";
import { startPseudoSocket } from "../../utils/pseudoSocket";

addEventListener('message', ({ data: { event, interval, dataSize, additionalIds } }) => {
  if (event === 'OPEN') {
    startPseudoSocket(interval, dataSize).subscribe((items) => {
      // get only the last 10 items, and add the additional ids to first set of elements
      return postMessage(items.slice(-10).map((item: DataItem, index: number) => ({...item, id: additionalIds[index] ?? item.id})));
    })
  }
});

