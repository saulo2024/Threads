import React from "react";
import { BotaoThreads, Container,DivFoto,DivNome,DivNomePerfil,Header, Logo, Nome, NomePerfil } from "../profile/styled";
import LogoSVG from "../../assets/images/LogoSVG.svg"

const Profile = () => {
    return (
   
        <Container>
             <Logo src={LogoSVG} alt="teste"/>
             <Header>
                <DivNome>
                    <Nome>Saulo Esteves</Nome> <br/>
                    <DivNomePerfil>
                        <NomePerfil>sauloesteves</NomePerfil> 
                        <BotaoThreads>threads.net</BotaoThreads>
                    </DivNomePerfil>
                </DivNome>

                <DivFoto>
                    saulo
                </DivFoto>
             </Header>
        </Container>
    
    )
}

export default Profile; 