import styled from "styled-components";

const AzulPrincipal = "#3498db";
const AzulClaro = "#5eb8ff"
const AzulEscuro = "#2269a8"
const CinzaMetálico = "#999999"
const CinzaClaro = "#f2f2f2"
const Branco = "#ffffff"
const Preto = "#000000"



export const SubContainer = styled.div`

width: 70vw;
height: 50vh;
padding: 1vh;
background-color: white;


#productDiv{
    display: flex;
}

#imgDiv{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    width:  50vw;
    overflow: hidden;
}

#productImage{
    width: 20vw;
    border: 2px solid black;
    border-radius: 2vh;
}

#textDiv{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 3vh;
}

#productDescription{
    width: 30vw;
    color: black;
    text-align: start;
    font-size: 3vh;
    letter-spacing: 1vh;
}

#buttonProduct{
    width: 30vw;
    height: 4vh;
    font-size: 2vh;
    font-weight: 1000;
    border-radius: 2vh;
    background-color: ${CinzaClaro};

    transition: .5s;
}

#buttonProduct:hover{
    background-color: ${CinzaMetálico};
}


@media screen and (max-width: 600px) {

#productDescription{
    width: 50vw;
    font-size: 1.5vh;
    z-index: 1;
    color: #ffffff;
    font-weight: 1000;
    letter-spacing: .8vh;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
}
#imgDiv{
    width: 60vw;
    position: absolute;
    opacity: .8;
}
#productImage{
    width: 100vw;
    border: 2px solid black;
    border-radius: 2vh;
}
#buttonProduct{
    width: 50vw;
    height: 4vh;
    font-size: 2vh;
    font-weight: 1000;
    border-radius: 2vh;
    background-color: ${CinzaClaro};
    margin-top: 10vh;
    z-index: 1;
    transition: .5s;
}

}
`