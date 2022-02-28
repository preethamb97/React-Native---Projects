import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
export default function App() {
  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={300}
        width={300}
        play={false}
        videoId={'WuGuSzt5u3c'}
      />
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
