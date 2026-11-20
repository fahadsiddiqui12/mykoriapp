import { Pressable, StyleSheet, Text, View } from 'react-native';
import ArrowBtnYellow from '@/assets/images/sm_btn_icon.svg';
export default function JournalPropmt() {
    return(
        <>
            <View style={styles.mainAffirmationBox}>
                <Text style={styles.dailyEngYellowTitle}>Journal Prompt</Text>
                <Text style={styles.dailyCardLargeTitle}>What part of your soul is calling for attention today?</Text>
                <Pressable style={styles.yellowArrowBtn} onPress={ () => { console.log('start reading button press');} }>
                    <Text style={styles.btnYellowText}>Start Writing</Text>
                    <ArrowBtnYellow width={10} height={10} color="#F1CA93"/>
                </Pressable>
            </View>
        </>
);}

const styles = StyleSheet.create({
    yellowArrowBtn:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        gap:4
    },
    btnYellowText:{
        color:'#F1CA93',
        fontSize: 9
    },
     dailyCardLargeTitle:{
        color:'#E9E1DB',
        fontSize:20,
        textTransform:'uppercase',
    },
    dailyEngQuote:{
        color:'#E9E1DB',
        textTransform:'uppercase',
        fontSize:12
    },
    dailyEngYellowTitle:{
        color:'#D4AF7A',
        marginBottom: 7,
        fontSize: 10,
        textTransform:'uppercase',
    },
    seperatorStyle:{
        marginBottom:10
    },
    mainAffirmationBox:{
        backgroundColor: 'rgba(20,16,42,0.5)',
        padding: 20,
        borderStyle:'solid',
        borderWidth: 1,
        marginBottom:10,
        borderColor:'#D4AF7A',
        borderRadius: 7,
        overflow:'hidden'
    }
});