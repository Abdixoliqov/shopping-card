

function ShoppingCardItem({ item }) {
    return (
        <div className="product-container">

            <div className="product-card">
                <img src={item.image} alt={item.name} />
                <div className="product-details">
                    <h3>{item.name}</h3>
                    <p>Price: {item.price}$</p>
                   
                </div>
            </div>
        </div>
    );
}

export default ShoppingCardItem;