import { router } from 'expo-router';
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

import StepfiveIcon from '@/assets/images/step_five.svg';
import StepfourIcon from '@/assets/images/step_four.svg';
import StepOneIcon from '@/assets/images/step_one.svg';
import StepThreeIcon from '@/assets/images/step_three.svg';
import StepTick from '@/assets/images/step_tick_icon.svg';
import StepTwoIcon from '@/assets/images/step_two.svg';


export default function StepOne() {

    const [selectedOption, setSelectedOption] = useState<string>('');

    const handleBox = (val:string) : any => {
            setSelectedOption(val);
            //console.log(selectedOption);
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
                    <Pressable style={styles.stepDotCircle} onPress={()=>{ console.log('Top Step 1 dot Clicked'); }}></Pressable>
                    <Pressable style={styles.stepDotCircleBorder} onPress={()=>{ console.log('Top Step 2 dot Clicked'); }}></Pressable>
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
                <Text style={styles.stepYellowTitle}>Step 01 of 04</Text>
                <Text style={styles.stepWhiteText}>What brought you here today?</Text>
                <Text style={styles.stepParagraph}>Choose one to help us guide your journey.</Text>
            </View>

            <View style={styles.stepOPMainBox}>

                {/* Option Box 1 */}
                <Pressable style={[
                    styles.stepOpBox,
                    selectedOption == 'stressrelief' && styles.addFullBg,
                    ]} 
                    onPress={
                        () => {
                            handleBox('stressrelief')
                        }
                        }>

                    <View style={styles.stepFullOpBox}>
                        <StepOneIcon
                            width={20}
                            height={20}
                            style={styles.stepLeftImg}
                            stroke='#000'
                            color="#000"
                        />
                        <Text style={[
                                styles.stepOpText,
                                selectedOption == 'stressrelief' && styles.stepOpTextBlack,
                            ]}>
                                Stress Relief
                        </Text>
                        { selectedOption == 'stressrelief' && <StepTick width={20} height={20} style={styles.opTickImg}/>  }
                    </View>

                </Pressable>

                {/* Option Box 2 */}
                <Pressable style={[
                    styles.stepOpBox,
                    selectedOption == 'bettersleep' && styles.addFullBg,
                    ]} 
                    onPress={
                        () => {
                            handleBox('bettersleep')
                        }
                        
                        }>

                    <View style={styles.stepFullOpBox}>
                        <StepTwoIcon
                            width={20}
                            height={20}
                            style={styles.stepLeftImg}
                        />
                        <Text style={[
                                styles.stepOpText,
                                selectedOption == 'bettersleep' && styles.stepOpTextBlack,
                            ]}>
                            Better Sleep
                        </Text>
                        { selectedOption == 'bettersleep' && <StepTick width={20} height={20} style={styles.opTickImg}/>  }
                    </View>

                </Pressable>

                {/* Option Box 3 */}
                <Pressable style={[
                    styles.stepOpBox,
                    selectedOption == 'curiosity' && styles.addFullBg,
                    ]} 
                    onPress={
                        () => {
                            handleBox('curiosity')
                        }
                        
                        }>

                    <View style={styles.stepFullOpBox}>
                        <StepThreeIcon
                            width={20}
                            height={20}
                            style={styles.stepLeftImg}
                        />
                        <Text style={[
                                styles.stepOpText,
                                selectedOption == 'curiosity' && styles.stepOpTextBlack,
                            ]}>
                            Curiosity & Exploration
                        </Text>
                        { selectedOption == 'curiosity' && <StepTick width={20} height={20} style={styles.opTickImg}/>  }
                    </View>

                </Pressable>

                {/* Option Box 4 */}
                <Pressable style={[
                    styles.stepOpBox,
                    selectedOption == 'emotionalhealing' && styles.addFullBg,
                    ]} 
                    onPress={
                        () => {
                            handleBox('emotionalhealing')
                        }
                        
                        }>

                    <View style={styles.stepFullOpBox}>
                        <StepfourIcon
                            width={20}
                            height={20}
                            style={styles.stepLeftImg}
                        />
                        <Text style={[
                                styles.stepOpText,
                                selectedOption == 'emotionalhealing' && styles.stepOpTextBlack,
                            ]}>
                            Emotional Healing
                        </Text>
                        { selectedOption == 'emotionalhealing' && <StepTick width={20} height={20} style={styles.opTickImg}/>  }
                    </View>

                </Pressable>

                {/* Option Box 5 */}
                <Pressable style={[
                    styles.stepOpBox,
                    selectedOption == 'personalgrowth' && styles.addFullBg,
                    ]} 
                    onPress={
                        () => {
                            handleBox('personalgrowth')
                        }
                        
                        }>

                    <View style={styles.stepFullOpBox}>
                        <StepfiveIcon
                            width={20}
                            height={20}
                            style={styles.stepLeftImg}
                        />
                        <Text style={[
                                styles.stepOpText,
                                selectedOption == 'personalgrowth' && styles.stepOpTextBlack,
                            ]}>
                            Personal Growth
                        </Text>
                        { selectedOption == 'personalgrowth' && <StepTick width={20} height={20} style={styles.opTickImg}/>  }
                    </View>

                </Pressable>

            </View>

            {/* Steps Continue Button */}
            <View style={styles.stepBottomBtnBox}>
                <Pressable
                    style={styles.solidYellowButton}
                    onPress={() => router.push('/(onboarding)/step-two')}
                    >
                    <Text style={styles.buttonText}>
                        Continue
                    </Text>
                </Pressable>
            </View>

        </ScrollView>

    </KeyboardAvoidingView>


  );
}


const styles = StyleSheet.create({
    stepTopBlock:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginBottom: 10,
        // backgroundColor: 'red',
        // flex:1,
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
        backgroundColor: '#D4AF7A',
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
    stepOPMainBox:{
        flexDirection:'column',
        flex: 1,
    },
    stepOpText:{
        fontSize: 13,
        textAlign: 'left',
        color: '#FFECD0',
        flex: 2
    },
    stepOpTextBlack:
    {
        color: '#2C2107',
    },
    opTickImg:{
        flex: 1
    },
    opIcon:{
        width: 40,
        height: 40,
        resizeMode: 'contain'
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
        // justifyContent: 'space-around',
        paddingTop: 50,
        paddingBottom: 50,
        paddingLeft:20,
        paddingRight:20,
    },
    stepDetailsBox:{
        // backgroundColor: 'green',
        marginBottom: 10,
        // flex: 2,
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