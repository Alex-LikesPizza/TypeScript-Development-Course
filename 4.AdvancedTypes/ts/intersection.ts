type Person = {
  name: string,
}
interface Information {
  status: "Alive" | "Deceased"
  age: number
}
type DetailedPerson = Person & Information; // Has all 3 properties (similar to inheritance)


type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // number