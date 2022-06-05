# Ignite Feed

Projeto com objetivo de estudos e prática de programação. Criação de Feed Ignite da Rocketseat.

# Tecnologias e Ferramentas
- CSS modules
- Reactjs
- phosphor-react - serve para pegar os mesmos ícones do figma através de uma biblioteca em React.

### Anotações

* Estiliza o componente irmão em diante. No caso a partir do segundo post receberão essa configuração.
~~~~css
.post + .post {
  margin-top: 2rem;
}
~~~~
* :focus-within - um elemento é renderizado quando o elmento com este pseudo-classe for focado. Neste caso, a caixa de comentário ao ser focado, um botão de "Comentar" é renderizado na tela.
~~~~css
.commentForm footer{
  visibility: hidden;
  max-width: 0;
}
.commentForm:focus-within footer{
  visibility: visible;
  max-width: none;
}
~~~~
* Criando um componente avatar que recebe a estilização de acordo com a props.
~~~~react

//Componente Avatar
export function Avatar({hasBorder = true, src}) {
  //hasBorder é definido como padrão o valor true. Conceito de desestruturação.

  //Uma outra maneira alternativa.
  // const hasBorder = props.hasBorder !== false

  return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src} alt="" />
  )
}

//Componente sendo usados em dois lugares por exemplo, com renderização de estilos diferentes
//Em Comment
<Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/79115354?v=4" alt="" />
<Avatar src="https://avatars.githubusercontent.com/u/79115354?v=4"/>

~~~~