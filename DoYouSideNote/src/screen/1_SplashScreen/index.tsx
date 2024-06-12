import React from 'react';
import {View, ImageBackground, StyleSheet, Image} from 'react-native';
// import AnimatedLottieView from 'lottie-react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface SplashScreenProps {
  navigation: any;
}

const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../constants/splash.png')}
      style={styles.imageBackground}>
      <SafeAreaView style={styles.container}>
        {/* <View style={styles.animationContainer}>
          <AnimatedLottieView
            autoPlay
            source={require('./splash.json')}
            loop
            speed={1}
            style={styles.animation}
          />
        </View> */}
        <View style={styles.textContainer}>
          <Image
            source={require('../../constants/images/splashBottom.png')}
            style={styles.image}
          />
          {/* <Text style={styles.text}>{'CREATED BY'}</Text>
          <Text style={styles.text}>{'MARSH TECH'}</Text> */}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Align the textContainer to the bottom
    alignItems: 'center', // Center the textContainer horizontally
  },
  animationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  animation: {
    width: 250,
    height: 250,
  },
  textContainer: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
});

export default SplashScreen;
