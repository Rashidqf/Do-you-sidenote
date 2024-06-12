import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import DetailsScreen from '../screen/DetailsScreen';
import SplashScreen from '../screen/1_SplashScreen';
import {OnboardingScreens} from '../screen/1_OnboardingScreens';

const Stack = createStackNavigator();

function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnboardingScreens" // Place initialRouteName here
        screenOptions={{
          headerTitleAlign: 'center',
          // headerTransparent: true,
          // headerShown: true,
          headerMode: 'float',
        }}>
        <Stack.Screen
          name="SplashScreens"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OnboardingScreens"
          component={OnboardingScreens}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer;

const styles = StyleSheet.create({
  headerStyle: {
    shadowOpacity: 0,
    elevation: 0,
    height: 100,
    backgroundColor: 'transparent',
  },

  headerTitleStyle: {
    fontSize: 14,
    color: '#666', // GRAY_100 equivalent
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listIcon: {
    width: 6, // size equivalent
    height: 6,
    tintColor: '#666', // GRAY_100 equivalent
  },
});
