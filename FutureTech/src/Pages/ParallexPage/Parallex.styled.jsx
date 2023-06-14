import styled from "styled-components";




const AzulPrincipal = "#3498db";
const AzulClaro = "#5eb8ff"
const AzulEscuro = "#2269a8"
const CinzaMetálico = "#999999"
const CinzaClaro = "#f2f2f2"
const Branco = "#ffffff"
const Preto = "#000000"



export const Container = styled.div`


.animation{
    position: absolute;
}


#banner{
    height: 90vh;
    width: 90vw;
    border-radius: 10px;
}
#bannerTop{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}


#bannerText{
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
#bannerText1{
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

#textologo1{
width: 40vw;
font-size: 5vh;
color: ${CinzaClaro};
margin-left: 6vw;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
#textologo{
width: 40vw;
color: ${CinzaMetálico};
font-size: 3vh;
margin-right: 6vw;
text-shadow: 2em 2em 2em white(0, 0, 0, 1);
}

#produto1{
    width: 25vw;
    border-radius: 100px;
    box-shadow: inset 0 0 1em white, 0 0 1em black;
}
#produto3{
    width: 25vw;
    border-radius: 100px;
    box-shadow: inset 0 0 1em white, 0 0 1em black;
}


#introText{ 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
}
#textoIntro{
    width: 50vw;
    font-weight: 1000;
    color: black;
    text-align: justify;
    font-size: 4vh;
    padding: 2vh;
    text-shadow: 0px 5px 10px white; 
}


#bannerMidText{
    text-align:center;
    letter-spacing: .5em;
}

#estruturaContainer{
    z-index: -1;
}
#estruturaTextContainer{
    font-weight: 1000;
    font-size: 4vh;
    text-align: start;
    padding: 50px;
    text-shadow: 2px 2px 0px white; 
}


#blackcontainer{
    width: 100vw;
    height: 20vh;
    background-color: black;
    color: white;
}

#blackContainerText{
    font-size: 2vh;
    padding: 2vh;
    letter-spacing: .7em;
}


#testcontainer{
    width: 100vw;
    height: 100vh;
    background-color: ${Branco};
}

#textfooter1{
    display: flex;
    justify-content: end;
    font-weight: 1000;
    text-shadow: 2px 2px 0px white;
    padding: 1vh;
    font-size: 2.5vh;
}

#textfooter2{
    font-weight: 1000;
    text-shadow: 2px 2px 0px white;
    padding: 1vh; 
    font-size: 3vh;
}

#footer{
    width: 100vw;
    height: 100vh;
}

#imgFoooter1{
    width: 100vw;
}








@media screen and (max-width: 600px) {


    #banner{
    height: 35vh;
    width: 130vw;
    }

    #bannerMid{
        height: 10vh;
    }

    #textologo1{
    width: 80vw;
    font-size: 2vh;
    color: ${CinzaClaro};
    margin-bottom: 150px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);

    }

    #textologo{
        display: none;
    }

    #textoIntro{
        width: 80vw;
        text-align: justify;
        font-size: 2.5vh;
        padding: 2vh;
        text-shadow: 2px 2px 0px white; 
    }

    #produto1{
        width: 60vw;
        border-radius: 2vh;
        box-shadow: inset 0 0 1em gold, 0 0 1em black;
    }
    #produto2{
        display: none;
}
    #produto3{
        width: 60vw;
        border-radius: 2vh;
        box-shadow: inset 0 0 1em gold, 0 0 1em black;
}
    #estruturaTextContainer{
        font-size: 2vh;
        padding: 10px;
        text-shadow: 2px 2px 0px white; 
}
    #blackContainerText{
        display: none;
}
    #blackcontainer{
    width: 100vw;
    height: 8vh;
    background-color: black;
    color: white;
}
    #textfooter1{
        font-size: 1vh;
}
    #textfooter2{
        font-size: 1vh;
}

    #imgFoooter1{
        width: 140vw;
    }


}


`