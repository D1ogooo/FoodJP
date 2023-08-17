import styled from 'styled-components'

export const TitleLocal = styled.h1`
 color: #292929;
 font-family: Montserrat;
 font-size: 3rem;
 font-style: normal;
 font-weight: 600;
 line-height: 123%;
 margin-left: 3.7rem;
 margin-bottom: 2rem;
`

export const PaiContent = styled.div`
 display: flex;
 flex-direction: column;
 gap: 1.6875rem;
 justify-content: center;

 form {
   margin: 0 auto;
   margin-bottom :200px;
 }
`

export const ImageContent = styled.div`
 margin: 0 auto;
 img {
  width: 76.75rem;
  height: 31.25rem;
  flex-shrink: 0;
  border-radius: 1rem;
 }
`

export const Input = styled.div`
 display: flex;
 width: 22.375rem;
 height: 3.0rem;
 margin: 0 auto;
 margin-top: 10px;
`

export const InputField = styled.input`
 border: none;
 border-radius: 4px;
 font: inherit;
 color: #fff;
`

export const InputLabel = styled.label`
 border-radius: 0.625rem 0rem 0rem 0.625rem;
 border: 1px solid #292929;
 background: #FBFBFB;
 padding-left: 8px;
 display: flex;
 align-items: center;

 color: #292929;
 font-family: Inter;
 font-size: 1rem;
 font-style: normal;
 font-weight: 400;
 line-height: 123%;

 ::placeholder {
  padding-left: 4px;
 }
`

export const InputIconWrapper = styled.span`
 img {
  padding-top: 3px;
  padding-left: 2px;
 }
`

export const AlinhamentoInterno = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
`

export const InputSubmit = styled.a`
 border-radius: 0rem 0.625rem 0.625rem 0rem;
 width: 18rem;
 background: #DA2535;
 color: #FBFBFB;
 font-family: Inter;
 font-size: 0.9rem;
 align-items: center;
 display: flex;
 justify-content: center;
 text-decoration: none;
 font-style: normal;
 font-weight: 500;
 line-height: 123%;
`
