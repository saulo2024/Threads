import React, { useState } from "react";

import { Biografia,
    Container, 
    BotaoThreads,
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
    ContainerThreadsouResposta,
    ContainerThreads,
    DivFotoThreadsContainer,
    DivPostThreadsContainer,
    FotoThreadsDiv,
    PerfilThreads,
    TmepoPostThreads,
    HeaderDivPostThreadsContainer,
    DivIconesThreads,
    DivPostThreads,
    BotaoBaixarThreads,
    ContainerDownload,} from "../profile/styled";
import LogoSVG from "../../assets/images/LogoSVG.svg";
import Perfil from "../../assets/images/185657175.jpeg";
import LogoInstagramSVG from "../../assets/images/instagram.svg"
import MaisSVG from "../../assets/images/mais.svg"
import TrêsPontos from "../../assets/images/três.pontos.min.svg"
import CoraçãoCurtir from "../../assets/images/coração.min.svg"
const Profile = () => {
    
    const [ThreadsOuResposta, setThreadsOuResposta] = useState ("threads");

    return (
    
    
        <Container>
            <Logo src={LogoSVG} alt="teste" />
            <Header>
                <DivNome>
                    <Nome>Saulo Esteves</Nome> <br/>
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

            <ContainerThreads display={ThreadsOuResposta === "threads" ? "flex" : "none"}>
                <DivFotoThreadsContainer>
                    <FotoThreadsDiv src={Perfil}/>
                </DivFotoThreadsContainer>

                <DivPostThreadsContainer>
                    <HeaderDivPostThreadsContainer>
                        <PerfilThreads>
                            <TextoCustomizavel size="14 " color="white">
                                @sauloesteves
                            </TextoCustomizavel>
                        </PerfilThreads>

                        <TextoCustomizavel size="14" color="grey">
                                3 sem <Icone left="10" src={TrêsPontos} top="-3" width="15"/>
                        </TextoCustomizavel>

                    </HeaderDivPostThreadsContainer>

                    <DivPostThreads>
                        
                        <TextoCustomizavel top="15" size="15" color="white">
                            Imagine um programador de software com idéias pré-estabelecidas...
                        </TextoCustomizavel>

                        <TextoCustomizavel top="15" size="15" color="white">
                            Ele Cria o ambiente, as personagens e a estória, já está com tudo imaginado e 
                        </TextoCustomizavel>
 
                        <TextoCustomizavel top="15" size="15" color="white">
                            pronto, e insere você nisso como um de seus personagens curiosos........
                        </TextoCustomizavel>
                    </DivPostThreads>

                    <DivIconesThreads>
                        <Icone width="20" src={CoraçãoCurtir}></Icone>
                        <Icone width="20" src={CoraçãoCurtir}></Icone>
                        <Icone width="20" src={CoraçãoCurtir}></Icone>
                        <Icone width="20" src={CoraçãoCurtir}></Icone>
                    </DivIconesThreads>

                    <TextoCustomizavel size="15" color="grey" top="5">9 curtidas</TextoCustomizavel>

                 </DivPostThreadsContainer>
            </ContainerThreads>

            <ContainerDownload>
                <Icone left="-40" width="40" src={LogoSVG}></Icone>
                <Icone left="20" border="5px solid #0a0a0a" width="55" radius="50%" src={Perfil} top="-25"></Icone>
                <TextoCustomizavel size="14" top="30" color="#5d5d5d">
                    Baixe o app Threads para ver mais de sauloesteves.
                </TextoCustomizavel>

                <BotaoBaixarThreads>
                    Baixar Threads
                </BotaoBaixarThreads>
            </ContainerDownload>
        </Container>

    );
}

export default Profile; 