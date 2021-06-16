export const Functions = () => {

  const sum = (a: number, b: number): number => (a + b);

  return (
    <>
      <h3>Functions</h3>
      <hr/>
      <span>Sum: {sum(1, 5)}</span>
    </>
  )
}
