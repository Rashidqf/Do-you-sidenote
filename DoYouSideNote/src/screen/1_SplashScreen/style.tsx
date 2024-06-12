import {StyleSheet} from 'react-native';
import {FONTS} from '../../theme';
import {Responsive} from '../../helper';
// import {COMMON_STYLE, FONTS} from '../../theme';

// Define a type for the theme
interface Theme {
  colors: {
    GRAY_100: string;
  };
}

export const style = (theme: Theme) =>
  StyleSheet.create({
    // ...COMMON_STYLE,
    logoImageStyle: {
      width: Responsive.getWidth(50),
      height: Responsive.getWidth(50),
      alignSelf: 'center',
    },
    titleStyle: {
      fontSize: 12,
      fontFamily: FONTS['BASE'],
      color: theme?.colors?.GRAY_100,
      textAlign: 'center',
    },
    splashbackgroundImage: {
      flex: 1,
    },
    subtitleStyle: {
      fontSize: 14,
      fontFamily: FONTS['BOLD'],
      color: theme?.colors?.GRAY_100,
      textAlign: 'center',
      marginBottom: 20,
      marginTop: 8,
    },
  });
