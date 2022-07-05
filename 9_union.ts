function printUserId(id: number | string) { // Pode aceitar um id do tipo number ou string
  let message = `O ID do usuário é: ${id}`;
  return message; 
}

printUserId(1);
printUserId('2');