import BgNatureIconOne from '@/assets/images/bg_nature_icon1.svg';
import BgNatureIconTwo from '@/assets/images/bg_nature_icon2.svg';
import BgNatureIconThree from '@/assets/images/bg_nature_icon3.svg';
import BgNatureIconFour from '@/assets/images/bg_nature_icon4.svg';
import FavoriteIcon from '@/assets/images/favorite_icon1.svg';
import PlayerOpIconOne from '@/assets/images/player_op_icon1.svg';
import PlayerOpIconTwo from '@/assets/images/player_op_icon2.svg';
import PlayerOpIconThree from '@/assets/images/player_op_icon3.svg';
import PlayerOpIconFour from '@/assets/images/player_op_icon4.svg';
import PlayerOpIconFive from '@/assets/images/player_op_icon5.svg';
import SleepTimerIconOne from '@/assets/images/sleep_timer_icon1.svg';
import SoundBalanceIconOne from '@/assets/images/sound_balance_icon1.svg';
import SoundBalanceIconTwo from '@/assets/images/sound_balance_icon2.svg';

import PlayerStarsIcon from '@/assets/images/player_stars_icon.svg';
import { router } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function SingleMainPlayerBox()
{
    
    const [backgroundNature,setbackgroundNature] = useState<string>('');
    
    // Set The Background Nature function
    const addBgSound = (val:string) : void => {
        setbackgroundNature(
            previousVal => previousVal === val ? '' : val
        );
        //console.log(val);
    }

    return(
        <>
            {/* Player Main Box */}
            <View style={styles.PlayerMainImgBox}>
                <Image source={require('@/assets/images/player_main_box_img.png')} style={styles.mainImg}/>

                {/* Player Top Info Box */}
                <View style={styles.PlayerTopInfo}>
                    <View style={styles.InfoWhiteBox}>
                        <PlayerStarsIcon width={22} height={22} color="#D9B36C"/>
                        <Text style={styles.whiteText}>ALPHA WAVES • 432 HZ MASTER</Text>
                    </View>
                </View>

                {/* Player Bottom Details */}
                <View style={styles.PlayerBottomDetails}>
                    <Text style={styles.PlayerTrackLargeTitle}>Drifting Off</Text>
                    <View style={styles.PlayerTrackInfo}>
                        <Text style={styles.PlayerTrackWhiteTxt}>12 min</Text>
                        <Text style={styles.PlayerTrackWhiteTxt}>Deep Slumber</Text>
                        <Text style={styles.PlayerTrackYellowTxt}>Celestial Voice</Text>
                    </View>
                    <View style={styles.PlayerTrackInfoOthers}>
                        <Text style={styles.PlayerTrackYellowTxt}>04:36</Text>
                        <View style={styles.PlayerTrackCatBox}>
                            <View style={styles.PlayerYellowBox}></View>
                            <Text style={styles.PlayerTrackWhiteTxt}>SPATIAL AUDIO</Text>
                        </View>
                        <Text style={styles.PlayerTrackWhiteTxt}>12:00</Text>
                    </View>
                </View>
            </View>

            {/* Player Pressable Options */}
            <View style={styles.PlayerButtonOptions} >
                <Pressable style={styles.PlayerPressSingleButton} onPress={()=> {console.log('Option 1 Clicked')}}>
                        <PlayerOpIconOne width={20} height={20}/>
                </Pressable>
                <Pressable style={styles.PlayerPressSingleButton} onPress={()=> {console.log('Option 2 Clicked')}}>
                        <PlayerOpIconTwo width={20} height={20}/>
                </Pressable>
                <Pressable style={[styles.PlayerPressSingleButton,styles.PlayerPressYellowBtnWidthInc]} onPress={()=> {console.log('Option 3 Clicked')}}>
                        <PlayerOpIconThree width={20} height={20}/>
                </Pressable>
                <Pressable style={styles.PlayerPressSingleButton} onPress={()=> {console.log('Option 4 Clicked')}}>
                        <PlayerOpIconFour width={20} height={20}/>
                </Pressable>
                <Pressable style={styles.PlayerPressSingleButton} onPress={()=> {console.log('Option 5 Clicked')}}>
                        <PlayerOpIconFive width={20} height={20}/>
                </Pressable>
            </View>

            {/* Sound Balance Box */}

            <View style={styles.soundBalanceBox}>

                {/* Sound Balance Titles Box */}
                <View style={styles.soundBalanceTopTitlesBox}>
                    <View style={styles.soundTitlesDiv}>
                        <Text style={styles.BigYellowTxt}>SOUND BALANCE</Text>
                        <Text style={styles.SmallWhiteTxt}>Guide Voice & Celestial</Text>
                    </View>
                    <View style={styles.soundVoiceDiv}>
                        <Text style={styles.SmallWhiteTxt}>Voice</Text>
                        <Text style={styles.SmallWhiteTxt}>70%</Text>
                    </View>
                    <View style={styles.soundAmbiDiv}>
                        <Text style={styles.SmallWhiteTxt}>Ambience</Text>
                        <Text style={styles.SmallWhiteTxt}>85%</Text>
                    </View>
                </View>

                {/* Drone Box */}
                <View style={styles.droneBox}>
                    <Text style={styles.SmallWhiteTxt}>Drone</Text>
                </View>

                {/* Whisper Box */}
                <View style={styles.whisperBox}>
                    
                    <View style={styles.whisperBoxFirstCol}>
                        <SoundBalanceIconOne width={20} height={20}/>
                        <Text style={styles.SmallWhiteTxt}>WHISPER</Text>
                    </View>
                    
                    <View style={styles.whisperBoxSecondCol}>
                        <Text style={styles.SmallWhiteTxt}>IMMERSION</Text>
                    </View>

                    <View style={styles.whisperBoxThirdCol}>
                        <SoundBalanceIconTwo width={20} height={20}/>
                    </View>

                </View>

            </View>

            {/* Background Nature Box */}

            <View style={styles.backgroundNatureMainBox}>

                <View style={styles.NatureTitlesBox}>

                    <View style={styles.backgroundTopTitles}>
                        <Text style={styles.BigYellowTxt}>BACKGROUND NATURE</Text>
                        <Text style={styles.SmallWhiteTxt}>Infused organic frequencies</Text>
                    </View>
                    <View>
                        <BgNatureIconOne width={30} height={30} color="#D9B36C"/>
                    </View>
                </View>

                <View style={styles.backgroundNatureOpList}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.backgroundNatureScrollView}
                        >
                            {/* Background Nature Option 1 */}
                            <Pressable 
                                style={[
                                        styles.backgorundNatureButton,
                                        backgroundNature ===  'warmrain' && styles.backgorundNatureButtonActive
                                    ]} 
                                onPress={()=> {addBgSound('warmrain')}}>
                                        <BgNatureIconTwo width={18} height={18} 
                                            color={backgroundNature ===  'warmrain' ? '#2C2107' : '#cccccc'}/>
                                        <Text style={[
                                            styles.backgroundNatureButtonTxt,
                                            backgroundNature ===  'warmrain' && styles.backgroundNatureButtonTxtActive
                                        ]}>
                                            Warm Rain
                                        </Text>
                            </Pressable>

                            {/* Background Nature Option 2 */}
                            <Pressable style={[
                                    styles.backgorundNatureButton,
                                    backgroundNature ===  'cosmicwind' && styles.backgorundNatureButtonActive
                                ]} 
                                onPress={()=> {addBgSound('cosmicwind')}}>
                                        <BgNatureIconThree width={18} height={18} 
                                            color={backgroundNature ===  'cosmicwind' ? '#2C2107' : '#cccccc'}/>
                                        <Text style={[
                                            styles.backgroundNatureButtonTxt,
                                            backgroundNature ===  'cosmicwind' && styles.backgroundNatureButtonTxtActive
                                        ]}>
                                            Cosmic Wind
                                        </Text>
                            </Pressable>

                            {/* Background Nature Option 3 */}
                            <Pressable style={[
                                        styles.backgorundNatureButton,
                                        backgroundNature ===  'tibetanbowls' && styles.backgorundNatureButtonActive
                                    ]} 
                                    onPress={()=> {addBgSound('tibetanbowls')}}>
                                        <BgNatureIconFour width={18} height={18} 
                                        color={backgroundNature ===  'tibetanbowls' ? '#2C2107' : '#cccccc'}/>
                                        <Text style={[
                                            styles.backgroundNatureButtonTxt,
                                            backgroundNature ===  'tibetanbowls' && styles.backgroundNatureButtonTxtActive
                                        ]}>Tibetan Bowls</Text>
                            </Pressable>
                            
                    </ScrollView>
                </View>

            </View>


            {/* Sleep and Favorite Button */}

            <View style={styles.bottomBtnMainBox}>

                <View style={styles.firstButtonBox}>
                    <View style={styles.bottomBtnTextBox}>
                        <Text style={styles.BottomBtnYellowTxt}>SLEEP TIMER</Text>
                        <Text style={styles.bottomBtnYellowSmallTxt}>25 min fade</Text>
                    </View>
                    <View style={styles.bottomBtnIconBox}>
                        <SleepTimerIconOne width={20} height={20} color='#D9B36C'/>
                    </View>
                </View>

                <View style={styles.secondButtonBox}>
                     <View style={styles.bottomBtnTextBox}>
                        <Text style={styles.BottomBtnYellowTxt}>FAVORITE</Text>
                        <Text style={styles.bottomBtnWhiteTxt}>Add to Daily</Text>
                    </View>
                    <View style={styles.bottomBtnIconBox}>
                        <Pressable onPress={()=> {console.log('Favorite Button Clicked');}}>
                            <FavoriteIcon width={20} height={20} color='#D9B36C'/>
                        </Pressable>
                    </View>
                </View>

            </View>

            <View>
                <Pressable onPress={() => router.push('/(screens)/meditation/search')}>
                    <Text style={styles.BigYellowTxt}>Search</Text>
                </Pressable>
            </View>

        </>
    );
}

