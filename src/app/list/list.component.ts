import { Component, OnInit } from '@angular/core';
import { DataItem } from "./data.model";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  data: DataItem[] = [];
  interval: number = 300;
  dataSize: number = 10000000;
  additionalIds: number[] = [228, 522, 904];

  constructor() {}

  ngOnInit(): void {
    // Initialize the Web Worker
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(new URL('./list.worker', import.meta.url));

      // Subscribe to messages from the Web Worker
      worker.onmessage = ({ data }) => {
        this.data = data;
      };

      // Post the OPEN message to webworker, to trigger pseudosocket
      worker.postMessage({ event: 'OPEN', interval: this.interval, dataSize: this.dataSize, additionalIds: this.additionalIds });
    } else {
      // Web workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
      console.log('Web workers are not supported in your environment')
    }
  }
}
