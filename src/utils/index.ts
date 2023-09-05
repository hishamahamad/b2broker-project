import { DataItem } from "../app/list/data.model";

// random data generator
export function generateData(dataSize: number): DataItem[] {
  function getRandomId(): string {
    return `${Math.floor(Math.random() * dataSize)}`;
  }

  function getRandomColor(): string {
    const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'gray', 'cyan'];
    return colors[Math.floor(Math.random() * 10)];
  }

  function generateRandomDataItem(): DataItem {
    return {
      id: getRandomId(),
      int: Math.floor(Math.pow(Math.random() * 100, 4)),
      float: +((Math.random() * 100 / Math.random()) * Math.random()).toFixed(18),
      color: getRandomColor(),
      child: {
        id: getRandomId(),
        color: getRandomColor(),
      },
    };
  }

  const generatedData: DataItem[] = [];
  for (let i = 0; i < dataSize; i++) {
    generatedData.push(generateRandomDataItem());
  }

  return generatedData;
}
