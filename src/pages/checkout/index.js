import './style.css';
import Purchase from 'assets/purchase.png';
import { Link } from 'react-router-dom';
import React from 'react';

function Checkout() {
  return (
    <section className='checkout'>
      <div className='checkout__container'>
        <p className='checkout__message'>
          <strong className='checkout__message--clientName'>{},</strong>
          sua compra no valor de <strong className='checkout__message--price'>R$ 100,00</strong> foi realizada com sucesso
        </p>
        <img className='checkout__image' src={Purchase} alt='Compra realizada com sucesso' />
        <Link className='checkout__button' to='/'>
          Iniciar nova compra
        </Link>
      </div>
    </section>
  );
};

export default Checkout;