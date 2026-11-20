import { StyleSheet, Text, View } from 'react-native';
import SteakIcon from '@/assets/images/seven-day_icon.svg';
import TodayOpTickIconTwo from '@/assets/images/today_circle_icon.svg';
import TickIcon from '@/assets/images/today_circle_icon_tick.svg';

export default function SevenDaySteak(){
    return(
        <>
            {/* <View style={styles.mainAffirmationBox}>
                <Text style={styles.dailyEngYellowTitle}>Journal Prompt</Text>
                <Text style={styles.dailyCardLargeTitle}>What part of your soul is calling for attention today?</Text>
                <Pressable style={styles.yellowArrowBtn} onPress={ () => { console.log('start reading button press');} }>
                    <Text style={styles.btnYellowText}>Start Writing</Text>
                </Pressable>
            </View> */}

            <View style={styles.steakMainBox}>
                <View style={styles.steakNumberBox}>
                    <View style={styles.steakInfoBox}>
                        <Text style={styles.mainSevenTitle}>7</Text>
                        <View style={styles.steakIconBox}>
                            <SteakIcon width={55} height={55} color="#F1CA93" style={styles.steakIconStyle}/>
                            <Text style={styles.steakTitle}>DAY STREAK</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.steakCheckBoxes}>
                    <TodayOpTickIconTwo width={20} height={20} color="#F1CA93" style={styles.noiconShadow}/>
                    <TodayOpTickIconTwo width={20} height={20} color="#F1CA93" style={styles.noiconShadow}/>
                    <TickIcon width={20} height={20} color="#F1CA93" style={styles.iconShadow}/>
                    <TodayOpTickIconTwo width={20} height={20} color="#F1CA93" style={styles.noiconShadow}/>
                    <TodayOpTickIconTwo width={20} height={20} color="#F1CA93" style={styles.noiconShadow}/>
                    <TodayOpTickIconTwo width={20} height={20} color="#F1CA93" style={styles.noiconShadow}/>
                    <TodayOpTickIconTwo width={20} height={20} color="#F1CA93" style={styles.noiconShadow}/>
                </View>
            </View>

        </>
    );
}

const styles = StyleSheet.create({
    steakIconStyle:{
        marginBottom:5
    },
    steakIconBox:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    steakInfoBox:{
        // backgroundColor:'yellow',
        flexDirection:'row',
        alignItems:'center'
    },
    steakCheckBoxes:{
        width:'60%',
        // backgroundColor:'#999',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        gap:'5'
    },
    steakNumberBox:{
        width:'40%',
        // backgroundColor:'green',
    },
    steakTitle:{
        fontSize:12,
        color:'#E9E1DB'
    },
    mainSevenTitle:{
        color:'#D4AF7A',
        fontSize:80,
        fontWeight:'bold',
        position:'relative',
        top:'-6'
    },
    steakMainBox:{
        backgroundColor: 'rgba(20,16,42,0.5)',
        paddingHorizontal:20,
        borderStyle:'solid',
        borderWidth: 1,
        marginBottom:10,
        borderColor:'#D4AF7A',
        borderRadius: 7,
        overflow:'hidden',
        flexDirection:'row',
    }
});