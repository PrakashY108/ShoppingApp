import {StyleSheet} from 'react-native';
import FontSize from '../../../themes/fontSize';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    borderBottomColor:"black",
    borderBottomWidth:0.3,
    justifyContent:"center",
    margin:5
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
  image: {
  
  },
  details: {
    // height: 200,
    width: '55%',
    padding: '2%',
    gap: 3,
  },
  title: {
    fontWeight: 'bold',
    alignItems: 'center',
    color:"black",
  },
  description: {
    alignItems: 'flex-start',
    fontSize:20
  },
  price: {
    alignItems: 'flex-start',
  },
  carouselItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    height: 200,
    padding: 10,
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
  categorylogo:{
    height: 120,
     width: 120
  },
  categorycontainer:{
    borderColor: 'black',
    borderWidth: 2,
    width:150,
    alignItems: 'center',
    height:150,
    borderRadius:75,
    justifyContent:"center"
  }
});
export default styles;
