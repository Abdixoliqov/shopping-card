
function ProductCard({ product }) {
    return (
        <div className="product-container">

            <div className="product-card">
                <img src={product.image} alt={product.name} />
                <div className="product-details">
                    <h3>{product.name}</h3>
                    <p>Price: {product.price}$</p>

                    <div className="quantity">
                        <button>+</button>
                        <span>Quantity</span>
                        <button>-</button>
                    </div>
                </div>
            </div>

            <button>Add to card</button>
        </div>
    );
}

export default ProductCard;