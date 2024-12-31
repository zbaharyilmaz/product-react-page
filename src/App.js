import './App.scss';
import Header from './components/header/Header';
import ProductList from './components/products/ProductList';
import {products, categories} from "./helper/data"


function App() {
  return (
    // console.log(products, categories)
    <div className="App">
    <Header categoryList={categories} title="Product List"/>
     {/* Header'a categories ve title prop'larını gönderiyoruz */}
     {/* categoryList={categories}: categories bir değişken (muhtemelen bir array veya object), ve süslü parantez ile JSX içinde JavaScript kodu yazıyoruz. Bu, categories değişkeninin içeriğini categoryList adında bir prop olarak Header bileşenine gönderiyor. */}
     {/* title="Product List": Buradaki title bir string literalidir. "Product List" sabit bir değer olduğu için burada süslü parantez kullanmanıza gerek yoktur. Bu, statik bir veri olduğu için doğrudan JSX içinde yazılabilir. Ama yine de title burada bir prop olarak Header bileşenine gönderilmektedir. */}
    <ProductList proList={products}/>
      {/* Header'a produsts prop'unu gönderiyoruz */}
    </div>
  );
}

export default App;
