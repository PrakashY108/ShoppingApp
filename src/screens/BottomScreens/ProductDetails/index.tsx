import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Images from '../../../assets/Index';
import NavigationRoutes from '../../../shared/constants/NavigationRoutes';
import {addToCart} from '../../../store/actions/CartActions';
import {useDispatch} from 'react-redux';
import styles from './style';
import Strings from '../../../shared/constants/Strings';
import Globalstyles from '../../../themes/GLobalStyles';
import CustomButtton from '../../../components/CustomButton';
export default function ProductDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const itemData = route?.params?.item;
  const dispatch = useDispatch();

  return (
    <ScrollView
      style={[Globalstyles.container, Globalstyles.backgroundColor_white]}>
      <Image
        style={[styles.img, Globalstyles.marginTop_10]}
        source={{uri: itemData.image}}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <Text
          style={[
            styles.title,
            Globalstyles.fontColor_black,
            Globalstyles.margin_20,
          ]}>
          {itemData.title.substring(0, 30)}
        </Text>
        <View style={{flexDirection: 'row', gap: 20}}>
          <Image style={styles.icon} source={Images.heart} />
          <Image style={styles.icon} source={Images.share} />
        </View>
      </View>
      <Text
        style={[
          styles.description,
          Globalstyles.fontColor_black,
          Globalstyles.marginHorizontal_20,
          Globalstyles.margin_10,
        ]}>
        {itemData.description.substring(0, 100)}...
      </Text>
      <View
        style={[
          Globalstyles.marginHorizontal_20,
          {flexDirection: 'row', alignItems: 'center', gap: 5,justifyContent:"flex-start"},
        ]}>
        <Text style={styles.discount}>-30%</Text>
        <Text style={styles.price}> $ {itemData.price}</Text>
      <Text style={{fontSize: 20, color: 'green', marginHorizontal: 22,marginVertical:10}}>Instock</Text>
      </View>

      <TouchableOpacity style={styles.box}>
        <Text style={{fontSize: 20, color: 'black'}}>
          {Strings.offers}
        </Text>
        <Image style={{height:15,
          width:15
        }} source={Images.rightarrow}/>
      </TouchableOpacity>
      <View style={{gap: 10}}>
        <CustomButtton
          title={Strings.addtocart}
          screen={NavigationRoutes.cart}
        />
        <CustomButtton title={Strings.buynow} screen={NavigationRoutes.cart} />
      </View>
    </ScrollView>
  );
}

{
  /* <View style={styles.imgbox}>
<Image style={styles.img} source={{uri: itemData.image}} />
<Image style={styles.wishlisticon} source={Images.wishlist} />
<View style={styles.details}>
  <Text style={styles.title}>{itemData.title.substring(0, 120)}</Text>
  <Text style={styles.description}>{itemData.description}</Text>
  <View style={styles.pricecontainer}>
    
    <Text style={styles.rating}>
      Rating :{itemData.rating.rate}({itemData.rating.count})
    </Text>
  </View>
  <View style={styles.btncontainer}>
    <View style={styles.btn}>
      <TouchableOpacity onPress={() => dispatch(addToCart(itemData))}>
        <Text style={styles.btnText}>{Strings.addtocart}</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.btn}>
      <TouchableOpacity
        onPress={() => navigation.navigate(NavigationRoutes.cart)}>
        <Text style={styles.btnText}>{Strings.buynow}</Text>
      </TouchableOpacity>
    </View>
  </View>
</View>
</View> */
}
