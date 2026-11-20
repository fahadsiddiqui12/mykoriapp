import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import MoodIconOne from '@/assets/images/mood_icon1.svg';
import MoodIconTwo from '@/assets/images/mood_icon2.svg';
import MoodIconThree from '@/assets/images/mood_icon3.svg';
import MoodIconFour from '@/assets/images/mood_icon4.svg';
import MoodIconFive from '@/assets/images/mood_icon5.svg';

import MoodIconOneFull from '@/assets/images/mood_icon1_n.svg';
import MoodIconTwoFull from '@/assets/images/mood_icon2_n.svg';
import MoodIconThreeFull from '@/assets/images/mood_icon3_n.svg';
import MoodIconFourFull from '@/assets/images/mood_icon4_n.svg';
import MoodIconFiveFull from '@/assets/images/mood_icon5_n.svg';

export default function MoodSelection() {

    const [mood,setMood] = useState<string>('');

    // Moods Function
    const handleMoodOp = (val:string) : any => {
        setMood(val);
        //console.log(val);
    }

  return (
    <>
    {/* How Are You Feeling Today Boxes */}

      <View style={styles.mainFeelingDiv}>
        <View>
          <Text style={styles.boxTitleLarge}>How are you feeling today?</Text>
        </View>

        <View style={styles.opBoxstyle}>

            {/* Mood Press OP 1 */}
            <Pressable style={styles.moodOpBtn} onPress={() => { handleMoodOp('happy'); }}>
              {mood == 'happy' ? <MoodIconOneFull width={20} height={20} style={[styles.moodIconImage,styles.addImageShadow]} color="#F7CE85"/> : <MoodIconOne width={20} height={20} style={styles.moodIconImage} color="#F7CE85"/>}
              <Text style={styles.moodTitle}>Happy</Text>
            </Pressable>

            {/* Mood Press OP 2 */}
            <Pressable style={styles.moodOpBtn} onPress={() => { handleMoodOp('calm'); }}>
              {mood == 'calm' ? <MoodIconTwoFull width={20} height={20} style={[styles.moodIconImage,styles.addImageShadow]} color="#F7CE85"/> : <MoodIconTwo width={20} height={20} style={styles.moodIconImage} color="#F7CE85"/>}
              <Text style={styles.moodTitle}>Calm</Text>
            </Pressable>

            {/* Mood Press OP 3 */}
            <Pressable style={styles.moodOpBtn} onPress={() => { handleMoodOp('neutral'); }}>
              {
                mood == 'neutral' ? <MoodIconThreeFull width={20} height={20} style={[styles.moodIconImage,styles.addImageShadow]} color="#F7CE85"/> : <MoodIconThree width={20} height={20} style={styles.moodIconImage} color="#F7CE85"/>
              }
              <Text style={styles.moodTitle}>Neutral</Text>
            </Pressable>

            {/* Mood Press OP 4 */}
            <Pressable style={styles.moodOpBtn} onPress={() => { handleMoodOp('anxious'); }}>
              {
                mood == 'anxious' ? <MoodIconFourFull width={20} height={20} style={[styles.moodIconImage,styles.addImageShadow]} color="#F7CE85"/> : <MoodIconFour width={20} height={20} style={styles.moodIconImage} color="#F7CE85"/>
              }
              <Text style={styles.moodTitle}>Anxious</Text>
            </Pressable>

            {/* Mood Press OP 5 */}
            <Pressable style={styles.moodOpBtn} onPress={() => { handleMoodOp('sad'); }}>
              {
                mood == 'sad' ? <MoodIconFiveFull width={20} height={20} style={[styles.moodIconImage,styles.addImageShadow]} color="#F7CE85"/> : <MoodIconFive width={20} height={20} style={styles.moodIconImage} color="#F7CE85"/>
              }
              <Text style={styles.moodTitle}>Sad</Text>
            </Pressable>

        </View>
      </View>
      </>
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