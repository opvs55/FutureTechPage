import { useState } from "react";
import { Nav } from "../../Components/Nav/Menu";
import { ParallaxComponent } from "../ParallexPage/Parallex";
import { ContainerPage } from "./ContainerPage.styled";
import { useEffect } from "react";
import { Parallax700 } from "../ParallexPage/Parallex700";




export function Page() {
    const [pages, setPages] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setPages(true);
            } else {
                setPages(false);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [window.innerWidth]);






    return (
        <ContainerPage>
            <Nav />
            {pages? 
            (<Parallax700 />) : 
            (<ParallaxComponent />)}
        </ContainerPage>
    )
}