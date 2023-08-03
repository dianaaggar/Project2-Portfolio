import Products from "../products/Products";
import {product} from "../../data"


const ProductList =() => {
    return (
        <div className="prod-list">
            <div className="prod-list-text">
                <h1 className="prod-list-title"> creation and inspiration</h1>
                <p className="prod-list-desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, eius dignissimos aspernatur sed dolore error, eligendi vero laudantium ducimus quis voluptatum, nihil excepturi adipisci vitae ab ullam ea architecto voluptatibus.</p>
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

