import React, {useContext} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Text,
  StatusBar,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {AppContext} from '../../theme/AppContextProvider';

interface Props {
  navigation: any;
  userData: any;
  isOnboardingFinished: boolean;
}

export const OnboardingScreens = (props: Props) => {
  const {theme} = useContext(AppContext);

  const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      justifyContent: 'center',
    },
    mainView: {
      flex: 1,
      marginTop: 50,
    },
    welcome: {
      fontSize: 24,
      color: '#FFF',
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 55,
    },
    imageView: {
      marginTop: 90,
      alignItems: 'center',
    },
    sliderImage: {
      width: 319.27,
      height: 231,
      resizeMode: 'contain',
    },
    listTitleTextBlue: {
      fontSize: 15,
      color: '#FFFFFF',
      textAlign: 'center',
    },
    detailsText: {
      fontSize: 14,
      color: '#FFFFFF',
      textAlign: 'center',
      marginTop: 3,
      marginHorizontal: 30,
    },
    buttonView: {
      flex: 1,
      alignItems: 'center',
    },
    buttonContinue: {
      height: 50,
      width: '90%',
      backgroundColor: '#FF4403',
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 46,
      marginLeft: 20,
      marginRight: 20,
    },
    textView: {
      color: '#FFF',
      fontSize: 14,
      fontWeight: 'bold',
    },
  });

  const textData = [
    {
      id: 0,
      title: 'A GROUP CHAT ECOSYSTEM',
      text: 'Bringing friends and family together in one convenient place.',
    },
    {
      id: 1,
      title: 'ORGANIZE',
      text: 'Stay organized, and productive with Sidenote that empowers you to effortlessly create and manage tasks on the go!',
    },
    {
      id: 2,
      title: 'CREATE EVENTS',
      text: 'Unlock the power of seamless collaboration and connection, where you can effortlessly create events and bring your group together!',
    },
  ];

  const moveToRegisterScreen = () => {
    // Implement your navigation logic here
  };

  return (
    <ImageBackground
      source={require('../../constants/images/splash.png')}
      style={styles.backgroundImage}>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView style={styles.mainView}>
        <Text style={styles.welcome}>Welcome to Sidenote</Text>
        <View style={styles.imageView}>
          <Image
            source={require('../../constants/images/temicon.png')}
            style={styles.sliderImage}
          />
        </View>
        <View style={{marginTop: 90}}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={styles.listTitleTextBlue}>{textData[0].title}</Text>
          </View>
          <View style={{marginTop: 3, marginHorizontal: 30}}>
            <Text style={styles.detailsText}>{textData[0].text}</Text>
          </View>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.buttonContinue}
            onPress={moveToRegisterScreen}>
            <Text style={styles.textView}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
