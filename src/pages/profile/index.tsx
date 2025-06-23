import React from "react";
import { Biografia, BotaoThreads, Container,DivFoto,DivNome,DivNomePerfil,FotoPerfil,Header, Logo, Nome, NomePerfil, TextoBiografia } from "../profile/styled";
import LogoSVG from "../../assets/images/LogoSVG.svg"
import Perfil from "../../assets/images/185657175.jpeg"

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
        </Container>

    );
}

export default Profile; 