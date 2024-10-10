import {
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoaderContainer from '../components/LoaderContainer';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const [productData, setProductData] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  const navigation = useNavigation();
  useEffect(() => {
    productdata();
  }, []);

  const productdata = async () => {
    setisLoading(true);
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      if (response.length == 0) {
        return;
      }
      const product = response.data;
      setProductData(product);
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
      console.log('error while fetching');
    }
  };
  const renderItem = item => {
    const items = item.item;

    return (
      <ScrollView>
        <TouchableOpacity onPress={()=>navigation.navigate('ProductDetails',{item:items})} style={styles.container}>
          <View
            style={styles.imgcontainer}>
            <View style={styles.image}>
              <Image style={styles.logo} source={{ uri: items.image }} />
            </View>
          </View>
          <View style={styles.details}>
            <Text style={styles.title}>{items.title.substring(0, 80)}...</Text>
            <Text style={styles.description}>
              {items.description.substring(0, 60)}...
            </Text>
            <Text style={styles.price}> $ {items.price}</Text>
            <Text style={{ alignItems: 'flex-start' }}>
              {items.rating.rate}({items.rating.count})
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  };
  return (
    <View>
      {isLoading ? <LoaderContainer /> : null}
      <FlatList
        data={productData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 200,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 0.3,
    borderColor: 'black',
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
  },
  imgcontainer: {
    width: '45%',
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 10,
  },
  image: {
    height: 50,
    width: 50,
    padding: 10,
  },
  details: {
    height: 200,
    width: '55%',
    padding: '2%',
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 17,
    alignItems: 'center',
  },
  description: {
    fontSize: 13,
    alignItems: 'flex-start',
    paddingTop: 7,
  },
  price: {
    color: 'green',
    fontSize: 25,
    alignItems: 'flex-start',
  },
});
