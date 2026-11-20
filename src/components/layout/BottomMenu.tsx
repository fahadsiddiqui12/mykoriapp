import { usePathname, useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from "react-native";
import BottomNavIconOne from '@/assets/images/menu_icon1.svg';
import BottomNavIconTwo from '@/assets/images/menu_icon2.svg';
import BottomNavIconThree from '@/assets/images/menu_icon3.svg';
import BottomNavIconFour from '@/assets/images/menu_icon4.svg';

// Note: '/' do jagah match hota hai (src/app/index.tsx = login redirect, aur tabs ka index = dashboard).
// Is liye hamesha poora path '/(app)/(tabs)/...' do, warna inner pages se Home dabane pe login khul jata hai.
// router.navigate stack me pehle se maujood page pe wapas chala jata hai, nayi copy nahi banata.
export default function BottomMenu(){
    const router = useRouter();
    const pathname = usePathname();
    return(
        <>
            <View style={styles.mainNavBox}>

                {/* Bottom Menu Item One */}
                <Pressable style={[
                        styles.singleMenuItem,
                         pathname === '/' && styles.activeMenuItem
                    ]}
                    onPress={() => router.navigate('/(app)/(tabs)')}>
                    <BottomNavIconOne width={20} height={20} color={pathname === '/' ? '#2C2107' : '#fff'}/>
                        <Text style={[
                                styles.menuItemTxt,
                                pathname === '/' && styles.activeMenuText
                            ]}>
                                Home
                        </Text>
                </Pressable>

                {/* Bottom Menu Item Two */}
                <Pressable style={[
                        styles.singleMenuItem,
                         pathname === '/discover' && styles.activeMenuItem
                    ]} 
                    onPress={() => router.navigate('/(app)/(tabs)/discover')}>
                    <BottomNavIconTwo width={20} height={20} color={pathname === '/discover' ? '#2C2107' : '#fff'}/>
                        <Text style={[
                                styles.menuItemTxt,
                                pathname === '/discover' && styles.activeMenuText
                            ]}>
                            Discover
                        </Text>
                </Pressable>

                {/* Bottom Menu Item Three */}
                <Pressable style={[
                        styles.singleMenuItem,
                         pathname === '/journal' && styles.activeMenuItem
                    ]}
                    onPress={() => router.navigate('/(app)/(tabs)/journal')}>
                    <BottomNavIconThree width={20} height={20} color={pathname === '/journal' ? '#2C2107' : '#fff'}/>
                    <Text style={[
                                styles.menuItemTxt,
                                pathname === '/journal' && styles.activeMenuText
                            ]}>Journal</Text>
                </Pressable>

                {/* Bottom Menu Item Four */}
                <Pressable style={[
                        styles.singleMenuItem,
                         pathname === '/profile' && styles.activeMenuItem
                    ]}
                    onPress={() => router.navigate('/(app)/(tabs)/profile')}>
                    <BottomNavIconFour width={20} height={20} color={pathname === '/profile' ? '#2C2107' : '#fff'}/>
                    <Text style={[
                                styles.menuItemTxt,
                                pathname === '/profile' && styles.activeMenuText
                            ]}>Profile</Text>
                </Pressable>

            </View>
        </>
    )
};

const styles = StyleSheet.create({
    singleMenuItem:{
        // flexDirection:'row',
        alignItems:'center',
    },
    activeMenuItem: {
        backgroundColor: '#D9B36C',
        flexDirection:'row',
        gap: 5,
        borderRadius: 30,
        paddingHorizontal: 25,
        height: 40,
    },
    menuItemTxt:{
        color:'#fff',
    },
    activeMenuText:{
        color:'#2C2107',
    },
    mainNavBox:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
        // padding: 20,
        borderStyle:'solid',
        borderWidth: 1,
        borderColor:'#D4AF7A',
        borderRadius: 50,
    }
});