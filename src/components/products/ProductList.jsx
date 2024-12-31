import Card from "./ProductCard";
import "./Products.scss";

//React'te, veriler çoğunlukla üst bileşenden alt bileşene props olarak aktarılır. Bu akış tek yönlüdür, yani üst bileşen bir props verisini alt bileşene gönderir, ancak alt bileşen bu veriyi değiştiremez.

//ProductList bileşenine ise products props olarak iletiliyor.süslü kullanılıyor.
const ProductList = ({proList}) => {
//  console.log(products)
  return (
    <div className="product-list">
      {/* Js kodu yazdığımız için Jsx e süslü aç. */}
      {
        proList.map((product)=>
        (<Card key={product.id} product={product}/>
      ))}
    </div>
  );
};

export default ProductList;

//Açıklama: products.map fonksiyonu ile her bir product'ı alıyoruz.Her product için, Card bileşenini render ediyoruz.key prop'u, React'in her bir bileşeni tanıyıp, performans için en verimli şekilde render etmesine yardımcı olur.Card bileşenine her bir product'ı prop olarak gönderiyoruz.