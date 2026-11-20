import { StyleSheet, Text, View } from "react-native";
import BoxStyleImageTwo from '@/assets/images/daily-box-style-img-two.svg';
import BoxStyleImage from '@/assets/images/daily-box-style-img.svg';

export default function DashboardRandomMessage () {
    return(
        <>
            <View style={styles.mainAffirmationBox}>
                <View style={styles.dailyEngAllTitles}>
                    <BoxStyleImage width={70} height={70} style={styles.boxStyleImageTop} color="#F1CA93"/>
                    <BoxStyleImage width={70} height={70} style={styles.boxStyleImageRight} color="#F1CA93"/>
                    <BoxStyleImageTwo width={70} height={70} style={styles.boxStyleImageBottom} color="#F1CA93"/>
                    <BoxStyleImageTwo width={70} height={70} style={styles.boxStyleImageLeft} color="#F1CA93"/>
                    <Text style={styles.dailyCardLargeTitle}>"Your potential is as vast as the night sky."</Text>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    dailyCardLargeTitle:{
        color:'#E9E1DB',
        fontSize:20,
        textTransform:'uppercase',
        textAlign:'center',
    },
    dailyEngQuote:{
        color:'#E9E1DB',
        textTransform:'uppercase',
        textAlign:'center',
        fontSize:12
    },
    dailyEngYellowTitle:{
        color:'#D4AF7A',
        marginBottom: 7,
        fontSize: 10,
        textTransform:'uppercase',
        textAlign:'center'
    },
    seperatorStyle:{
        marginBottom:10
    },
    dailyEngAllTitles:{
        // backgroundColor:'green',
        alignItems:'center',
        position:'relative',
        // padding:35,
        paddingVertical: 50,
        paddingHorizontal: 25,
    },
    boxStyleImageTop:{
        position:'absolute',
        left: 0,
        top: 0,
        transform: [{ rotateY: '180deg' }],
    },
    boxStyleImageRight:{
        position:'absolute',
        right: 0,
        top: 0,
        transform: [{ rotateY: '0deg' }],
    },
    boxStyleImageBottom:{
        position:'absolute',
        right: 0,
        bottom: 0,
        transform: [{ rotateY: '180deg' }],
    },
    boxStyleImageLeft:{
        position:'absolute',
        left: 0,
        bottom: 0,
        transform: [{ rotateY: '0deg' }],
    },
    mainAffirmationBox:{
        backgroundColor: 'rgba(20,16,42,0.5)',
        // backgroundColor:'#999',
        padding: 10,
        borderStyle:'solid',
        borderWidth: 1,
        marginBottom:10,
        borderColor:'#D4AF7A',
        borderRadius: 7,
        overflow:'hidden'
    }
});