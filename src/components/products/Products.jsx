

const Products =({img, link}) => {
    return (
        <div className="cards">
            <div className="cards-browser">
                <div className="cards-circle"></div> 
                <div className="cards-circle"></div> 
                <div className="cards-circle"></div>  
                
            </div>

            <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="card-img" />
    </a>



        </div>
    )
}

export default Products