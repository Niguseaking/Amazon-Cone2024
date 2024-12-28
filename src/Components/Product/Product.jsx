// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import ProductCard from './ProductCard';
// import classes from './Product.module.css';

// function Product() {
//     const [products, setProducts] = useState(); // Initialized to an empty array
// const [isLoading, setIsLoading]=useState(false)
//     useEffect(() => {
//         axios
//             .get('https://fakestoreapi.com/products')
//             .then((res) => {
//                 setProducts(res.data);
//                 setIsLoading(false)
//             })
//             .catch((err) => {
//                 console.log(err);
//                 isLoading(false)
//             });
//     }, []);

//     return (
//        <>
//        {isLoading?(<Loder/>):(
//          <section className={classes.products_container}>
//          {
//          products?.map((singleProduct) => {
//             return <ProductCard product={singleProduct} key={singleProduct.id} />
//          }
             
//          )}
//      </section>)
//        }
//        </>
//     );
// }

// export default Product;

// src/Components/Product/Product.jsx

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import ProductCard from './ProductCard';
// import classes from './Product.module.css';
// import Loder from '../Loder/Loder';

// function Product() {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     axios.get('https://fakestoreapi.com/products')
//       .then((res) => {
//         setProducts(res.data);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setIsLoading(false);
//       });
//   }, []);

//   return (
//     <>
//       {
//       isLoading? ( <Loder/>) : (<section className={classes.products_container}>
//           {
//           products?.map((singleproduct) =>{ 
//             return <productCard renderAdd ={true} product={singleproduct} key={singleproduct.id} />
//         } )}
//         </section>)
//         }
//     </>
//   );
// }

// export default Product;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard'; // Ensure this is the correct import
import classes from './Product.module.css';
import Loder from '../Loder/Loder';

function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true); // Set loading true while fetching data
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loder />
      ) : (
        <section className={classes.products_container}>
          {products?.map((singleProduct) => (
            <ProductCard
              renderAdd={true}
              product={singleProduct}
              key={singleProduct.id}
            />
          ))}
        </section>
      )}
    </>
  );
}

export default Product;
