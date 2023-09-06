// using factory to spawn worker because passing relative paths is notorious and Jest struggles with imports.meta
export function spawnWorker() {
  if (typeof Worker !== 'undefined') {
    return new Worker(new URL('./list.worker', import.meta.url));
  }
  else {
    throw Error('Workers are not supported in your environment');
  }
}
