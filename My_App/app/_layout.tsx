// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
// import 'react-native-reanimated';
import { Appearance } from 'react-native';

// import { useColorScheme } from '@/hooks/useColorScheme';
import {Colors} from '@/constants/Colors';

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
 
  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
      <Stack screenOptions={{ headerStyle: { backgroundColor: theme.background }, headerTintColor: theme.text, headerShadowVisible: false }}>
        <Stack.Screen name="index" options={{ headerShown: false,  title: "Home" }} />
        <Stack.Screen name="menu" options={{ headerShown: true,  title: "Menu", headerTitle: 'Coffee Shop Menu'  }} />
        <Stack.Screen name="contact" options={{ headerShown: true,  title: "Contact", headerTitle: 'Contact Us' }} />
        <Stack.Screen name="+not-found" options={{ headerShown: false, title: "Not Found", headerTitle: 'Page Not Found' }} />
      </Stack>
  );
}
