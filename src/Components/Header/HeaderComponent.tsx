import { HeaderNav, SpanLogo, Logo, BotaoEntrar } from "./HeaderStyle";

function Header() {
  return (
    <>
      <HeaderNav>
        <Logo>
          <p>Food<SpanLogo>JP</SpanLogo></p>
        </Logo>
         <li><a href="#">Inicio</a></li>
         <li><a href="#">Cardápio</a></li>
         <li><a href="#">Sobre</a></li>
        <BotaoEntrar href='#'>Entrar</BotaoEntrar>
      </HeaderNav>
    </>
  )
}

export default Header