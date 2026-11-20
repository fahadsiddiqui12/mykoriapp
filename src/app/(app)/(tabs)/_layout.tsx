import NotificationsList from '@/components/layout/NotificationsList';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { DrawerActions } from 'expo-router/react-navigation';
import { Image, Pressable, View } from 'react-native';
import HomeMenuIcon from '@/assets/images/menu_icon1.svg';
import MenuIconOne from '@/assets/images/menu_icon2.svg';
import MenuIconTwo from '@/assets/images/menu_icon3.svg';
import MenuIconThree from '@/assets/images/menu_icon4.svg';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ navigation }) => ({
        headerShown: true,
        headerTitleAlign: 'center',
        // Hides the bottom navigation bar completely
        tabBarStyle: {
          display: 'none', 
        },
        headerLeft: () => (
          <Pressable
            onPress={() => {
              navigation.dispatch(
                DrawerActions.openDrawer()
              );
            }}
            // style={{
            //   marginLeft: 15,
            // }}
          >
            <Ionicons
              name="menu"
              size={28}
              color="#000"
            />
          </Pressable>
        ),
        headerTitle: () => (
          <View style={{
          }}>
            <Image
              source={require('@/assets/images/favicon.png')}
              resizeMode='contain'
              style={{
                width: 45,
                height: 45,
              }}
            />
          </View>
        ),
        headerRight: () => (
          <NotificationsList/>
        ),
      })}
    >

      {/* HOME TAB */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({color}) => (
            <HomeMenuIcon width={25} height={25} color={color}/>
          ),
        }}
      />

      {/* Discover TAB */}
      <Tabs.Screen
        name="discover"
        options={{
          title: 'Discover',
          tabBarIcon: ({color}) => (
            <MenuIconOne width={25} height={25} color={color}/>
          ),
        }}
      />

      {/* Journal TAB */}
      <Tabs.Screen
        name="journal"
        options={{
          title: 'Journal',

          tabBarIcon: ({color}) => (
            <MenuIconTwo width={25} height={25} color={color}/>
          ),
        }}
      />

      {/* PROFILE TAB */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',

          tabBarIcon: ({color}) => (
            <MenuIconThree width={25} height={25} color={color}/>
          ),
        }}
      />

    </Tabs>
  );
}