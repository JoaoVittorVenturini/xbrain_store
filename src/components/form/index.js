import * as React from 'react';
import { Form } from 'react-final-form';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './style.css';
import Title from 'components/title';
import { useDispatch, useSelector } from 'react-redux';
import { hendleFormValues } from 'store/reducers/form';
import Product from 'components/product';

const Formulario = () => {

  const dispatch = useDispatch();
  const onSubmit = (event) => {
    dispatch(hendleFormValues(event));
    console.log(event);
  };

  const [gender, setGender] = React.useState('');

  const email = value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined);

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const {carrinho, total} = useSelector(state => {
    let total = 0;
    const carrinhoReduce = state.carrinho.reduce((products, itemNoCarrinho) => {
      const product = state.products.find(product => product.id === itemNoCarrinho.id);
        total += (product.price * itemNoCarrinho.quantidade);
        products.push({
          ...product,
          quantidade: product.quantidade,
        });
        console.log(product)
      return products;
    }, []);
    return {
      carrinho: carrinhoReduce,
      total,
    };
  })

return (
  <section className='formulario'>
    <Title Name='Dados do cliente' />
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className='formulario__entradas'>
            <div>
              <TextField className='formulario__input'
                required
                id='nome'
                label='Nome'
                defaultValue=''
                placeholder='Digite o nome do cliente aqui'
              />
            </div>
            <div>
              <TextField className='formulario__input'
                required
                id='nome'
                label='Email'
                validate={email}
                defaultValue=''
                placeholder='Digite o seu email aqui'
              />
            </div>
            <div>
              <FormControl className='formulario__select' required>
                <InputLabel id="gender">Sexo</InputLabel>
                <Select
                  labelId="gender"
                  id="gender__input"
                  value={gender}
                  label="gender"
                  onChange={handleChange}
                >
                  <MenuItem value={'masculino'}>Masculino</MenuItem>
                  <MenuItem value={'feminino'}>Feminino</MenuItem>
                  <MenuItem value={'outro'}>Outro</MenuItem>
                  <MenuItem value=""><em>Prefiro não dizer</em></MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className='formulario__end'>
            <h2 className='total__title'>Total: <strong className='total__price'>R$ {total.toFixed(2)}</strong></h2>
            <div>
            </div>
            <Link to='/checkout' className='button'>Finalizar Compra</Link>
          </div>
        </form>
      )}
    />
  </section>
);
};

export default Formulario;