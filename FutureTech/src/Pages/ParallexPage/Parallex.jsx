import { Container } from "./Parallex.styled";
import { useSpring, animated, useSpringRef } from '@react-spring/web'
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import banner from "./../../assets/robot.jpg";
import produto1 from './../../assets/produto1.jpg'
import produto2 from './../../assets/produto2.jpg'
import produto3 from './../../assets/produto3.jpg'
import employer from './../../assets/employer.jpg'



import { List } from "../../Components/List/List";
import { StructureContainer } from "../../Components/Structure/structure";
import { Footer } from "../../Components/Footer/Footer";

export function ParallaxComponent() {


    const springApi = useSpringRef()

    const springs = useSpring({
        from: { x: -300 },
        to: { x: 210 },
        config: {
            duration: 11000,
        },
        loop: false,
        springApi
    })

    const springs2 = useSpring({
        from: { x: 1300 },
        to: { x: 850 },
        config: {
            duration: 12000,
        },
        loop: false,
        springApi
    })

    const springs3 = useSpring({
        from: { x: -300 },
        to: { x: 80 },
        config: {
            duration: 13000,
        },
        loop: false,
        springApi
    })

    return (
        <Container>
            <Parallax
                pages={5}
                className="animation">
                    
                <ParallaxLayer
                    className="Parallax"
                    id="bannerTop"
                    offset={0.2}
                    speed={0.2}
                    factor={1}
                >
                    <img src={banner} className="image" id="banner" />
                </ParallaxLayer>

                <ParallaxLayer
                    className="Parallax"
                    id="bannerText"
                    offset={0.6}
                    speed={0.5}
                >
                    <h2 className="texto" id="textologo">
                        Welcome to FutureTech Robotics Pioneering the Future of Robotics
                    </h2>
                </ParallaxLayer>

                <ParallaxLayer
                    className="Parallax"
                    id="bannerText1"
                    offset={0.4}
                    speed={0.3}
                >
                    <h2 className="texto" id="textologo1">
                        Explore our Cutting-Edge Robotic Solutions and Transform the Way We
                        Interact with Technology
                    </h2>
                </ParallaxLayer>

                <ParallaxLayer
                    className="Parallax"
                    id="IMG1"
                    offset={1.2}
                    speed={0.2}
                >
                    <animated.div
                        style={{
                            width: 80,
                            height: 80,
                            borderRadius: 8,
                            ...springs,
                        }}
                    >
                        <img
                            className="image"
                            id="produto1"
                            src={produto1} />

                    </animated.div>

                </ParallaxLayer>

                <ParallaxLayer
                    className="Parallax"
                    id="IMG3"
                    offset={1.9}
                    speed={0.2}
                >
                    <animated.div
                        style={{
                            ...springs3,
                        }}
                    >
                        <img
                            className="image"
                            id="produto3"
                            src={produto3} />

                    </animated.div>

                </ParallaxLayer>

                <ParallaxLayer
                    className="Parallax"
                    id="introText"
                    offset={1.3}
                    speed={0.5}
                >
                    <h2 className="texto" id="textoIntro">
                        Bem-vindo à FutureTech Robotics, líder em inovação e excelência em robótica. Desenvolvemos soluções inteligentes e avançadas para otimizar operações e impulsionar a eficiência em diversos setores. Junte-se a nós para moldar o futuro da robótica e descubra o poder da automação com a FutreTech Robotics.
                    </h2>
                    <h2 className="texto" id="textoIntro">
                        Na FutureTech Robotics, especializamo-nos no desenvolvimento de sistemas robóticos inteligentes que otimizam operações, aumentam a produtividade e impulsionam a eficiência. Nossa equipe de engenheiros altamente qualificados combina paixão pela tecnologia com profundo conhecimento do setor para fornecer soluções personalizadas para uma ampla gama de aplicações.
                    </h2>

                </ParallaxLayer>

                <ParallaxLayer
                    className="Parallax"
                    id="bannerMidText"
                    offset={2.7}
                    speed={0.5}
                    factor={1}
                >
                    <h2> NOSSOS SERVIÇOS </h2>
                </ParallaxLayer>

                <ParallaxLayer
                    className="Parallax"
                    id="bannerMid"
                    offset={2.7}
                    speed={0.2}
                    factor={1}
                >
                    <List />
                </ParallaxLayer>

                <ParallaxLayer
                    className="Parallax"
                    id="estruturaContainer"
                    offset={3.1}
                    speed={-.1}>

                    <StructureContainer />

                </ParallaxLayer>

                <ParallaxLayer
                    className="Parallax"
                    id="estruturaTextContainer"
                    offset={3.6}
                    speed={0.6}>

                    <h2>
                        Nossa estrutura é ampla e de qualidade
                    </h2>

                </ParallaxLayer>

                <ParallaxLayer
                    className="Parallax"
                    id="blackStructureContainer"
                    offset={4}
                    speed={0.1111}>

                    <div
                        className="container"
                        id="blackcontainer">

                        <h2
                            className="text"
                            id="blackContainerText">
                            Acompanhe-nos em uma jornada fascinante pela FutreTech Robotics, onde a inovação encontra uma estrutura de excelência. Convidamos você a explorar nossa moderna instalação
                        </h2>
                    </div>

                </ParallaxLayer>


                <ParallaxLayer
                    className="parallax"
                    id="imgFooter"
                    offset={4.001}
                    speed={0.33}>
                    <img
                        id="imgFoooter1"
                        src={employer} />
                </ParallaxLayer>

                <ParallaxLayer
                    className="parallax"
                    id="textfooter1"
                    offset={4.5}
                    speed={0.9}>
                    <h2>Potencializando possibilidades, revolucionando a robótica.</h2>
                </ParallaxLayer>

                <ParallaxLayer
                    className="parallax"
                    id="textfooter2"
                    offset={4.35}
                    speed={0.9}>
                    <h2>Construindo o futuro, uma inovação de cada vez.</h2>
                </ParallaxLayer>

                <ParallaxLayer
                    className="parallax"
                    id="footer"
                    offset={4.8}
                    speed={0}>

                    <Footer>

                    </Footer>

                </ParallaxLayer>



            </Parallax>
        </Container>
    );
}
