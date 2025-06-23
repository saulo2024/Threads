import React from "react";
import { Biografia, 
    BotaoThreads, 
    Container, 
    ContainerSeguidoresLink,
    DivFoto,
    DivIconesInstagram,
    DivNome,
    DivNomePerfil,
    DivSeguidoresLink,
    LogoInstagram,
    FotoPerfil,
    Header,
    Logo, 
    Nome, 
    
    NomePerfil, TextoBiografia, TypeTextCustomizavel } from "../profile/styled";
import LogoSVG from "../../assets/images/LogoSVG.svg";
import Perfil from "../../assets/images/185657175.jpeg";
import LogoInstagramSVG from "../../assets/images/instagram.svg"

const Profile = () => {
    return (

        <Container>
            <Logo src={LogoSVG} alt="teste" />
            <Header>
                <DivNome>
                    <Nome>Saulo Esteves</Nome> <br />
                    <DivNomePerfil>
                        <NomePerfil>sauloesteves</NomePerfil>
                        <BotaoThreads>threads.net</BotaoThreads>
                    </DivNomePerfil>
                </DivNome>

                <DivFoto>
                    <FotoPerfil src={Perfil}></FotoPerfil>
                </DivFoto>
            </Header>

            <Biografia>
                    <TextoBiografia>⏲️ Programador sênior há 10 anos</TextoBiografia>
                    <TextoBiografia>🚋 Anda de trem</TextoBiografia>
                    <TextoBiografia>😂 Aproveite a vida</TextoBiografia>               
            </Biografia>
            <ContainerSeguidoresLink>
                <DivSeguidoresLink>
                <TypeTextCustomizavel color="#616161" size="15">
                        300000000 seguidores . descomplicandodev.com
                    </TypeTextCustomizavel>
                </DivSeguidoresLink>

                <DivIconesInstagram>
                    <LogoInstagram src={LogoInstagramSVG}></LogoInstagram>
                </DivIconesInstagram>
            </ContainerSeguidoresLink>
        </Container>

    );
}

export default Profile; 