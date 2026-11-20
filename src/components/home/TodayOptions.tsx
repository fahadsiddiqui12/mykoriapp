import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useState } from 'react';
import TodayOpTickIconTwo from '@/assets/images/today_circle_icon.svg';
import TodayOpTickIconOne from '@/assets/images/today_circle_icon_tick.svg';
import TodayOpIconOne from '@/assets/images/today_icon1.svg';
import TodayOpIconTwo from '@/assets/images/today_icon2.svg';
import TodayOpIconThree from '@/assets/images/today_icon3.svg';

export default function TodayOptions() {

    const [todayJourney,setTodayJourney] = useState<string[]>([]);
    const [todaysCounter,setTodaysCounter] = useState<number>(0);

    // Today's Journey Function
    const todayJourneyFunction = (val:string) : void => {
        //setSelectedOption(val);
                //console.log(val);

            let newTodaysJourneryArr: string[];

            if(todayJourney.includes(val))
            {
                newTodaysJourneryArr = todayJourney.filter((arrval) => arrval !== val);
            }
            else
            {
                newTodaysJourneryArr = [...todayJourney,val]
            }

            setTodayJourney(newTodaysJourneryArr);

            const stepCount = newTodaysJourneryArr.length;
            setTodaysCounter(stepCount);

            //console.log(stepCount);
            //console.log(newTodaysJourneryArr);
    }

  return (
    <>
    {/* Todays's Journay box*/}

      <View style={styles.todaysTitleBox}>
          <Text style={styles.boxTitleLarge}>Today’s Journey</Text>
          <Text style={styles.stepProgressTitles}>{todaysCounter} of 3 complete</Text>
      </View>

      <View style={styles.todayMainBox}>

            <View style={styles.shadowCircleBoxBefore}>
            </View>
          {/* Todays Option 1 */}
          <View style={styles.todayOpBox}>

                <View style={styles.todayOpImgBox}>
                  <TodayOpIconOne width={40} height={40} style={styles.moodIconImage} color="#2C2107"/>
                </View>

                <View style={styles.todayOpDetails}>
                    <Text style={styles.todayOpBoxLgTitle}>Morning Meditation</Text>
                    <Text style={styles.todayOpBoxSmTitle}>10 min • Mindfulness</Text>
                </View>

                <View style={styles.todayOpTickBox}>
                  <Pressable style={styles.fullClickBtn} onPress={()=>todayJourneyFunction('morningmeditation')}>
                    {todayJourney.includes('morningmeditation') ? <TodayOpTickIconOne width={20} height={20} style={styles.moodIconImage} color="#F7CE85"/> : <TodayOpTickIconTwo width={20} height={20} style={styles.moodIconImage} color="#F7CE85"/>}
                  </Pressable>
                </View>

          </View>

          {/* Todays Option 2 */}
          <View style={styles.todayOpBox}>

                <View style={styles.todayOpImgBox}>
                  <TodayOpIconTwo width={40} height={40} style={styles.moodIconImage} color="#2C2107"/>
                </View>

                <View style={styles.todayOpDetails}>
                    <Text style={styles.todayOpBoxLgTitle}>Tarot Reflection</Text>
                    <Text style={styles.todayOpBoxSmTitle}>Pull today’s card</Text>
                </View>

                <View style={styles.todayOpTickBox}>
                  <Pressable style={styles.fullClickBtn} onPress={()=>todayJourneyFunction('tarotreflection')}>
                    {todayJourney.includes('tarotreflection') ? <TodayOpTickIconOne width={20} height={20} style={styles.moodIconImage} color="#F7CE85"/> : <TodayOpTickIconTwo width={20} height={20} style={styles.moodIconImage} color="#F7CE85"/>}
                  </Pressable>
                </View>

          </View>

          {/* Todays Option 3 */}
          <View style={styles.todayOpBox}>

                <View style={styles.todayOpImgBox}>
                  <TodayOpIconThree width={40} height={40} style={styles.moodIconImage} color="#2C2107"/>
                </View>

                <View style={styles.todayOpDetails}>
                    <Text style={styles.todayOpBoxLgTitle}>Gratitude Journal</Text>
                    <Text style={styles.todayOpBoxSmTitle}>Write 3 things</Text>
                </View>

                <View style={styles.todayOpTickBox}>
                  <Pressable style={styles.fullClickBtn} onPress={()=>todayJourneyFunction('gratitudejournal')}>
                    {todayJourney.includes('gratitudejournal') ? <TodayOpTickIconOne width={20} height={20} style={styles.moodIconImage} color="#F7CE85"/> : <TodayOpTickIconTwo width={20} height={20} style={styles.moodIconImage} color="#F7CE85"/>}
                  </Pressable>
                </View>

          </View>

          <View style={styles.shadowCircleBoxAfter}>
            </View>

      </View>
      </>
  );
}

const styles = StyleSheet.create({
    shadowCircleBoxBefore:{
        width: 280,
        height: 280,
        borderRadius: 200,
        backgroundColor: 'rgba(59,50,89,0.2)', // Muted purple core[cite: 1]
        shadowColor: 'rgba(138,117,209,0.2)', // Bright purple glow color
        // shadowOffset: { width: 0, height: 0 },
        // shadowOpacity: 0.8,
        // shadowRadius: 40,
        // elevation: 20,
        position:'absolute',
        left:-150,
        top:-170,
    },
    shadowCircleBoxAfter:{
        width: 280,
        height: 280,
        borderRadius: 200,
        backgroundColor: 'rgba(59,50,89,0.2)', // Muted purple core[cite: 1]
        shadowColor: 'rgba(138,117,209,0.2)', // Bright purple glow color
        // shadowOffset: { width: 0, height: 0 },
        // shadowOpacity: 0.8,
        // shadowRadius: 40,
        // elevation: 20,
        position:'absolute',
        right:-120,
        bottom:-100,
        zIndex: -1,
    },
    fullClickBtn:{
        // backgroundColor:'green',
        width:'100%',
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
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
        padding: 10,
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