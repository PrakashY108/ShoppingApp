import {View, Image, Text, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import styles from './style';

const ProductsCard = ({image, title, description, price}) => {
const [quantity,setQuantity]= useState(19)

const increaseqty =()=>{
  {quantity>=0&& quantity<20?setQuantity(quantity+1):null}
}
const decreaseqty =()=>{
  {quantity>0?setQuantity(quantity-1):null}}

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.img} source={{uri: image}} />
      </View>
      <View style={{width: '60%'}}>
        <Text style={styles.title}>{title.substring(0, 45)}...</Text>
        <Text style={styles.description}>{description.substring(0, 60)}...</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.price}>${price}</Text>
          <View style={styles.qtycontainer}>
            <TouchableOpacity onPress={()=>decreaseqty()} style={styles.btn}>
              <Text style={{fontSize: 20, color: 'black'}}>-</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 17, color: 'black'}}>{quantity}</Text>
            <TouchableOpacity onPress={()=>increaseqty()} style={styles.btn}>
              <Text style={{fontSize: 20}}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{alignItems:"center",flexDirection:"row",margin:7}}>
        <Text style={styles.stock}>InStock</Text>
        <TouchableOpacity
          style={styles.removebtncontainer}>
          <Text style={{color:"white",fontSize:14,padding:2}}>Remove Item</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductsCard;
