export function formatDate(date) {
  return date.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' });
}

export function formatURLParam(param) {
  return encodeURIComponent(param);
}
