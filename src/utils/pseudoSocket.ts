import { map, Observable, timer } from "rxjs";
import { DataItem } from "../app/list/data.model";
import { generateData } from "./generateData";

export function startPseudoSocket(interval: number, dataSize: number): Observable<DataItem[]> {
  return timer(0, interval).pipe(
    map(() => {
      // Generate random data of array size determined by 'dataSize'
      return generateData(dataSize);
    })
  );
}
