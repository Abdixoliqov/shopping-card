import { useState } from "react";
import { data } from "./data";
import ProductCard from "./ProductCard";
import ShoppingCardItem from "./ShoppingCardItem";


function ShoppingCard() {
    const [cardItems, setCardItems] = useState([]);
    const [total, setTotal] = useState(0);

    function addToCard(product) {
        const existingItem = cardItems.find(item=>item.id===product.id) 
        if(existingItem){
            existingItem.quantity += product.quantity
            setCardItems([...cardItems])
        } else {
            setCardItems([...cardItems, product])
        }
        setTotal(total+(product.price*product.quantity))
    }

    function removeOneFormCard(itemToRemove) {
        const updatedCardItems = [...cardItems];
        const index = updatedCardItems.findIndex(item=>item.id===itemToRemove.id)
        console.log(index, 'idx');
        
        if(index !== -1 && updatedCardItems[index].quantity > 1) {
            updatedCardItems[index].quantity -= 1;
            setTotal(total - itemToRemove.price)
        }
        setCardItems(updatedCardItems)
        console.log(itemToRemove);
        
    }

    function removeFormCard(itemToRemove) {
        console.log(itemToRemove)
        const updatedCardItems = cardItems.filter(item=>item.id!==itemToRemove.id);
        setCardItems(updatedCardItems)
        setTotal(total-(itemToRemove.price * itemToRemove.quantity))
    }

    return (
        <div className="shopping-card">
            <div className="product">
                <h3>Product</h3>
                <div className="product-containr">
                    {
                        data.map(product => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onAdd={addToCard}
                            />
                        ))
                    }
                </div>
            </div>

            <div className="card">
                <h2>Card</h2>
                <div className="total">
                    <p>Total: {total}$</p>
                </div>
                <div className="card-item">
                    {
                        cardItems.map((item, index) => (
                            <ShoppingCardItem onRemoveOne={removeOneFormCard} onRemove={removeFormCard} key={index} item={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default ShoppingCard;