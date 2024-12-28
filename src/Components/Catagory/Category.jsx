

import React from 'react';
import { categoryInfos } from './CategoryFullinfos'; 
import CategoryCard from './CategoryCard'; 
import classes from './Catagory.module.css'; 

function Category() {
  return (
    <section className={classes.category__container}>
    {categoryInfos.map((info) => (
  <CategoryCard key={info.id} data={info} />
))}

    </section>
  );
}

export default Category;

