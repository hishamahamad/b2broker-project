import { Injectable } from '@angular/core';
import { Observable, timer, map } from 'rxjs';
import { DataItem, ChildItem } from "./data.model";

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
        this.data = this.generateData(dataSize);
        return this.data.slice(-10); // Return the last 10 elements
      })
    );
  }

  private generateData(dataSize: number): DataItem[] {
    function getRandomHexColor(): string {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    function generateRandomDataItem(idPrefix: string): DataItem {
      const id = `${idPrefix}-${Math.floor(Math.random() * dataSize * 10)}`;
      return {
        id,
        int: Math.floor(Math.random() * 100),
        float: Math.random() * 1000,
        color: getRandomHexColor(),
        child: generateRandomChildItem(id),
      };
    }

    function generateRandomChildItem(parentId: string): ChildItem {
      return {
        id: `${parentId}-child`,
        color: getRandomHexColor(),
      };
    }

    const generatedData: DataItem[] = [];

    for (let i = 0; i < dataSize; i++) {
      generatedData.push(generateRandomDataItem('ID'));
    }

    return generatedData;
  }
}
