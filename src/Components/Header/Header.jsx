// import React, { useContext } from "react";
// import LowerHeader from "./LowerHeader";
// import { SlLocationPin } from "react-icons/sl";
// import { BsSearch } from "react-icons/bs";
// import { BiCart } from "react-icons/bi";
// import classes from "./Header.module.css";
// import { Link } from "react-router-dom";
// import { DataContext } from "../DataProvider/DataProvider";
// import { auth } from "../../Utility/Firebase";

// function Header() {
//   const [{ user, basket }, dispatch] = useContext(DataContext);
//   const totalItem = basket?.reduce((amount, item) => {
//     return item.amount + amount;
//   }, 0);
//   // console.log(basket.length)
//   return (
//     <section className={classes.fixed}>
//       <section>
//         <div className={classes.header_container}>
//           {/* Logo */}
//           <div className={classes.logo_container}>
//             <Link to={"/"}>
//               <img
//                 src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
//                 alt="Amazon Logo"
//               />
//             </Link>
//           </div>

//           {/* Delivery */}
//           <div className={classes.delivery}>
//             <SlLocationPin />
//             <div>
//               <p>Delivery to</p>
//               <span>Ethiopia</span>
//             </div>
//           </div>

//           {/* Search */}
//           <div className={classes.Search}>
//             <select>
//               <option value="all">All</option>
//             </select>
//             <input type="text" placeholder="Search Amazon" />
//             <BsSearch size={38} />
//           </div>

//           {/* Other Sections */}
//           <div className={classes.order_container}>
//             {/* Language Selector */}
//             <div className={classes.language}>
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
//                 alt="Language Selector"
//               />
//               <select name="" id="">
//                 <option value="">EN</option>
//               </select>
//             </div>

//             {/* Account Links */}

// <Link to={!user && "/auth"}>
//   <div>
//     {user? (
//       <>
//         <p>Hello {user?.email?.split("@")[0]}</p>
//          <span onClick={() => auth.signOut()}>Sign Out</span>
//       </>
//     ) : (
//       <>
//         <p>Hello, Sign In</p>
//         <span>Account & Lists</span>
//       </>
//     )}
//   </div>
// </Link>

//             <Link to="/Orders" className={classes.returns}>
//               <p>Returns</p>
//               <span>& Orders</span>
//             </Link>

//             {/* Cart */}
//             <Link to="/cart" className={classes.cart}>
//               <BiCart size={35} />
//               <span>{totalItem}</span>
//             </Link>
//           </div>
//         </div>
//       </section>

//       <LowerHeader />
//     </section>
//   );
// }

// export default Header;

import React, { useContext } from "react";
import LowerHeader from "./LowerHeader";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/Firebase";

function Header() {
  const [{ user, basket }, dispatch] = useContext(DataContext);

  const handleSignOut = () => {
    auth.signOut().then(() => {
      dispatch({
        type: Type.SET_USER,
        user: null,  // Clear the user state after sign-out
      });
    });
  };

  // const totalItem = basket?.reduce((amount, item) => item.amount + amount, 0);
   const totalItem = basket?.reduce((amount, item) => {
   return item.amount + amount;

  }, 0);
    


  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header_container}>
          {/* Logo */}
          <div className={classes.logo_container}>
            <Link to={"/"}>
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon Logo"
              />
            </Link>
          </div>

          {/* Delivery */}
          <div className={classes.delivery}>
            <SlLocationPin />
            <div>
              <p>Delivery to</p>
              <span>Ethiopia</span>
            </div>
          </div>

          {/* Search */}
          <div className={classes.Search}>
            <select>
              <option value="all">All</option>
            </select>
            <input type="text" placeholder="Search Amazon" />
            <BsSearch size={38} />
          </div>

          {/* Other Sections */}
          <div className={classes.order_container}>
            {/* Language Selector */}
            <div className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
                alt="Language Selector"
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </div>

            {/* Account Links */}
            <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello {user?.email?.split("@")[0]}</p>
                    <span onClick={handleSignOut}>Sign Out</span>
                  </>
                ) : (
                  <>
                    <p>Hello, Sign In</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link>

            <Link to="/Orders" className={classes.returns}>
              <p>Returns</p>
              <span>& Orders</span>
            </Link>

            {/* Cart */}
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>

      <LowerHeader />
    </section>
  );
}

export default Header;
