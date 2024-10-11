import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 165,
    width: '95%',
    margin: '2%',
    padding: 5,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'row',
  },
  img: {
    height: 145,
    width: 150,
    margin: 5,
    resizeMode: 'contain',
    borderColor: 'black',
    borderWidth: 0.3,
  },
  title: {
    marginHorizontal: 10,
    color: 'black',
    fontSize: 17,
  },
  description: {
    fontSize: 15,
    marginHorizontal: 10,
    marginVertical: 3,
  },
  price: {
    fontSize: 20,
    marginHorizontal: 5,
    color: 'green',
  },
  stock: {
    color: 'green',
    fontSize: 17,
    marginHorizontal: 10,
  },
  btn: {
    height: 30,
    width: 30,
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  qtycontainer: {
    height:30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 20,
  },
  removebtncontainer: {
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: 'red',
    width: 120,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
