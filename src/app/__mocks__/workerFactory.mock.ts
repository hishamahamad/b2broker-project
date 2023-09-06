export function spawnWorker() {
  return new FakeWorker();
}

class FakeWorker {
  private readonly onmessage: (message?: any) => void;
  constructor() {
    this.onmessage = () => { };
  }

  postMessage() {
    this.onmessage('data');
  }
}