const styles = StyleSheet.create({
    bottomBtnMainBox:{
        flexDirection:'row',
        justifyContent:'space-between',
        gap:10,
        marginBottom:40
    },
    bottomBtnYellowSmallTxt:{
        color:'#D9B36C',
        fontSize:11
    },
    bottomBtnWhiteTxt:{
        color:'#fff',
        fontSize:11
    },
    BottomBtnYellowTxt:{
        color:'#D9B36C',
        fontWeight:'600',
        fontSize:15
    },
    backgroundNatureButtonTxtActive:{
        color:'#2C2107'
    },
    backgorundNatureButtonActive:{
        backgroundColor:'#D9B36C',
        borderColor:'#D9B36C'
    },
    backgroundTopTitles:{
        marginBottom:8
    },
    backgroundNatureScrollView:{
        gap:8
    },
    backgorundNatureButton:{
        backgroundColor:'rgb(255,255,255,0.2)',
        borderWidth:1,
        borderColor:'rgb(255,255,255,0.5)',
        borderRadius:20,
        paddingVertical:8,
        paddingHorizontal:18,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:5
    },
    backgroundNatureButtonTxt:{
        color:'#fff',
        fontSize:11
    },
    NatureTitlesBox:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    droneBox:{
        marginBottom:5
    },
    whisperBox:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        gap:10
    },
    whisperBoxFirstCol:{
        flexDirection:'row',
        gap:5,
        width:'50%'
    },
    whisperBoxSecondCol:{
        width:'35%',
        alignItems:'flex-end'
    },
    whisperBoxThirdCol:{
        width:'15%'
    },
    soundBalanceTopTitlesBox:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end',
        width:'100%',
        marginBottom:8
    },
    SmallWhiteTxt:{
        color:'#fff',
        fontSize:12
    },
    BigYellowTxt:{
        color:'#D9B36C',
        fontSize:15,
        marginBottom:5
    },
    PlayerPressYellowBtnWidthInc:{
        width: 50,
        height: 50,
        backgroundColor:'#D9B36C',
    },
    secondButtonBox:{
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'#D9B36C',
        backgroundColor: 'rgba(17,12,42,0.8)',
        paddingVertical:22,
        paddingHorizontal:18,
        borderRadius:8,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'50%'
    },
    firstButtonBox:{
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'#D9B36C',
        backgroundColor: 'rgba(17,12,42,0.8)',
        paddingVertical:22,
        paddingHorizontal:18,
        borderRadius:8,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'50%'
    },
    PlayerPressSingleButton:{
        width: 42,
        height: 42,
        // backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 50,
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'#D4AF7A',
    },
    PlayerButtonOptions:{
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'#D9B36C',
        backgroundColor: 'rgba(17,12,42,0.8)',
        padding: 10,
        borderRadius:8,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:12
    },
    soundBalanceBox:{
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'#D9B36C',
        backgroundColor: 'rgba(17,12,42,0.8)',
        padding: 10,
        borderRadius:8,
        marginBottom:12
    },
    backgroundNatureMainBox:{
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'#D9B36C',
        backgroundColor: 'rgba(17,12,42,0.8)',
        padding: 10,
        borderRadius:8,
        marginBottom:12
    },
    PlayerYellowBox:{
        width: 4,
        height: 4,
        backgroundColor:'#D9B36C',
        borderRadius: 50
    },
    PlayerTrackWhiteTxt:{
        color:'#fff',
        fontSize: 12,
    },
    PlayerTrackYellowTxt:{
        color:'#D9B36C',
        fontSize: 12,
    },
    PlayerTrackInfoOthers:{
        flexDirection:'row',
        gap: 10,
        justifyContent:'space-around',
        alignItems:'center',
        width:'100%',
    },
    PlayerTrackInfo:{
        flexDirection:'row',
        gap: 10,
        justifyContent:'center',
        marginBottom:10
    },
    PlayerTrackLargeTitle:{
        color:'#fff',
        fontSize: 22,
        textTransform:'uppercase',
        // backgroundColor:'red',
        // width: '100%',
        textAlign:'center',
    },
    PlayerBottomDetails:{
        position:'absolute',
        bottom:10,
        left:0,
        right: 0,
        alignItems: 'center',
        justifyContent:'center',
        marginHorizontal: 10,
    },
    PlayerTopInfo:{
        position:'absolute',
        top:10,
        left:0,
        right: 0,
        alignItems: 'center',
        justifyContent:'center',
        marginHorizontal: 10
    },
    PlayerMainImgBox:{
        position:'relative',
        marginBottom:20
    },
    whiteText:{
        color:'#fff',
        fontSize: 12,
        textAlign:'center'
    },
    PlayerTrackCatBox:{
        backgroundColor:'rgb(255,255,255,0.2)',
        borderRadius: 20,
        padding: 8,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        flexWrap:'wrap',
        gap: 8
    },
    InfoWhiteBox:
    {
        backgroundColor:'rgb(255,255,255,0.2)',
        borderRadius: 20,
        padding: 8,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        flexWrap:'wrap',
        gap: 8
    },
    mainImg:{
        width: '100%',
        height: 380,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#D9B36C',
        resizeMode: 'cover',
        borderRadius: 8,
    }
});