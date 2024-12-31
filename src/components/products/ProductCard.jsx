
//Card bileşenine her bir product'ı prop olarak gönderiyoruz.Ürün bilgileri (name, description, price, image) product prop'undan alınarak JSX içinde görüntülenir.


const Card = ({product}) => {
  return (
    <div className="card">
    
            <div className="price">
                <h3>{product.price} $</h3>
            </div>
            <img src={product.image} alt=""/>
            <div className="card_over">
                <h2>{product.title}</h2>
            </div>
      
    </div>
  );
};

export default Card;