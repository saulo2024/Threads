import styled, { createGlobalStyle } from "styled-components";

type TypeTextCustomizavel = {
  color: string;
  size: string;
}


export const GlobalStyle = createGlobalStyle`

  /* Regular */
  @font-face {
    font-family: 'Roboto';
    src: url('../assets/fonts/roboto/Roboto-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  /* Bold */
  @font-face {
    font-family: 'Roboto-bold';
    src: url('../assets/fonts/roboto/Roboto-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  /* Italic */
  @font-face {
    font-family: 'Roboto';
    src: url('../assets/fonts/roboto/Roboto-Italic.ttf') format('truetype');
    font-weight: 400;
    font-style: italic;
  }

  /* Light */
  @font-face {
    font-family: 'Roboto';
    src: url('../assets/fonts/roboto/Roboto-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  /* Medium */
  @font-face {
    font-family: 'Roboto';
    src: url('../assets/fonts/roboto/Roboto-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

body { 
    margin: 0;
    padding: 0;
    background-color: #101010;
    display: flex;
    justify-content: center;

}
`;

export const Container = styled.div`
    display: flex;
    width: 600px;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
`;

export const Logo = styled.img`
    width: 100%;
    max-width: 23px;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 40px;
`

export const DivNome = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    flex-direction: column;
    justify-content: center;
`;

export const DivNomePerfil = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: -10px;
`

export const DivFoto = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
`;

export const Nome = styled.h1`
    font-size: 25px;
    color: white;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.5px
    font-weight: 500;
    text-decoration: none;
    margin: 0;
    border: 0;
`
export const NomePerfil = styled.h2`
    text-decoration: none;
    font-size: 14px;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: 200;
    text-decoration: none;
    margin: 0;
    border: 0;
`

export const BotaoThreads = styled.button`
    padding: 5px 7px;
    border-radius: 15px;
    font-family: 'Roboto', sans-serif;
    background-color: #1e1e1e;
    border: 0;
    color: #616161;
    font-size: 10px;
    letter-spacing: 0.2px;
    margin-top: -3px;
    margin-left: 5px;
`

export const FotoPerfil = styled.img`
  border-radius: 50%;
  width: 100%;
  max-width: 85px;
`

export const Biografia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-top: 15px;
`

export const TextoBiografia = styled.h3`
  border: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  color: #f3f5f7;
  letter-spacing: 0.5px;
  font-weight: 300;
  margin-bottom: -3px;
`

export const ContainerSeguidoresLink = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 25px;
  `

export const DivSeguidoresLink = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 2;
`;

export const DivIconesInstagram = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

export const TypeTextCustomizavel = styled.p<TypeTextCustomizavel>`
  border: 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif ;
  letter-spacing: 0.2;
  color: ${(props) => (props.color ? props.color : "white")};
  font-size: ${(props) => (props.size ? `${props.size}px` : "15 ") };
`

export const LogoInstagram = styled.img`
  width: 100%;
  max-width: 20px;
`;