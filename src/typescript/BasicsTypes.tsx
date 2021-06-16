export const BasicsTypes = () => {

  const name: string = 'Alejo';
  const age: number = 25;
  const isActive: boolean = true;

  const powers: string[] = ['Velocity', 'Strenght', 'Fly']

  return (
    <>
      <h3>Basics Types</h3>
      {name}, {age}: {isActive && 'active'}
      <br />
      {powers.join(', ')}
    </>
  )
}
