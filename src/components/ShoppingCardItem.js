

function ShoppingCardItem({ item, onRemove, onRemoveOne }) {
    return (
        <div className="product-container">
            <h2></h2>
            <div className="product-card">
                <img src={item.image} alt={item.name} />
                <div className="product-details">
                    <h3>{item.name}</h3>
                    <p>Price: {item.price}$ x {item.quantity}</p>
                    <button onClick={()=>onRemoveOne(item)}>-</button>
                    <br />
                    <button onClick={()=>onRemove(item)}>Clear</button>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCardItem;