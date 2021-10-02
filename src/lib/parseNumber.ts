export default function parseNumber (value: string | number): number {
  const string = value.toString()
  const float = parseFloat(string)

  return float
}
