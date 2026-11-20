import { useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { router } from 'expo-router';

import MyIconOne from '@/assets/images/step_two_icon1.svg';
import MyIconTwo from '@/assets/images/step_two_icon2.svg';
import MyIconThree from '@/assets/images/step_two_icon3.svg';
import MyIconFour from '@/assets/images/step_two_icon4.svg';
import MyIconFive from '@/assets/images/step_two_icon5.svg';
import MyIconSix from '@/assets/images/step_two_icon6.svg';

export default function StepTwo() {

    const [selectedOption, setSelectedOption] = useState<string[]>([]);

    const handleBox = (val:string) : void => {
            //setSelectedOption(val);
            //console.log(val);

           let newselectedOptionArr: string[];

           if(selectedOption.includes(val))
           {
                newselectedOptionArr = selectedOption.filter((arrval) => arrval !== val);
           }
           else
           {
                newselectedOptionArr = [...selectedOption,val]
           }

           setSelectedOption(newselectedOptionArr);
           //console.log(newselectedOptionArr);
    }

  return (
   
    <KeyboardAvoidingView
          style={styles.keyboardView}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
        <ScrollView
                  contentContainerStyle={styles.scrollContent}
                  keyboardShouldPersistTaps="handled"
                  showsVerticalScrollIndicator={false}
        >

            {/* Full Page Background Image */}
            <Image source={require('@/assets/images/new_bg_app.png')} style={styles.bgimg}/>

            {/*  Step Top Skep Box */}
            <View style={styles.stepTopBlock}>

                <View style={styles.stepsTopDotBox}>
                    <Pressable style={styles.stepDotCircleBorder} onPress={()=>{ console.log('Top Step 1 dot Clicked'); }}></Pressable>
                    <Pressable style={styles.stepDotCircle} onPress={()=>{ console.log('Top Step 2 dot Clicked'); }}></Pressable>
                    <Pressable style={styles.stepDotCircleBorder} onPress={()=>{ console.log('Top Step 3 dot Clicked'); }}></Pressable>
                    <Pressable style={styles.stepDotCircleBorder} onPress={()=>{ console.log('Top Step 4 dot Clicked'); }}></Pressable>
                </View>
                <Pressable style={styles.buttonForget} onPress={()=>{ console.log('Skip Button Clicked'); }}>
                <Text style={styles.forgetText}>
                    Skip for now
                </Text>
                </Pressable>
            </View>

            {/* Steps Number Box */}
            <View style={styles.stepDetailsBox}>
                <Text style={styles.stepYellowTitle}>Step 02 of 04</Text>
                <Text style={styles.stepWhiteText}>What brought you here today?</Text>
                <Text style={styles.stepParagraph}>Choose one to help us guide your journey.</Text>
            </View>

            <View style={styles.stepOPMainBox}>

                {/* OP Box 1 */}
                <Pressable style={[styles.opImgBox,
                    selectedOption.includes('meditation') && styles.addFullBg
                ]} onPress={()=>handleBox('meditation')}>
                    <View style={styles.opBoxTwo}>
                        <MyIconOne width={60} height={60} style={styles.opIcon}/>
                        <Text style={styles.stepOpText}>Meditation</Text>
                    </View>
                </Pressable>

                {/* OP Box 2 */}
                <Pressable style={[styles.opImgBox,
                    selectedOption.includes('tarot') && styles.addFullBg
                ]} onPress={()=>handleBox('tarot')}>
                    <View style={styles.opBoxTwo}>
                            <MyIconTwo width={60} height={60} style={styles.opIcon}/>
                            <Text style={styles.stepOpText}>Tarot</Text>
                    </View>
                </Pressable>

                {/* OP Box 3 */}
                <Pressable style={[styles.opImgBox,
                    selectedOption.includes('journaling') && styles.addFullBg
                ]} onPress={()=>handleBox('journaling')}>
                    <View style={styles.opBoxTwo}>
                            <MyIconThree width={60} height={60} style={styles.opIcon}/>
                            <Text style={styles.stepOpText}>Journaling</Text>
                    </View>
                </Pressable>

                {/* OP Box 4 */}
                <Pressable style={[styles.opImgBox,
                    selectedOption.includes('healingfrequency') && styles.addFullBg
                ]} onPress={()=>handleBox('healingfrequency')}>
                    <View style={styles.opBoxTwo}>
                            <MyIconFour width={60} height={60} style={styles.opIcon}/>
                            <Text style={styles.stepOpText}>Healing Frequency</Text>
                    </View>
                </Pressable>

                {/* OP Box 5 */}
                <Pressable style={[styles.opImgBox,
                    selectedOption.includes('astrology') && styles.addFullBg
                ]} onPress={()=>handleBox('astrology')}>
                    <View style={styles.opBoxTwo}>
                            <MyIconFive width={60} height={60} style={styles.opIcon}/>
                            <Text style={styles.stepOpText}>Astrology</Text>
                    </View>
                </Pressable>

                {/* OP BOx 6 */}
                <Pressable style={[styles.opImgBox,
                    selectedOption.includes('moonphases') && styles.addFullBg
                ]} onPress={()=>handleBox('moonphases')}>
                    <View style={styles.opBoxTwo}>
                            <MyIconSix width={60} height={60} style={styles.opIcon}/>
                            <Text style={styles.stepOpText}>Moon Phases</Text>
                    </View>
                </Pressable>
                
            </View>
            

            {/* Steps Continue Button */}
            <View style={styles.stepBottomBtnBox}>
                <Pressable style={styles.solidYellowButton} onPress={() => router.push('/(app)/(tabs)')}>
                    <Text style={styles.buttonText}>Continue</Text>
                </Pressable>
            </View>

        </ScrollView>

    </KeyboardAvoidingView>


  );
}


const styles = StyleSheet.create({
    stepOPMainBox:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        // backgroundColor: '#888',
        padding: 5,
        gap: 10,
        justifyContent: 'space-around',
        flex:1,
    },
    opImgBox:{
        borderWidth:1,
        borderColor: '#fff',
        borderStyle: 'solid',
        paddingTop:14,
        paddingBottom:14,
        // flex:1,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 8,
        width: '48%',
        flexDirection: 'row',
        // backgroundColor: '#323232',
    },
    opBoxTwo:{
        alignItems: 'center',
    },
    stepTopBlock:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginBottom: 10,
        // backgroundColor: 'red',
        // flex:2,
    },
    stepOpBox:{
        flexDirection:'row',
        // justifyContent:'space-between',
        gap: 10,
        marginBottom: 13,
        padding:15,
        borderStyle:'solid',
        borderWidth:1,
        borderColor: '#D4AF7A',
        borderRadius: 7,
        backgroundColor:'rgb(17,12,42,0.4)',
        boxShadow: '0px 0px 5px 1px #D4AF7A',
    },
    addFullBg:{
        backgroundColor: '#191969',
    },
    stepFullOpBox:{
        flexDirection:'row',
        flex: 1,
        // justifyContent:'space-between',
        gap: 10
    },
    stepLeftImg:{
        flex: 1
    },
    stepOpText:{
        fontSize: 13,
        textAlign: 'center',
        color: '#FFECD0',
        // flex: 2
    },
    stepOpTextBlack:
    {
        color: '#2C2107',
    },
    opTickImg:{
        flex: 1
    },
    opIcon:{
        // width: 10,
        // height: 10,
    },
    stepsTopDotBox:{
        flexDirection:'row',
        gap: 3,
    },
    stepBottomBtnBox:{
        // backgroundColor: 'purple',
        // flex:4,
    },
    stepDotCircle:{
        width: 8,
        height: 8,
        backgroundColor: '#F7CE85',
        borderRadius: 50,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#F7CE85',
    },
    stepDotCircleBorder:{
        width: 8,
        height: 8,
        borderRadius: 50,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#F7CE85',
    },
    buttonForget:{
        color: '#F7CE85',
    },
    forgetText :{
        fontSize: 10,
        textAlign: 'right',
        color: '#FFECD0',
        marginTop: 5,
    },
    keyboardView: {
        flex: 1,
    },
    scrollContent: {
        // flexGrow: 5,
        flex: 1,
        justifyContent: 'space-around',
        paddingTop: 50,
        paddingBottom: 50,
        paddingLeft:20,
        paddingRight:20,
    },
    stepDetailsBox:{
        // backgroundColor: 'green',
        // flex: 1,
        marginBottom:10,
    },
    bgimg:{
        // flex : 1,
        position : 'absolute',
        top: 0,
        left: 0,
        resizeMode: 'stretch',
    },
    stepYellowTitle:{
        color: '#F7CE85',
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: '600',
        marginBottom: 5,
    },
    stepWhiteText:{
        color: '#FFFF',
        fontSize: 20,
        textTransform: 'uppercase',
        fontWeight: '600',
        marginBottom: 5,
    },
    stepParagraph:{
        color: '#FFFF',
        fontSize: 10,
        textTransform: 'uppercase',
        fontWeight: '600',
        marginBottom: 5,
    },
    solidYellowButton: {
        height: 50,
        backgroundColor: '#F1CA93',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#F1CA93',
    },

    buttonText: {
        color: '#2C2107',
        fontSize: 14,
        fontWeight: '600',
    },
});