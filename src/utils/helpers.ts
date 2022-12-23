export function debounce(fn: Function, ms = 300) {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
}

export function convertSecondToUserView(second: number) {
  if (second < 3600)
    return new Date(second * 1000).toISOString().substring(14, 19);
  return new Date(second * 1000).toISOString().substring(11, 16);
}
