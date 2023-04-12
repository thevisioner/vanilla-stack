export function chunkArray<T>(array: T[], size: number): T[][] {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, size + index));
    index += size;
  }
  return chunked;
}

export function splitArray<T>(array: T[], parts: number): T[][] {
  const size = Math.ceil(array.length / parts);
  return chunkArray(array, size);
}
