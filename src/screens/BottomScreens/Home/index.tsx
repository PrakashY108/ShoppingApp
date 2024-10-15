import {
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoaderContainer from '../../../components/LoaderContainer';
import { useNavigation } from '@react-navigation/native';
import getproductsURL from '../../../Apiservices/Endpoints';
import Errors from '../../../shared/constants/Errors';
import styles from './styles';
import Globalstyles from '../../../themes/GLobalStyles';
import FontSize from '../../../themes/fontSize';
import Carousel from 'react-native-snap-carousel-v4';
import Images from '../../../assets/Index';

export default function HomeScreen() {
  const [productData, setProductData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(getproductsURL);
      if (response.data.length === 0) return;
      setProductData(response.data);
    } catch (error) {
      console.error(Errors.fetchError);
    } finally {
      setIsLoading(false);
    }
  };

  const renderCarouselItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image source={item.image} style={styles.carouselImage} />
      <Text style={styles.carouselTitle}>{item.title}</Text>
    </View>
  );

  const renderProductItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetails', { item })}
      style={[
        Globalstyles.container,
        styles.container,
        Globalstyles.backgroundColor_white,
      ]}>
      <View style={[styles.image, Globalstyles.padding_10]}>
        <Image style={styles.logo} source={{ uri: item.image }} />
      </View>
      <View style={styles.details}>
        <Text style={[styles.title, FontSize.fontsize_18]}>
          {item.title.substring(0, 60)}...
        </Text>
        <Text
          style={[
            styles.price,
            Globalstyles.fontColor_green,
            FontSize.fontsize_24,
          ]}>
          ${item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const carouselData = [
    { title: 'Slide 1', image: Images.banner1 },
    { title: 'Slide 2', image: Images.banner1 },
    { title: 'Slide 3', image: Images.banner1 },
    { title: 'Slide 4', image: Images.banner1 },
  ];

  return (
    <ScrollView>
      <View style={{ backgroundColor: 'grey' }}>
        <Carousel
          data={carouselData}
          renderItem={renderCarouselItem}
          sliderWidth={400}
          itemWidth={360}
          vertical={false}
          layout="default"
        />
      </View>
    
      <View
        style={{ flexDirection: 'row', gap: 10, justifyContent: 'space-evenly' }}>
        <View
          style={styles.categorycontainer}>
          <Image style={styles.categorylogo} source={Images.heart} />
        </View>
        <View
          style={styles.categorycontainer}>
          <Image style={styles.categorylogo} source={Images.heart} />
        </View>
      </View>
      {isLoading && <LoaderContainer />}
      <FlatList
        data={productData}
        renderItem={renderProductItem}
        keyExtractor={item => item.id.toString()}
      />
    </ScrollView>
  );
}
