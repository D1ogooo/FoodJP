import { TitleComentarios, Cards, CardsInternal } from './MainComentariosStyle'
import { PaiContent, TitleCard, ImageCard, ParagraphCard, StarsComponent } from './MainComentariosStyle'
import PrimeiraPessoa from '../../../assets/imagem_primeira_pessoa.svg'
import SegundaPessoa from '../../../assets/imagem_segunda_pessoa.svg'

interface CardsType {
  img: string,
  title: string,
  paragraph: string,
}

const CardsImport: CardsType[] = [
  {
    img: `${PrimeiraPessoa}`,
    title: 'Daniele Almeida',
    paragraph: 'Ótimo serviço! Encantada com a qualidade dos pratos.'
  },
  {
    img: `${SegundaPessoa}`,
    title: 'Ricardo França',
    paragraph: 'Não é apenas a comida excelente, o serviço torna a experiência especial.'
  }
]

function MainComentarios() {
  return (
    <>
      <PaiContent>
        <TitleComentarios>Comentários</TitleComentarios>
        <Cards>
          <Cards>
            {CardsImport.map((coment, index) => (
              <CardsInternal key={index}>
                <ImageCard><img src={coment.img} /></ImageCard>
                <TitleCard>{coment.title}</TitleCard>
                <ParagraphCard>{coment.paragraph}</ParagraphCard>
                <StarsComponent>
                  <svg xmlns="http://www.w3.org/2000/svg" width="122" height="19" viewBox="0 0 122 19" fill="none">
                    <path d="M9.24021 6.92745L10.5173 3.4421L11.7943 6.92745C12.1096 7.78802 12.9287 8.36021 13.8452 8.36021H17.5076L14.7417 10.4536C14.011 11.0065 13.7032 11.9567 13.9708 12.8331L15.0158 16.2556L11.6975 14.1247C10.9784 13.6629 10.0561 13.6629 9.33702 14.1247L6.01868 16.2556L7.06371 12.8331C7.33129 11.9567 7.02347 11.0065 6.29286 10.4536L3.52695 8.36021H7.18933C8.10585 8.36021 8.9249 7.78802 9.24021 6.92745ZM15.4381 16.5268L15.4379 16.5266L15.4381 16.5268Z" fill="#DA2535" stroke="#DA2535" stroke-width="2.36842" />
                    <path d="M34.4817 6.92745L35.7587 3.4421L37.0358 6.92745C37.3511 7.78802 38.1701 8.36021 39.0866 8.36021H42.749L39.9831 10.4536C39.2525 11.0065 38.9447 11.9567 39.2123 12.8331L40.2573 16.2556L36.9389 14.1247C36.2199 13.6629 35.2976 13.6629 34.5785 14.1247L31.2601 16.2556L32.3052 12.8331C32.5727 11.9567 32.2649 11.0065 31.5343 10.4536L28.7684 8.36021H32.4308C33.3473 8.36021 34.1664 7.78802 34.4817 6.92745ZM40.6796 16.5268L40.6793 16.5266L40.6796 16.5268Z" fill="#DA2535" stroke="#DA2535" stroke-width="2.36842" />
                    <path d="M59.7229 6.92745L60.9999 3.4421L62.277 6.92745C62.5923 7.78802 63.4113 8.36021 64.3278 8.36021H67.9902L65.2243 10.4536C64.4937 11.0065 64.1859 11.9567 64.4535 12.8331L65.4985 16.2556L62.1802 14.1247C61.4611 13.6629 60.5388 13.6629 59.8197 14.1247L56.5013 16.2556L57.5464 12.8331C57.814 11.9567 57.5061 11.0065 56.7755 10.4536L54.0096 8.36021H57.672C58.5885 8.36021 59.4076 7.78802 59.7229 6.92745ZM65.9208 16.5268L65.9205 16.5266L65.9208 16.5268Z" fill="#DA2535" stroke="#DA2535" stroke-width="2.36842" />
                    <path d="M84.9643 6.92745L86.2413 3.4421L87.5184 6.92745C87.8337 7.78802 88.6528 8.36021 89.5693 8.36021H93.2317L90.4658 10.4536C89.7351 11.0065 89.4273 11.9567 89.6949 12.8331L90.7399 16.2556L87.4216 14.1247C86.7025 13.6629 85.7802 13.6629 85.0611 14.1247L81.7428 16.2556L82.7878 12.8331C83.0554 11.9567 82.7476 11.0065 82.0169 10.4536L79.251 8.36021H82.9134C83.8299 8.36021 84.649 7.78802 84.9643 6.92745ZM91.1622 16.5268L91.162 16.5266L91.1622 16.5268Z" fill="#DA2535" stroke="#DA2535" stroke-width="2.36842" />
                    <path d="M110.206 6.92745L111.483 3.4421L112.76 6.92745C113.075 7.78802 113.894 8.36021 114.811 8.36021H118.473L115.707 10.4536C114.977 11.0065 114.669 11.9567 114.936 12.8331L115.981 16.2556L112.663 14.1247C111.944 13.6629 111.022 13.6629 110.303 14.1247L106.984 16.2556L108.029 12.8331C108.297 11.9567 107.989 11.0065 107.258 10.4536L104.492 8.36021H108.155C109.071 8.36021 109.89 7.78802 110.206 6.92745ZM116.404 16.5268L116.403 16.5266L116.404 16.5268Z" fill="#DA2535" stroke="#DA2535" stroke-width="2.36842" />
                  </svg>
                </StarsComponent>
              </CardsInternal>
            ))}
          </Cards>
        </Cards>
      </PaiContent>
    </>
  )
}

export default MainComentarios