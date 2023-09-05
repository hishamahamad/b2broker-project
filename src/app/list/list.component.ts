import { Component, OnInit } from '@angular/core';
import { PseudoSocketService } from './pseudo-socket.service';
import { DataItem } from "./data.model";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  data: DataItem[] = [];

  constructor(private pseudoSocketService: PseudoSocketService) {}

  ngOnInit(): void {
    // Initialize the Web Worker
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(new URL('./list.worker', import.meta.url));

      // Subscribe to messages from the Web Worker
      worker.onmessage = ({ data }) => {
        this.data = data;
      };

      worker.postMessage('Worker active');

      // Start the pseudo-socket and send data to the Web Worker
      this.pseudoSocketService.startPseudoSocket(300000, 1000).subscribe((pseudoSocketData) => {
        // Send the received data to the Web Worker for processing
        worker.postMessage(pseudoSocketData);
      });
    } else {
      // Web workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
      console.log('Web workers are not supported in your environment')
    }
  }
}
