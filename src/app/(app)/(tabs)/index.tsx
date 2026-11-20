import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';


import AffirmationSingleCard from '@/components/home/AffirmationSingleCard';
import DailyCardSingle from '@/components/home/DailyCardSingle';
import DailyEnergyReflection from '@/components/home/DailyEnergyReflection';
import DashbaoardDifferentOptions from '@/components/home/DashboardDifferentOptions';
import DashboardPlayList from '@/components/home/DashboardPlayList';
import DashboardRandomMessage from '@/components/home/DashboardRandomMessage';
import JournalPropmt from '@/components/home/JournalPrompt';
import MoodSelection from '@/components/home/MoodSelection';
import SevenDaySteak from '@/components/home/SevenDaySteak';
import TodayOptions from '@/components/home/TodayOptions';
import BottomMenu from '@/components/layout/BottomMenu';
import NotificationsList from '@/components/layout/NotificationsList';
import { useState } from 'react';

export default function HomeScreen() {

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

    <ScrollView
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >

      {/* Full Page Background Image */}
      <Image source={require('@/assets/images/main_bg_img.png')} style={styles.bgimg}/>


      {/* Main Top Box */}
      <View style={styles.welcomeBox}>
        <View style={styles.welcomeTitle}>
            <Text style={styles.greetingText}>Good Evening,</Text>
            <Text style={styles.userName}>Kori Zion</Text>
            <Text style={styles.greetingMessage}>YOU ARE A SOUL OF LIGHT HAVING A HUMAN EXPERIENCE</Text>
        </View>
        <NotificationsList/>
        {/* <View style={styles.notificationIconBox}>
          <Pressable style={styles.notiPress}>
              <MyNotiIcon width={25} height={25}/>
              <Text style={styles.notiNumber}></Text>
          </Pressable>
        </View> */}
      </View>

      {/* How Are You Feeling Today Boxes */}
      <MoodSelection/>
      
      {/* Todays's Journay box*/}
      <TodayOptions/>

      {/* Daily Energy Reflection  */}
      <DailyEnergyReflection/>

      {/* Daily Single Card */}
      <DailyCardSingle/>

      {/* Dashbaoard Message */}
      <DashboardRandomMessage/>

      {/* Affirmation Box */}
      <AffirmationSingleCard/>

      {/* Dahsboard Play list Box */}
      <DashboardPlayList/>

      {/* Journal Prompt Box */}
      <JournalPropmt/>

      {/* More Dashboard Option */}
      <DashbaoardDifferentOptions/>

      {/* Seven Day Steak */}
      <SevenDaySteak/>

      {/* Custom Bottom Navigation */}
      <BottomMenu/>

    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
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
    marginTop: 40
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