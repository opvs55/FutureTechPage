import { FooterContainer } from "./Footer.styled";
import logo from "./../../assets/logo2.png"





export function Footer() {

    return (

        <FooterContainer>

            <div
                className="menu"
                id="1">

                <ul className="nav1">

                    <li>
                        <a href="#">Rua endereço X da empresa</a>
                    </li>

                    <li>
                        <a href="#">(xx) xxxxx-xxxx</a>
                    </li>

                    <li>
                        <a href="#">EmailEmpresa@empresa.com</a>
                    </li>

                </ul>

            </div>

            <div
                className="menu"
                id="2">

                <ul className="nav2">

                    <li>
                        <a>sobre nós</a>
                    </li>

                    <li>
                        <a>Serviços</a>
                    </li>

                    <li>
                        <a>Produtos</a>
                    </li>

                    <li>
                        <a>Portfólio</a>
                    </li>

                    <li>
                        <a>Contato</a>
                    </li>

                </ul>

            </div>

            <div
                className="menu"
                id="3">

                <ul className="nav3">
                    <li>
                        <a>Política de Privacidade</a>
                    </li>

                    <li>
                        <a>Termos de Uso</a>
                    </li>

                </ul>

                <div
                    className="menu"
                    id="redes">
                </div>
            </div>

            <div
                className="menu"
                id="4">

                <ul className="nav4">

                    <li>
                        <a>Perguntas Frequentes</a>
                    </li>

                    <li>
                        <a>Central de Ajuda</a>
                    </li>

                    <li>
                        <a>Suporte ao Cliente</a>
                    </li>

                </ul>
        
            </div>

            <img src={logo} />


        </FooterContainer>
    )
} 