import {StyleSheet} from 'react-native';
import FontSize from '../../../themes/fontSize';
import Colors from '../../../themes/Colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '90%',
    justifyContent: 'center',
    margin: 5,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
  },
  imgcontainer: {
    width: '45%',

    borderRadius: 10,
  },
  image: {},
  details: {
    // height: 200,
    width: '100%',
    padding: 10,
    gap: 3,
  },
  title: {
    fontWeight: 'bold',
    alignItems: 'center',
    color: 'black',
    textAlign: 'left',
  },
  description: {
    alignItems: 'flex-start',
    fontSize: 20,
  },
  price: {
    alignItems: 'flex-start',
  },
  carouselItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    height: 170,

    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  carouselImage: {
    width: '100%',
    height: '80%',
    borderRadius: 8,
    resizeMode: 'cover',
  },
  carouselTitle: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryimage: {
    height: 50,
    width: 50,
  },
  categorycontainer: {
    // borderColor: 'black',
    // borderWidth: 1,
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: 'white',
  },
  categorytext: {
    fontSize: 12,
    color: 'black',
  },
  activeIndex: {
    height: 15,
    width: 15,
    borderRadius: 7,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
});
export default styles;
