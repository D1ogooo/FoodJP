import { PaiContent, PaiTextContent, PrincipalText, ParagraphText, ImageContent } from "./MainPratoStyle"
import { SaibaMais } from "./MainPratoStyle"
import PratoImg from '../../../assets/img segurando prato.svg'

function MainPratoTradicional() {
  return (
    <>
      <PaiContent>
        <ImageContent>
          <img src={PratoImg} alt="imagem segurando o prato tradicional" />
        </ImageContent>
        <PaiTextContent>
          <PrincipalText>
            Feito de forma Tradicional
          </PrincipalText>
          <ParagraphText>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ParagraphText>
          <SaibaMais href="#">Ler mais sobre o modo de preparo</SaibaMais>
        </PaiTextContent>
      </PaiContent>
    </>
  )
}

export default MainPratoTradicional