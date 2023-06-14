import styled from "styled-components";




export const FooterContainer = styled.footer`

width: 100vw;
height: 25vh;
background-color: black;
color: white;

display: flex;

ul{
    list-style: none;
    padding: 0px 60px;
}

.nav1 > li {
    padding: 5px;
}

.nav1 > li > a {
    text-decoration: none;
    color: white;
    cursor: pointer;
    font-size: 2.5vh;
}

.nav1 > li > a:hover {
    color: yellow;
}

.nav2 > li{
    padding: 2px;
}

.nav2 > li > a {
    text-decoration: none;
    color: white;
    cursor: pointer;
    font-size: 2.5vh;
}

.nav2 > li > a:hover {
    color: yellow;
}

.nav3 > li{
    padding: 5px;
}

.nav3 > li > a {
    text-decoration: none;
    color: white;
    cursor: pointer;
    font-size: 2.5vh;
}

.nav3 > li > a:hover {
    color: yellow;
}


.nav4 > li{
    padding: 2px;
}

.nav4 > li > a {
    text-decoration: none;
    color: white;
    cursor: pointer;
    font-size: 2.5vh;
}

.nav4 > li > a:hover {
    color: yellow;
}

@media screen and (max-width: 600px) {


height: 20vh;

ul{
    list-style: none;
    padding: 0px 10px;
}


.nav1 > li > a {
    text-decoration: none;
    color: white;
    cursor: pointer;
    font-size: 1vh;
    font-weight: 1000;
}
.nav2 > li > a {
    font-size: 1vh;
    font-weight: 1000;
}
.nav3 > li > a {
    font-size: 1vh;
    font-weight: 1000;
}
.nav4 > li > a {
    font-size: 1vh;
    font-weight: 1000;
}
}

`