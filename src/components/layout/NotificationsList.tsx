import { Pressable, StyleSheet, Text, View } from 'react-native';
import MyNotiIcon from '@/assets/images/noti_icon.svg';

export default function NotificationsList () {
    return(
    <>
        <View>
          <Pressable style={styles.notiPress}>
              <MyNotiIcon width={25} height={25}/>
              <Text style={styles.notiNumber}></Text>
          </Pressable>
        </View>
    </>
)};

const styles = StyleSheet.create({
    notiPress:{
        position:'relative',
        alignItems:'flex-end'
    },
    notiNumber:{
        backgroundColor:'#7B5FE0',
        width: 10,
        height: 10,
        textAlign:'center',
        borderRadius: 50,
        position:'absolute',
        right:0,
    },
});
