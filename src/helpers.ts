export function isDev(): boolean {
  if ('ELECTRON_IS_DEV' in process.env) {
    return parseInt(process.env.ELECTRON_IS_DEV, 10) === 1;
  }

  return process.defaultApp || /node_modules[\\/]electron[\\/]/.test(process.execPath);
}

export function withLeadingZero(val: number): string {
  return `${val >= 0 && val < 10 ? '0' : ''}${val}`; // don't care about negative values
}

export function formatDateTo24Time(date: Date): string {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${withLeadingZero(hours)}:${withLeadingZero(minutes)}`;
}

export function isEmptyObject(obj: Object): boolean {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}
