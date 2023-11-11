export function paginate(current, last) {
  let l;

  const currentPage = current,
    lastPage = last,
    delta = 3,
    left = currentPage - delta,
    right = currentPage + delta + 1,
    range = [],
    rangeWithDots = [];

  for (let i = 1; i <= lastPage; i++) {
    if (i == 1 || i == lastPage || (i >= left && i < right)) {
      range.push(i);
    }
  }

  for (let r of range) {
    if (l) {
      if (r - l === delta) {
        rangeWithDots.push("...");
      } else if (r - l !== 1) {
        rangeWithDots.push("...");
      }
    }
    rangeWithDots.push(r);
    l = r;
  }

  return rangeWithDots;
}

export function isNumber(val) {
  return typeof val === "number";
}
