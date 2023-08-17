import { TitlePopulares, CardPratos, CardPratosInternal, ContentImage } from './MainPopularesStyle'
import { TitleCard, ParaGraph, Preco } from './MainPopularesStyle'
import PrimeiroPrato from '../../../assets/primeiro prato.svg'
import SegundoPrato from '../../../assets/segundo prato.svg'
import TerceiroPrato from '../../../assets/terceiro prato.svg'

interface PratosPopularesType {
  img: string,
  title: string,
  paragraph: string,
  preco: string,
}

const PratosPopulres: PratosPopularesType[] = [
  {
    img: `${PrimeiroPrato}`,
    title: 'Ramen de Frango',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    preco: 'R$ 30'
  },
  {
    img: `${SegundoPrato}`,
    title: 'Ramen Apimentado',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    preco: 'R$ 30'
  },
  {
    img: `${TerceiroPrato}`,
    title: 'Ramen Tradicional',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    preco: 'R$ 30'
  },
]

function MainPratosPopulares() {
  return (
    <>
      <TitlePopulares>
        Mais populares
      </TitlePopulares>
      <CardPratos>
        {PratosPopulres.map((prato, index) => (
          <CardPratosInternal key={index}>
            <ContentImage>
              <img src={prato.img} />
            </ContentImage>
            <TitleCard>{prato.title}</TitleCard>
            <ParaGraph>{prato.paragraph}</ParaGraph>
            <Preco>{prato.preco}</Preco>
          </CardPratosInternal>
        ))}
      </CardPratos>
    </>
  )
}

export default MainPratosPopulares