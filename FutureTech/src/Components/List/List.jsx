import { useState } from "react";
import { ListContainer } from "./List.styled";
import { Sub } from "./subContainer/subContainer";




export function List() {

    const [product, setProduct] = useState("industrial")



    console.log(product)

    return (

        <ListContainer>
            <div className="productContainer" id="mainContainer">
                <div className="productContainer" id="subContainer">
                    <Sub product={product} />
                </div>
                <div className="productContainer" id="listContainer">
                    <ul className="productList" id="list">
                        <li className="product" id="product1">
                            <a onClick={() => setProduct("industrial")}>Robôs industriais</a>
                        </li >
                        <li className="product" id="product2">
                            <a onClick={() => setProduct("vision")}>Sistemas de visão e percepção</a>
                        </li>
                        <li className="product" id="product3">
                            <a onClick={() => setProduct("logistic")}>Automação logística</a>
                        </li>
                        <li className="product" id="product4">
                            <a onClick={() => setProduct("colaborative")}>Robôs colaborativos (cobots)</a>
                        </li>
                    </ul>
                </div>
            </div>
        </ListContainer>
    )
}