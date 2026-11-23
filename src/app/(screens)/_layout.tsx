import { Stack } from 'expo-router';
import { ImageBackground, StyleSheet } from 'react-native';

import CustomPageHeader from '@/components/layout/CustomPageHeader';

// Saare inner/sub pages yahan aate hain. Har page ko custom header milta hai.
// Background image header aur page dono ke peeche lagti hai.
// Naya page add karna ho: file banao aur neeche ek Stack.Screen me uska title do.
export default function ScreensLayout() {
  return (
    <ImageBackground
      source={require('@/assets/images/main_bg_img.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <Stack
        screenOptions={{
          header: ({ options, route }) => (
            <CustomPageHeader title={options.title ?? route.name} />
          ),
          // Transparent taake background image nazar aaye
          contentStyle: { backgroundColor: 'transparent' },
        }}
      >
        <Stack.Screen name="meditation/index" options={{ title: 'Meditations' }} />
        <Stack.Screen name="meditation/meditation-single" options={{ title: 'Meditation' }} />
        <Stack.Screen name="meditation/search" options={{ title: 'Meditation Search' }} />
      </Stack>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#0C0B12',
  },
});
