
interface Person {
  name: string;
  age: number;
  address: Address;
}

interface Address {
  country: string;
  state: string;
  zipCode: number;
}

export const LiteralObjects = () => {

  const person: Person = {
    name: 'Alejo',
    age: 25,
    address: {
      country: 'Argentina',
      state: 'Tucuman',
      zipCode: 4000
    }
  }

  return (
    <>
      <h3>Literal Objects</h3>
      <hr />
      <code>
        <pre>
          {JSON.stringify(person, null, 2)}
        </pre>
      </code>
    </>
  )
}
