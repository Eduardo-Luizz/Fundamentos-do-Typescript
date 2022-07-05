const userName = "Eduardo"
userName(); // Avisa que não é função

const user = {
  name: "Eduardo",
  email: "eduardo@123.com",
}

console.log(user.location); // Avisa que não existe a propriedade location

function sum(a:number, b:number) { // Sem colocar a:number b:number ele avisa que não é legal pois pode ser qualqeur coisa
  return a + b;
}

sum.toLowerCase(); // Avisa que não existe esse metodo dentro do tipo number