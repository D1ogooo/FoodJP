import styled from 'styled-components'

export const HeaderNav = styled.ul`
 display: flex;
 justify-content: center;
 gap: 8%;
 align-items: center;
 
 li {
 list-style: none;
 margin-top: 15px;
 }

 a {
 margin-top: 15px;
 text-decoration: none;
 color: #292929;
 font-family: Inter;
 font-size: 1.5rem;
 font-style: normal;
 font-weight: 500;
 line-height: normal;
 }
`

export const Logo = styled.div`
 color: #292929;
 font-family: Montserrat;
 font-size: 2.5rem;
 font-style: normal;
 font-weight: 700;
 line-height: normal;
`

export const SpanLogo = styled.span`
 color: #DA2535;
 font-family: Montserrat;
 font-size: 2.5rem;
 font-style: normal;
 font-weight: 700;
 line-height: normal;
`

export const BotaoEntrar = styled.a`
 color: #292929;
 font-family: Inter;
 font-size: 1.5rem;
 font-style: normal;
 font-weight: 600;
 line-height: normal;

 width: 11.75rem;
 padding: 0.625rem 3.75rem;
 border-radius: 0.625rem;
 border: 2px solid #292929;
`
