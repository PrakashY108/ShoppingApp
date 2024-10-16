import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 20,
  },
  img: {
    height: 145,
    width: 150,
    margin: 5,
    resizeMode: 'contain',
  },
  title: {
    marginHorizontal: 10,
    color: 'black',
    fontSize: 20,
  },
  price: {
    fontSize: 30,
    marginHorizontal: 5,
    color: 'green',
  },
  details: {
    width: '60%',
    marginTop: 15,
  },
  removebtncontainer: {
   
    width:50,
   
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
    borderRadius: 10,
  },
  icon: {
    height: 30,
    width: 30,
   
  },
  stock: {
    color: 'green',
    fontSize: 17,
    marginHorizontal: 10,
  },
})
  export default styles