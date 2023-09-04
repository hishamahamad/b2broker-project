/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  // Process the data as needed
  const processedData = processData(data);
  postMessage(processedData);
});

function processData(data: any) {
  // Implement your data processing logic here
  // For example, filter and return the last 10 items
  return data.slice(-10);
}
