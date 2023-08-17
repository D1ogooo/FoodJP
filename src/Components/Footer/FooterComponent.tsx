import { PaiContainer, SectionFilho } from './FooterStyle'
import { TitleFooter, TitleCards, SectionPai } from './FooterStyle'
import { Cards } from '../../data/Cards'

function Footer() {
  return (
    <>
      <PaiContainer>
        <TitleFooter>Food<span>JP</span></TitleFooter>
        <SectionPai>
          {Cards.map((texto, index) => (
            <SectionFilho key={index}>
            <TitleCards>{texto.title}</TitleCards>
            <a>{texto.Primeirolink}</a>
            <a>{texto.Segundolink}</a>
            <a>{texto.Terceirolink}</a>
            </SectionFilho>
          ))}
        </SectionPai>
      </PaiContainer>
    </>
  )
}

export default Footer