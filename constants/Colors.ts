/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4'
const tintColorDark = '#fff'
const dangerBackgroundColorDark = '#a61d24'
export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    inputBackground: '#fff',
    cardBackground: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    dangerBackground: dangerBackgroundColorDark,
  },
  dark: {
    text: '#ECEDEE',
    // background: '#151718',
    background: '#0C0A09',
    inputBackground: '#161B22',
    cardBackground: '#0D1117',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    dangerBackground: dangerBackgroundColorDark,
  },
}
