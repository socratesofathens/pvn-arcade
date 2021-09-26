export default function percent (value?: string | number): string | undefined {
  if (value != null) {
    const percentage = `${value}%`

    return percentage
  }
}
