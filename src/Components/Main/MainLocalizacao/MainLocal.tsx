import { TitleLocal, PaiContent, ImageContent, InputField, InputSubmit } from './MainLocalStyle'
import { Input, InputIconWrapper, InputLabel } from './MainLocalStyle'
import MapaImg from '../../../assets/mapa rio.svg'
import GPSImg from '../../../assets/fi_map-pin.svg'

function MainLocalizacao() {
  return (
    <>
      <TitleLocal>Localização</TitleLocal>
      <PaiContent>
        <ImageContent>
          <img src={MapaImg} />
        </ImageContent>
        <Input>
          <InputLabel htmlFor="password">
            <InputIconWrapper>
              <img src={GPSImg} />
            </InputIconWrapper>
            <InputField type="search" placeholder='Localização para entrega' />
          </InputLabel>
          <InputSubmit href='#'>Buscar</InputSubmit>
        </Input>
      </PaiContent>
    </>
  )
}

export default MainLocalizacao