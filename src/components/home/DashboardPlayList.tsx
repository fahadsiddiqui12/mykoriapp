import { Pressable, StyleSheet, Text, View } from 'react-native';

import PlayIcon from '@/assets/images/play_btn_icon.svg';
import TodayOpIconOne from '@/assets/images/today_icon1.svg';
import TodayOpIconTwo from '@/assets/images/today_icon2.svg';

export default function DashboardPlayList(){
    return(
    <>
    
      <View>

          {/* Play Option 1 */}
          <View style={[styles.todayOpBox,styles.todayMainBox]}>

                <View style={styles.todayOpImgBox}>
                  <TodayOpIconOne width={40} height={40} style={styles.moodIconImage} color="#2C2107"/>
                </View>

                <View style={styles.todayOpDetails}>
                    <Text style={styles.todayOpBoxLgTitle}>Celestial Harmony</Text>
                    <Text style={styles.todayOpBoxSmTitle}>12 min • Guided Meditation</Text>
                </View>

                <View style={styles.todayOpTickBox}>
                  <Pressable style={styles.fullClickBtn} onPress={()=>{console.log('op 1')}}>
                    <PlayIcon width={20} height={20} style={styles.moodIconImage} color="#0C0B12"/>
                  </Pressable>
                </View>

          </View>

          {/* Play Option 2 */}
          <View style={[styles.todayOpBox,styles.todayMainBox]}>

                <View style={styles.todayOpImgBox}>
                  <TodayOpIconTwo width={40} height={40} style={styles.moodIconImage} color="#2C2107"/>
                </View>

                <View style={styles.todayOpDetails}>
                    <Text style={styles.todayOpBoxLgTitle}>Tarot Reflection</Text>
                    <Text style={styles.todayOpBoxSmTitle}>Pull today’s card</Text>
                </View>

                <View style={styles.todayOpTickBox}>
                  <Pressable style={styles.fullClickBtn} onPress={()=>{console.log('op 2')}}>
                    <PlayIcon width={20} height={20} style={styles.moodIconImage} color="#0C0B12"/>
                  </Pressable>
                </View>

          </View>
          
      </View>
    </>
);}

const styles = StyleSheet.create({
    fullClickBtn:{
        backgroundColor:'#D4AF7A',
        width:50,
        height: 50,
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%'
    },
    todayOpImgBox:{
        height:75,
        backgroundColor:'#D4AF7A',
        borderRadius: 7,
        alignItems:'center',
        justifyContent:'center',
        width: '20%',
    },
    todayOpDetails:
    {
        width: '60%',
        // backgroundColor:'#f00',
        justifyContent:'center',
    },
    todayOpTickBox:{
        width: '15%',
        // backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'flex-end'
    },
    todayOpBox:{
        flexDirection: 'row',
        gap:7,
        marginBottom:10,
        position:'relative',
        // justifyContent:'space-between',
    },
    todaysTitleBox:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:7,
    },
    todayOpBoxLgTitle:{
        color:'#F1CA93',
        fontSize:15,
        fontWeight:500,
    },
    todayOpBoxSmTitle:{
        color:'#E9E1DB',
        fontSize:13,
        fontWeight:300
    },
    mainFeelingDiv:{
        marginBottom:15,
    },
    moodIconImage:{
        marginBottom:3,
        borderRadius: 50,
    },
    addImageShadow:{
        boxShadow: '0px 0px 30px 10px rgba(212,175,122, 0.6)',
    },
    moodOpBtn:{
        alignItems:'center',
    },
    opBoxstyle:{
        backgroundColor: 'rgba(20,16,42,0.5)',
        padding: 10,
        borderStyle:'solid',
        borderWidth: 1,
        borderColor:'#D4AF7A',
        borderRadius: 7,
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:10,
    },
    todayMainBox:{
        backgroundColor: 'rgba(20,16,42,0.5)',
        // backgroundColor:'#999',
        padding: 15,
        borderStyle:'solid',
        borderWidth: 1,
        borderColor:'#D4AF7A',
        borderRadius: 7,
        overflow:'hidden',
        marginBottom: 10
    },
    moodTitle:{
        color: '#9CA3AF',
        fontSize: 12,
        fontWeight: 400
    },
    boxTitleLarge:{
        color: '#E9E1DB',
        fontSize: 18,
        fontWeight: 400
    },
    welcomeBox:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginBottom:15,
    },
    welcomeTitle:{
        width: '85%'
    },
    notificationIconBox:{
        width: '15%'
    },
    userName:{
        color:'#E9E1DB',
        fontSize: 25,
        fontWeight: 500
    },
    greetingText:{
        color:'#E9E1DB',
        fontSize: 18,
        fontWeight: 400
    },
    greetingMessage:{
        color:'#fff',
        fontSize: 14
    },
    stepProgressTitles:{
        color:'#fff',
        fontSize: 14
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
    notiPress:{
        position:'relative',
        alignItems:'flex-end'
    },
    bgimg:{
        // flex : 1,
        position : 'absolute',
        top: 0,
        left: 0,
        resizeMode: 'stretch',
    },
    scrollContent: {
        // flexGrow: 5,
        // flex: 1,
        // justifyContent: 'space-around',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft:10,
        paddingRight:10,
    }
});