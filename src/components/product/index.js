import React, { useState } from 'react';
import './style.css';
import Add from 'assets/baseline-add-24px.svg';
import Remove from 'assets/baseline-remove-24px.svg';
import { useDispatch } from 'react-redux';
import { adicionarCarrinho} from 'store/reducers/carrinho';

function Product(props) {
  const { 
    	id,
      img,
      name,
      price,
      maxQuantidade,
  } = props;
  const installments = price/12;
  const discount = price-(price*0.1);

  const [quantityProduct, setQuantityProduct] = useState(0);

	
  const dispatch = useDispatch();
	
	const addToCart = (e) => {
		const quantidade = quantityProduct;
		dispatch(adicionarCarrinho(id))
  }

  return (
    <div className='product'>
			<img className='product__image' src={img} alt={name} />
			<div className='product__info'>
				<h3 className='product__name'>{name}</h3>
				<p className='product__priceFull'>R$ {price.toFixed(2)}</p>
				<p className='product__price--installments'>
					Em até 12x de R$ {installments.toFixed(2)}
					<span  className='product__price--payOnce'> R$ {discount.toFixed(2)} à vista (10% de desconto)</span>
				</p>
				<div className='product__quantity'>
					<button className='product__quantity__button' onClick={() => setQuantityProduct(quantityProduct - 1)}  disabled={quantityProduct === 0}>
						<img src={Remove} alt='Remover' />
					</button>
					<input className='product__quantity--input' id='qty-input' type='text' value={quantityProduct} readOnly/>
					<button className='product__quantity__button' onClick={() => setQuantityProduct(quantityProduct + 1)}  disabled={quantityProduct === maxQuantidade}>
						<img src={Add} alt='Adicionar' />
					</button>
				</div>
				<button className='product__quantity__button--addCart' type='submit' onClick={addToCart}>Adicionar ao carrinho</button>
			</div>
    </div>
);
}

export default Product;