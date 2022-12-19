import React from 'react';
import './style.css';
import Product from 'components/product';
import Form from 'components/form';
import Title from 'components/title';
import { useSelector } from 'react-redux';

export default function Home() {
  const productList = useSelector(state => state.products);
  
  return (
    <>
      <header className='header__container'>
        <Title Name='Produtos' />
      </header>
      <section className='products__container'>
        
        {productList.map((product) => 
          <Product key={product.id} {...product}/>
        )}
      </section>
      <section className='form__container'>
          <Form />
      </section>
    </>
  )

};