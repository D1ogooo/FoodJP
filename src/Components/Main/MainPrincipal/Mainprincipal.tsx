import { PaiContent, PrincipalText, ParagraphText, SubPaiContent, CardapioLink, ImageContent } from './Mainprincipalstyle'
import PrincipalIMG from '../../../assets/kisspng-sushi-japanese-cuisine-buffet-restaurant-food-office-catering-corporate-catering-san-francis-5bab5b3f1579d9 1.svg'

function PrincipalMain() {
  return (
    <>
      <PaiContent>
        <SubPaiContent>
          <PrincipalText>
           Comida Oriental
          </PrincipalText>
          <ParagraphText>
          A culinária Japonesa é bastante equilibrada,
           sendo muito rica em peixes (ômega 3),
            vegetais, massas e ingredientes frescos.
          </ParagraphText>
          <CardapioLink href='#'>Cardápio</CardapioLink>
        </SubPaiContent>

        <ImageContent>
          <img src={PrincipalIMG} alt="imagem de um sushi" />
        </ImageContent>
      </PaiContent>
    </>
  )
}

export default PrincipalMain