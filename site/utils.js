export function roundUp(num) {
  return (Math.ceil(num * 100) / 100).toFixed(2);
}

export function roundDown(num) {
  return (Math.floor(num * 100) / 100).toFixed(2);
}
