import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import ProductsCard from '../../../components/productCard';
import {useSelector} from 'react-redux';

const image =
  'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg';
const title = 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops';
const description =
  'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday';
const price = '109.95';
const CartScreen = () => {
  const products = useSelector(state => state.cart);
  return (
    <View>
      <ProductsCard
        image={image}
        title={title}
        description={description}
        price={price}
      />
      <TouchableOpacity
        onPress={() => console.log(products)}></TouchableOpacity>
    </View>
  );
};

export default CartScreen;
