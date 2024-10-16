import {StyleSheet} from 'react-native';
import Colors from '../../../themes/Colors';

const styles = StyleSheet.create({
  imgbox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  img: {
    height: 350,
    resizeMode: 'contain',
  },
  details: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 20,
  },
  description: {
    fontSize: 16,
    color: 'grey',
    marginBottom: 10,
  },
  pricecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  price: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'green',
  },
  discount: {
    fontSize: 25,
    fontWeight: '300',
    color: 'red',
  },
  rating: {
    fontSize: 30,
    color: 'orange',
    marginLeft: 50,
  },
  ratingcount: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'grey',
    color: 'white',
    fontSize: 20,
  },
  btncontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  btn: {
    flex: 1,
    marginHorizontal: 5,
    padding: 15,
    backgroundColor: '#e91e63', // Example button color
    borderRadius: 5,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  icon: {
    height: 30,
    width: 30,
  },
  box: {
    height: 30,
    width: '90%',
    marginHorizontal: '4%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 3,
    marginBottom: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5faf7',
  },
});

export default styles;
