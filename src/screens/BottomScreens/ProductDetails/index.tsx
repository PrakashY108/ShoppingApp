import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Images from '../../../assets/Index';
import NavigationRoutes from '../../../shared/constants/NavigationRoutes';
import {useDispatch} from 'react-redux';
import styles from './style';
import Strings from '../../../shared/constants/Strings';
import Globalstyles from '../../../themes/GLobalStyles';
import CustomButtton from '../../../components/CustomButton';
import Colors from '../../../themes/Colors';
export default function ProductDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const itemData = route?.params?.item;
  const dispatch = useDispatch();

  return (
    <View style={[Globalstyles.container, Globalstyles.backgroundColor_white]}>
      <Image
        style={[styles.img, Globalstyles.marginTop_10]}
        source={{uri: itemData.image}}
      />
      <ScrollView
        style={{
          backgroundColor: '#f5faf7',
          borderTopRightRadius: 60,
          borderTopLeftRadius: 60,
          marginTop: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 20,
            height: 50,
            marginTop: 10,
          }}>
          <Text style={styles.rating}>{itemData.rating.rate}</Text>
          <Text style={styles.ratingcount}>
            {itemData.rating.count}
            {Strings.review}
          </Text>
        </View>
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
            Globalstyles.marginHorizontal_20,
            Globalstyles.marginVertical_10,
          ]}>
          {itemData.description.substring(0, 100)}...
        </Text>
        <View
          style={[
            Globalstyles.marginHorizontal_20,
            Globalstyles.marginVertical_20,
            {
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
              justifyContent: 'flex-start',
            },
          ]}>
          <Text style={styles.discount}>-30%</Text>
          <Text style={styles.price}> $ {itemData.price}</Text>
          <Text
            style={{
              fontSize: 20,
              color: Colors.green,
              marginHorizontal: 22,
              marginVertical: 10,
            }}>
            {Strings.stock}
          </Text>
        </View>

        <TouchableOpacity style={styles.box}>
          <Text style={{fontSize: 20, color: Colors.black}}>
            {Strings.offers}
          </Text>
          <Image
            style={{
              height: 15,
              width: 15,
            }}
            source={Images.rightarrow}
          />
        </TouchableOpacity>
        <View>
          <CustomButtton
            title={Strings.addtocart}
            screen={NavigationRoutes.cart}
          />
          <CustomButtton
            title={Strings.buynow}
            screen={NavigationRoutes.cart}
          />
        </View>
      </ScrollView>
    </View>
  );
}
