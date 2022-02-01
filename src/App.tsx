import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

let name: string;
name = "Prateek";
let isnumber: boolean;
let age: number;
age = 5;

//creating a objects

type Person = {
  age: number;
  name?: string;
  //to make the prtoperty optional we can
  //add the ? infront of it
};

//union type

let ison: string | number;

ison = 5;

//object
let person: Person = {
  age: 5,
  name: "Prateek"
};

console.log(ison);

//fucnitons
function SayName(name: string) {
  console.log(name);
}
