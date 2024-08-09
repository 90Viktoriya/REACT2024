export default function getFirstValue(values: string | string[]) {
  return Array.isArray(values) ? values[0] : values;
}
