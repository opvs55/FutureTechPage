import styled from "styled-components";





export const ListContainer = styled.div`

    width: 100vw;
    height: 50vh;
    color: black;
    background-color: white;


    #mainContainer{
        display: flex;
    }

    #list{
        height: 50vh;
        width: 30vw;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-size: 4vh;
        text-align: center;
        padding: 1vh;
        font-weight: 1000;
    }


    .product{   
        list-style-type: none;
        padding: 1vh;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: .5s;
    }

    .product:hover{
        background-color: black;
        color: white;
    }


    @media screen and (max-width: 600px) {
        #list{
        font-size: 2vh;
        width: 20vw;
        }
        .product:hover{
        color: red;
        background-color: white;
    }


}
`