// No cmd rodar tsc NOME_DO_ARQUIVO.ts
function showTicket1(user, ticket) {
    console.log("Ol\u00E1 ".concat(user !== null && user !== void 0 ? user : 'usuário padrão', ". Seu n\u00FAmero de bilhete \u00E9 ").concat(ticket));
}
showTicket1(null, 215);
showTicket1('Eduardo', 215);