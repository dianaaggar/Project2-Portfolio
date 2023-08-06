import Products from "../products/Products";
import {product} from "../../data"


const ProductList =() => {
    return (
        <div className="prod-list">
            <div className="prod-list-text">
                <h1 className="prod-list-title"> Creation and Inspiration</h1>
                <p className="prod-list-desc">Get inspired with these Web Developer Portfolios.
Making your portfolio can be tough. Should it be simple or Complex? Single page or multiple? What should you showcase first?
Stop stressing and take a look at these ten great examples of Web Developer Portfolios.
 </p>
            </div>

            <div className="prod-list-items">
                {product.map((item) =>
                (
            <Products img={item.img} link={item.link}/>
            ))}
            
        </div>


        </div>
        
    )
}

export default ProductList

