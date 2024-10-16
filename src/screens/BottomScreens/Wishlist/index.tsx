import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import ProductsCard from '../../../components/productCard';
import Strings from '../../../shared/constants/Strings';
import styles from './style';
import Images from '../../../assets/Index';

const image =
  'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg';
const title = 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops';
const description =
  'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday';
const price = '109.95';
const WishlistScreen = () => {
  return (
    <View>
      <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Image style={styles.img} source={{uri: image}} />
        <View style={styles.details}>
          <Text style={styles.title}>{title.substring(0, 45)}...</Text>
          <Text style={styles.price}>
            {Strings.currency}
            {price}
          </Text>
          <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginRight:10}}>
          <Text style={styles.stock}>{Strings.stock}</Text>
    <TouchableOpacity style={styles.removebtncontainer}>
          <Image style={styles.icon} source={Images.trash} />
        </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    </View>)
  
};
export default WishlistScreen;
