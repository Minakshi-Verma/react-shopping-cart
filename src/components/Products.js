import React, {useContext} from 'react'; //imprt useContext
import {ProductContext} from '../contexts/ProductContext'; //import ProductContext
// Components
import Product from './Product';

const Products = () => {
	// call the useContext and pass in the context object  which is ProductContext
	// (const value =useContext(),for value part: useContext is going to return value passed by our ProductContext Provider value prop. In our case we're getting back an object with two properties. A products property and a addItem property. We can go ahead and destructure those. and we donot need to write props anywhere)
	// const value = useContext(ProductContext)
	const {products, addItem} = useContext(ProductContext)
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
