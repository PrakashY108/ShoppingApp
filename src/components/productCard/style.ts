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
  description: {
    fontSize: 15,
    marginHorizontal: 10,
    marginVertical: 3,
  },
  price: {
    fontSize: 30,
    marginHorizontal: 5,
    color: 'green',
  },
  stock: {
    color: 'green',
    fontSize: 17,
    marginHorizontal: 10,
  },
  btn: {
    height: 40,
    width: 40,
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  qtycontainer: {
    height: 40,
    width: 150,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 10,
    borderWidth: 2,
    borderColor: 'black',
    marginVertical: 10,
  },
  details: {
    width: '60%',
    marginTop: 15,
  },
  otherdetail: {
    flexDirection: 'row',
    gap: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  qtytext: {
    fontSize: 25,
    color: 'black',
  },
  icon: {
    height: 35,
    width: 35,
  },
  removebtncontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
    borderRadius: 10,
  },
});

export default styles;
