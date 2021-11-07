export default function real (value?: string | number): number {
  const number = Number(value)
  const decimal = number / 100

  return decimal
}
