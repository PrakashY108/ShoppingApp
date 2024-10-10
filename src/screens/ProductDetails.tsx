import {TouchableOpacity, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

export default function ProductDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const items = route.params.item;
  

  return (
    <View style={styles.imgbox}>
      <Image style={styles.img} source={{uri: items.image}} />
    <Image style={styles.wishlisticon} source={require("../assets/icons/wishlist.png")}/>
      <View style={styles.details}>
        <Text style={styles.title}>{items.title.substring(0, 120)}</Text>
        <Text style={styles.description}>{items.description}</Text>
        <View style={styles.pricecontainer}>
          <Text style={styles.price}> $ {items.price}</Text>
          <Text style={styles.rating}>
            Rating :{items.rating.rate}({items.rating.count})
          </Text>
        </View>
        <View style={styles.btncontainer}>
            <View style={styles.btn}>
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
              <Text style={styles.btnText}>Add To Cart</Text>
          </TouchableOpacity>
            </View>
            <View style={styles.btn}>
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
              <Text style={styles.btnText}>Buy Now</Text>
          </TouchableOpacity>
            </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imgbox: {
    height: 400,
    width: '100%',
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  img: {
    height: 400,
    width: '100%',
    resizeMode: 'contain',
  },
  wishlisticon:{
    height:40,
    width:40,
    position:"absolute",
    right:10,
    top:"50%",

  },
  details: {
    height: 400,
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    paddingTop: 10,
  },
  pricecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 25,
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  description: {
    fontSize: 15,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  price: {
    color: 'green',
    fontSize: 35,
    alignItems: 'flex-start',
    padding: 20,
  },
  rating: {
    alignItems: 'flex-start',
    fontSize: 20,
  },
  btncontainer: {
    height: 50,
    width:400,
    flexDirection:"row",
    bottom:0
  
  },
  btn: {
    width:200,
    backgroundColor:"green",
    borderRadius:20,
    height:50,
    alignItems:"center",
    justifyContent:"center",

},
  btnText: {
    color: 'white',
    fontSize: 25,
  },
});
