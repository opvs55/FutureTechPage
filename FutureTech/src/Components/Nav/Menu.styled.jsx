import styled from "styled-components";

const AzulPrincipal = "#3498db";
const AzulClaro = "#5eb8ff"
const AzulEscuro = "#2269a8"
const CinzaMetálico = "#999999"
const CinzaClaro = "#f2f2f2"
const Branco = "#ffffff"
const Preto = "#000000"


export const NavContainer = styled.nav`


position: fixed;
width: 100vw;
height: 10vh;
background-color: ${CinzaClaro};
z-index: 3;

#logoText{
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 1000;
    letter-spacing: 1vh;
    font-size: 2vh;
}
#logoImg{
    width: 6vw;
}
#textImg{
    display: flex;
    justify-content: center;
    align-items: center;
}

ul{
    display: flex;
    justify-content: space-around;
    align-items:center;
}
ul li{
    display: inline-block;
}
ul li a{
    text-decoration: none;
    display: inline-block;
    font-size: 2vh;
    color: ${Preto};
    font-weight: 700;
    text-transform: uppercase;
    border-bottom: 2vh solid transparent;
    transition: all .25s ease-in-out;
}
ul li a:hover{
border-bottom: 3px solid black;
}





@media screen and (max-width: 600px) {
    height: 4vh;
    .menu{
        display: none;
    }
}
`