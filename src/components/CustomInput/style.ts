import {StyleSheet} from 'react-native';
import Colors from '../../themes/Colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    height: 50,
    width: '85%',
  },
  input: {
    height: 50,
    width: 300,
  },
  icon: {
    height: 30,
    width: 30,
  },
});

export default styles;
