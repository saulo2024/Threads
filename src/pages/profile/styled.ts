import styled, { createGlobalStyle } from "styled-components";

 export const GlobalStyles = createGlobalStyle `
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
    width: 700px;
    flex-direction: row;
    justify-content: center;
    padding-top: 30px;
`;

export const Logo = styled.img`
    width: 100%;
    max-width: 23px;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
`

export const DivNomePerfil = styled.div`
    display: flex;
    flex: 1;
`;

export const DivFoto = styled.div`
    display: flex;
    flex: 1;
`;