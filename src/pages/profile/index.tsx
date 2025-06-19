import React from "react";
import { Container, Logo } from "../profile/styled";
import LogoSVG from "../../assets/images/LogoSVG.svg"

const Profile = () => {
    return (
   
        <Container>
             <Logo src={LogoSVG} alt="teste"/>
        </Container>
    
    )
}

export default Profile; 