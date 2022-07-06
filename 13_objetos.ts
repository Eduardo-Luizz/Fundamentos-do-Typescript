
type Point = {
  x: number;
  y: number;
}

type User = {
  name: string;
  email: string;
  age: number;
  isAdmin: boolean;
}

function printUser(user: User) {
  console.log(`${user.name} ${user.email} ${user.age} ${user.isAdmin}`);
}

function printCoord(points: Point) {
  console.log(` O eixo x é :${points.x}\nO eixo y é: ${points.y}`);
}

printCoord({x: 100, y: 50});
printUser({name: 'John', email: 'John@example.com', age: 40, isAdmin: false});