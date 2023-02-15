export function roundUp(num) {
  return num.times(100).ceil().dividedBy(100).toFixed(2);
}

export function roundDown(num) {
  return num.times(100).floor().dividedBy(100).toFixed(2);
}
