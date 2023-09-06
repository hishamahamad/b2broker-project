import { Component, OnInit } from '@angular/core';
import { DataItem } from "./data.model";
import { spawnWorker } from "./workerFactory";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  data: DataItem[] = [];
  interval: number = 300;
  dataSize: number = 1000;
  additionalIds: number[] = [228, 522, 904];

  constructor() {}

  ngOnInit(): void {
    this.init();
  }

  init() {
    try {
      if (this.interval === 0) {
        throw 'Interval must be greater than 0';
      }
      // Create a new worker
      const worker = spawnWorker();

      // Subscribe to messages from the Web Worker
      worker.onmessage = ({ data }) => {
        this.data = data;
      };

      // send the parameters to the websocket
      worker.postMessage({ interval: this.interval, dataSize: this.dataSize, additionalIds: this.additionalIds });
    } catch (error) {
      console.log(error);
    }
  }
}
