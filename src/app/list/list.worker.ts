/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  // get only the last 10 items
  postMessage(data.slice(-10));
});

