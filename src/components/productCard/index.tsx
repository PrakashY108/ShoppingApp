import {View, Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';

const ProductsCard = ({image, title, description, price}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.img} source={{uri: image}} />
      </View>
      <View style={{width: '60%'}}>
        <Text style={styles.title}>{title.substring(0, 60)}</Text>
        <Text style={styles.description}>{description.substring(0, 60)}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.price}>${price}</Text>
          <View style={styles.qtycontainer}>
            <TouchableOpacity style={styles.btn}>
              <Text style={{fontSize: 25, color: 'black'}}>+</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 20, color: 'black'}}>1</Text>
            <TouchableOpacity style={styles.btn}>
              <Text style={{fontSize: 30}}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{alignItems:"center",flexDirection:"row",margin:7}}>
        <Text style={styles.stock}>InStock</Text>
        <TouchableOpacity
          style={styles.removebtncontainer}>
          <Text style={{color:"white",fontSize:19,padding:2}}>Remove Item</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductsCard;
