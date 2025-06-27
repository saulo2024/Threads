import React, { useState } from "react";

import { Biografia, 
    BotaoThreads, 
    Container, 
    ContainerSeguidoresLink,
    DivFoto,
    DivIconesInstagram,
    DivNome,
    DivNomePerfil,
    DivSeguidoresLink,
    Icone,
    FotoPerfil,
    Header,
    Logo, 
    Nome, 
    NomePerfil,
    TextoBiografia, 
    TextoCustomizavel, 
    DivThreadsouResposta,
    ContainerThreadsouResposta} from "../profile/styled";
import LogoSVG from "../../assets/images/LogoSVG.svg";
import Perfil from "../../assets/images/185657175.jpeg";
import LogoInstagramSVG from "../../assets/images/instagram.svg"
import MaisSVG from "../../assets/images/mais.svg"

const Profile = () => {
    
    const [ThreadsOuResposta, setThreadsOuResposta] = useState ("threads");

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
                    <TextoCustomizavel color="#616161" size="15">
                        300000000 seguidores . descomplicandodev.com
                    </TextoCustomizavel>
                </DivSeguidoresLink>

                <DivIconesInstagram>
                    <Icone src={LogoInstagramSVG}></Icone>
                    <Icone width="28" src={MaisSVG}></Icone>
                </DivIconesInstagram>
            </ContainerSeguidoresLink>
            <ContainerThreadsouResposta>
                <DivThreadsouResposta onClick={() => {setThreadsOuResposta ("threads")}} outlined={ThreadsOuResposta === "threads" ? "true" : "false"}>
                    <TextoCustomizavel color="white" size="15">
                        Threads
                    </TextoCustomizavel>
                </DivThreadsouResposta>
                    
                <DivThreadsouResposta onClick={() => {setThreadsOuResposta ("resposta")}} outlined={ThreadsOuResposta === "resposta" ? "true" : "false"}>
                    <TextoCustomizavel color="white" size="15">
                        Resposta
                    </TextoCustomizavel>
                </DivThreadsouResposta>
            </ContainerThreadsouResposta>
        </Container>

    );
}

export default Profile; 