// No cmd rodar tsc NOME_DO_ARQUIVO.ts

function showTicket(user: string | null, ticket: number) {
  console.log(`Olá ${user ?? 'usuário padrão'}. Seu número de bilhete é ${ticket}`);
}

showTicket("Eduardo", 215)