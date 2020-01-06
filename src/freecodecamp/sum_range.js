function sumAll([a, b]) {
  const low = a < b ? a : b
  const high = a < b ? b : 
  
  return (
    (high - low + 1) * 
    (high + low)
  ) / 2
}

sumAll([1, 4]);
