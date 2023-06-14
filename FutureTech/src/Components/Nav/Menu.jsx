import { NavContainer } from "./Menu.styled";
import logo from "./../../assets/logo.png"


export function Nav() {






    return (
        <NavContainer>
            <ul>
                <li>
                    <a href='#' className="menu"> Quem somos nós </a>
                </li>
                <li>
                    <a href='#' className="menu"> Produtos</a>
                </li>

                <li className="lista" id="textImg">
                    <p className="text" id="logoText">FutureTech</p>
                    <img src={logo}
                        className="image"
                        id="logoImg" />
                    <p className="text" id="logoText">Robotics</p>
                </li>

                <li>
                    <a href='#' className="menu"> Nossa política</a>
                </li>
                <li>
                    <a href='#' className="menu" > Contato</a>
                </li>
            </ul>
        </NavContainer>
    )
}