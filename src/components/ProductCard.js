import { useState } from "react";

function ProductCard({ product, onAdd }) {
    const [quantity, setQuantity] = useState(1)

    function handleIncrement() {
        setQuantity(prev=>prev+1)
    }

    function handleDecrement() {
        setQuantity(prev=>prev-1)
    }

    function handleAdd() {
        onAdd({...product, quantity})
    }

    return (
        <div className="product-container">

            <div className="product-card">
                <img src={product.image} alt={product.name} />
                <div className="product-details">
                    <h3>{product.name}</h3>
                    <p>Price: {product.price}$</p>

                    <div className="quantity">
                        <button onClick={handleIncrement}>+</button>
                        <span>{quantity}</span>
                        <button onClick={handleDecrement}>-</button>
                    </div>
                </div>
            </div>

            <button onClick={handleAdd}>Add to card</button>
        </div>
    );
}

export default ProductCard;