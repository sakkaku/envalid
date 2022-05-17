export function formatDate(input?: string) {
  if(input == undefined) return '';
  return input.split('T')[0];
}
