import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import BackIcon from '@/assets/images/header_back_icon.svg';
import NotificationsList from '@/components/layout/NotificationsList';

type CustomPageHeaderProps = {
  title: string;
};

// Inner pages ka header: left = back, center = title, right = notification
export default function CustomPageHeader({ title }: CustomPageHeaderProps) {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const goBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/(app)/(tabs)');
    }
  };

  return (
    // Semi-transparent purple gradient, taake neeche wali background image bhi nazar aaye
    <LinearGradient
      colors={['rgba(22,12,48,0.9)', 'rgba(58,28,112,0.8)', 'rgba(22,12,48,0.9)']}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={[styles.header, { paddingTop: insets.top + 12 }]}
    >
      {/* Left: Back Button */}
      <View style={[styles.side, styles.left]}>
        <Pressable onPress={goBack} hitSlop={12} accessibilityRole="button" accessibilityLabel="Go back">
          <BackIcon width={22} height={22} />
        </Pressable>
      </View>

      {/* Center: Page Title */}
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>

      {/* Right: Notification */}
      <View style={[styles.side, styles.right]}>
        <NotificationsList />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingBottom: 16,
  },
  side: {
    width: 44,
    justifyContent: 'center',
  },
  left: {
    alignItems: 'flex-start',
  },
  right: {
    alignItems: 'flex-end',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: '#F3E6D0',
    fontSize: 18,
    fontFamily: 'Cinzel_600SemiBold',
    letterSpacing: 0.5,
  },
});
