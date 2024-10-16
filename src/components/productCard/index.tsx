import {View, Image, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import Images from '../../assets/Index';
import Strings from '../../shared/constants/Strings';

const ProductsCard = ({image, title, description, price}) => {
  const [quantity, setQuantity] = useState(1);

  const increaseqty = () => {
    {
      quantity >= 0 && quantity < 20 ? setQuantity(quantity + 1) : null;
    }
  };
  const decreaseqty = () => {
    {
      quantity > 0 ? setQuantity(quantity - 1) : null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Image style={styles.img} source={{uri: image}} />
        <View style={styles.details}>
          <Text style={styles.title}>{title.substring(0, 45)}...</Text>
          <Text style={styles.price}>
            {Strings.currency}
            {price}
          </Text>
          <Text style={styles.stock}>{Strings.stock}</Text>
        </View>
      </View>
      <View style={styles.otherdetail}>
        <View style={styles.qtycontainer}>
          <TouchableOpacity
            onPress={() => decreaseqty()}
            style={[styles.btn, {borderRightWidth: 2, borderColor: 'black'}]}>
            <Text style={styles.qtytext}>{Strings.minusSign}</Text>
          </TouchableOpacity>
          <Text style={styles.qtytext}>{quantity}</Text>
          <TouchableOpacity
            onPress={() => increaseqty()}
            style={[styles.btn, {borderLeftWidth: 2, borderColor: 'black'}]}>
            <Text style={styles.qtytext}>{Strings.plusSign}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.removebtncontainer}>
          <Image style={styles.icon} source={Images.trash} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductsCard;
