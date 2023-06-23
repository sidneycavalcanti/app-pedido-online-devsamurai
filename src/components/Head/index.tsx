
//responsavel por alterar o nome da pagina conforme a paginas
//vc vai desconstruir de acordo com a minha interface

interface HeadProps {
 title:string
 description?: string
}

export function Head({ title, description = ''}: HeadProps) {
  document.title = `PEDIDO ONLINE | ${title}`
  document.querySelector('[name=description]')?.setAttribute('content', description) // condicional

  return null
}

