import { StyleSheet, View } from 'react-native';
import Swiper from './components/Swiper';

export default function App() {
  return (
    <View style={styles.container}>
      <Swiper />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
