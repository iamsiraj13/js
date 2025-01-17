function chunk(arr, size) {
  if (size <= 0) {
    throw new Error("Chunk size must be greater than 0");
  }

  const chunked = [];
  for (let i = 0; i < arr.length; i += size) {
    console.log(chunked);
    chunked.push(arr.slice(i, i + size));
  }
  return chunked;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
