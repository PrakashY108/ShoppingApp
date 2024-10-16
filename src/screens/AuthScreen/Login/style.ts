import {StyleSheet} from 'react-native';
import Colors from '../../../themes/Colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'red',
  },
  logo: {
    height: 150,
    width: 150,
  },

  forgot: {
   marginRight:80,
    width:"100%",
    justifyContent:"flex-end"
  },
  link: {
    color: 'blue',
  },
  header: {
    backgroundColor: Colors.green,
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  headertitle: {
    fontSize: 35,
  },
});

export default styles;
