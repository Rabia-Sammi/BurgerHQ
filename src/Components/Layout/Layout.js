import { Fragment } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import CartProvider from '../../store/CartProvider';





// type PropsType = {
//   children : React.ReactNode
// }

const Layout = (props) => {
    return (
        <Fragment>
            <Header></Header>
            <main>{props.children}</main>
            <Footer></Footer>
        </Fragment>
    );
};

export default Layout;








// const Layout = (props) => {
    
//   const [cartIsShown, setCartIsShown] = useState(false);

//   const showCartHandler = () => {
//     setCartIsShown(true);
//   };

//   const hideCartHandler = () => {
//     setCartIsShown(false);
//   };

//     return (
//         <CartProvider>
//             {cartIsShown && <Cart onClose={hideCartHandler} />}
//             <Header showCart={showCartHandler}/>
//             <main>{props.children}</main>
//             <Footer/>
//         </CartProvider>
//     );
// }

// export default Layout;