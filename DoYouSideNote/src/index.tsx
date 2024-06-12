import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import DetailsScreen from './screen/DetailsScreen';
import AppContextProvider from './theme/AppContextProvider';
import {COLORS} from './theme';
import AppContainer from './navigator/stackNavigator';

// Define the type for the stack parameters
type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

// Create the stack navigator
const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <View style={styles.container}>
        <SafeAreaProvider>
          <AppContainer />
        </SafeAreaProvider>
      </View>
      {/* <LoadingIndicator />
      <AlertModel />
      <ToastAlert /> */}
    </AppContextProvider>
    // <SafeAreaProvider>
    //   <NavigationContainer>
    //     <Stack.Navigator initialRouteName="Details">
    //       <Stack.Screen name="Details" component={DetailsScreen} />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
});

export default App;
