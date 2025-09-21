const ProductCard = (props) => { 
  return ( 
    <div className="productcard"> 
      {props.name.map((product, index) => ( 
      <div className="product-card" key={index}> 
        <h1>{product.name}</h1> 
        <p>{product.price}</p> 
         {product.instock ? <p>In Stock</p> : <p>Out of Stock</p>} 
      </div> 
       ))}  
    </div> 
  ); 
}; 
export default ProductCard;