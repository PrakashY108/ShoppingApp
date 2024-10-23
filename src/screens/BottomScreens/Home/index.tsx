import {
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import LoaderContainer from '../../../components/LoaderContainer';
import {useNavigation} from '@react-navigation/native';
import getproductsURL from '../../../Apiservices/Endpoints';
import Errors from '../../../shared/constants/Errors';
import styles from './styles';
import Globalstyles from '../../../themes/GLobalStyles';
import FontSize from '../../../themes/fontSize';
import Carousel, {Pagination} from 'react-native-snap-carousel-v4';
import Images from '../../../assets/Index';
import CustomInput from '../../../components/CustomInput';
import Strings from '../../../shared/constants/Strings';
import Colors from '../../../themes/Colors';

export default function HomeScreen() {
  const [productData, setProductData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [ActiveCarousel, setActiveCarousel] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    fetchProductData();
  }, []);

  const carouselData = [
    {title: 'Slide 1', image: Images.banner1},
    {title: 'Slide 2', image: Images.banner1},
    {title: 'Slide 3', image: Images.banner1},
    {title: 'Slide 4', image: Images.banner1},
  ];
  const categoryData = [
    {title: 'android', image: Images.android},
    {title: 'camera', image: Images.camera},
    {title: 'laptop', image: Images.laptop},
    {title: 'airdopes', image: Images.airdopes},
    {title: 'shirt', image: Images.shirt},
  ];
  const fetchProductData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(getproductsURL);
      if (response.data.length === 0) return;
      setIsLoading(false);
      setProductData(response.data);
    } catch (error) {
      console.error(Errors.fetchError);
    }
  };

  const renderCarouselItem = ({item}) => (
    <View style={styles.carouselItem}>
      <Image source={item.image} style={styles.carouselImage} />
    </View>
  );

  const renderProductItem = ({item}) => (
    <View style={{width: '50%'}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductDetails', {item})}
        style={[
          Globalstyles.container,
          styles.container,
          Globalstyles.backgroundColor_white,
        ]}>
        <View style={[styles.image, Globalstyles.padding_10]}>
          <Image style={styles.logo} source={{uri: item.image}} />
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
    </View>
  );

  const rendercategory = ({item}) => (
    <View
      style={{
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',

        paddingBottom: 10,
      }}>
      <TouchableOpacity style={styles.categorycontainer}>
        <Image style={styles.categoryimage} source={item.image} />
      </TouchableOpacity>
      <Text style={styles.categorytext}>{item.title}</Text>
    </View>
  );

  return (
    <>
      {isLoading ? (
        <LoaderContainer />
      ) : (
        <ScrollView style={{backgroundColor: 'white'}}>
          <View style={{alignItems: 'center'}}>
            <CustomInput search={true} placeholder={Strings.search} />
          </View>
          <Carousel
            data={carouselData}
            renderItem={renderCarouselItem}
            sliderWidth={420}
            firstItem={0}
            itemWidth={405}
            vertical={false}
            layout="default"
            loop={true}
            autoplay={true}
            autoplayDelay={1000}
            autoplayInterval={3000}
            keyExtractor={item => item.id}
            onSnapToItem={index => setActiveCarousel(index)}
          />
          <Pagination
            dotsLength={carouselData.length}
            activeDotIndex={ActiveCarousel}
            dotStyle={styles.dot}
            activeDotStyle={styles.activeIndex}
            containerStyle={{
              paddingVertical: 10,
            }}
            inactiveDotStyle={{
              backgroundColor: 'lightgrey',
            }}
            inactiveDotOpacity={0.5}
            inactiveDotScale={1}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              alignItems: 'center',
             
              
            }}>
            <Text style={{color: 'black', fontSize: 33, marginBottom: 10}}>
              {Strings.categories}
            </Text>
            <Image style={{height: 20, width: 20}} source={Images.rightarrow} />
          </View>
          <FlatList
            data={categoryData}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={rendercategory}
          />

          {isLoading && <LoaderContainer />}
          {productData && productData.length > 0 ? (
            <FlatList
              data={productData}
              renderItem={renderProductItem}
              keyExtractor={item => item.id.toString()}
              numColumns={2}
              key={`flatlist-${productData.length}`}
            />
          ) : (
            <Text>{Strings.noproduct}</Text>
          )}
        </ScrollView>
      )}
    </>
  );
}
