import { Injectable } from '@angular/core';
import { Observable, timer, map } from 'rxjs';
import { DataItem } from "./data.model";
import { generateData } from "../../utils";

@Injectable({
  providedIn: 'root',
})
export class PseudoSocketService {
  private data: DataItem[] = [];

  constructor() {}

  startPseudoSocket(interval: number, dataSize: number): Observable<DataItem[]> {
    return timer(0, interval).pipe(
      map(() => {
        // Generate and emit 'dataSize' pseudo-socket data
        this.data = generateData(dataSize);
        return this.data;
      })
    );
  }
}
