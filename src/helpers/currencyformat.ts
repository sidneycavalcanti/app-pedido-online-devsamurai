//opção de formatação de moeadas
export function currencyFormat (currency: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency', //representação de dinheiro
    currency: 'BRL'
  }).format(currency)
}
