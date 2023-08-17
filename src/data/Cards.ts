interface CardsSection {
  title: string,
  Primeirolink: string,
  Segundolink: string,
  Terceirolink?: string,
}

export const Cards: CardsSection[] = [
  {
    title: 'Contato',
    Primeirolink: '+55 21 9999-9999',
    Segundolink: 'email@gmail.com',
  },
  {
    title: 'Sobre nós',
    Primeirolink: 'Menu',
    Segundolink: 'Valores',
    Terceirolink: 'Pagina principal',
  },
  {
    title: 'Serviços',
    Primeirolink: 'Entrega',
    Segundolink: 'Retirada',
  }
]

