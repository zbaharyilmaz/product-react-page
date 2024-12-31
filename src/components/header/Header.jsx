import HeaderStyle from "./Header.module.scss";

//App.js den Header bileşenine categories ve title props olarak geçiyor. süslü kullanılıyor.


const Header = ({categoryList,title}) => {


  return (

    <div className={HeaderStyle.header}>
      {/* Süslü açmaya gerek yok. HTML yazacagız Jsx e. */}
      <h1>{title}</h1>
      <div className={HeaderStyle.btn}>  
      {
categoryList.map((item,index)=>(
    <button key={index}>{item}</button>
))
      }
      </div>
    </div>
  );
};

export default Header;