import ProductCard from "./ProductCard";


function ShoppingCard() {
    return ( 
        <div className="shopping-card">
            <div className="product">
                <div className="product-containr">
                    <ProductCard product={{id: 1, name:'Qazi pitsa', image: 'https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fbd276106-b16a-4c07-a963-1ccffef5e30d.jpg&w=1920&q=100', price: 3}}/>
                    <ProductCard product={{id: 2, name:'Qazi pitsa', image: 'https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fbd276106-b16a-4c07-a963-1ccffef5e30d.jpg&w=1920&q=100', price: 4.5}}/>
                    <ProductCard product={{id: 3, name:'Qazi pitsa', image: 'https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fbd276106-b16a-4c07-a963-1ccffef5e30d.jpg&w=1920&q=100', price: 5}}/>
                    <ProductCard product={{id: 4, name:'Qazi pitsa', image: 'https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fbd276106-b16a-4c07-a963-1ccffef5e30d.jpg&w=1920&q=100', price: 6}}/>
                </div>
            </div>
        </div>
     );
}

export default ShoppingCard;