import { products } from "../../../Constants/products";
import { SubContainer } from "./subContainer.styled";




export function Sub(props) {


    const { product } = props
    const name = product


    const filteredProducts = products.filter((product) => product.name === name);


    console.log(filteredProducts)


    return (


        <SubContainer>
            {filteredProducts.map((product) => (
                <div
                    id="productDiv"
                    key={product.name}>
                    <div id="imgDiv">
                        <img className="image"
                            id="productImage"
                            src={product.image}
                            alt={product.name} />
                    </div>
                    <div id="textDiv">
                        <h3 id="productDescription">
                            {product.description}
                        </h3>
                        <button
                            className="button"
                            id="buttonProduct">
                                Conhecer Mais
                        </button>
                    </div>
                </div>
            ))}
        </SubContainer>
    )
}