type User = {
  name: string;
  email: string;
  age: number;
  isAdmin?: boolean; // Este campo é opcional
}

let newUser: User = {
  name: "Jane Doe",
  email: "jdoe@example.com",
  age: 32
}