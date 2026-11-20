import { StyleSheet, Text, View } from 'react-native';
import BoxStyleImageTwo from '@/assets/images/daily-box-style-img-two.svg';
import BoxStyleImage from '@/assets/images/daily-box-style-img.svg';
import TitleSeperator from '@/assets/images/daily-title-seperator.svg';

export default function DailyEnergyReflection() {
  return (
    
    <View style={styles.dailyEnergyReflectionMainBox}>

        <View style={styles.dailyEngAllTitles}>
            <BoxStyleImage width={70} height={70} style={styles.boxStyleImageTop} color="#F1CA93"/>
            <BoxStyleImage width={70} height={70} style={styles.boxStyleImageRight} color="#F1CA93"/>
            <BoxStyleImageTwo width={70} height={70} style={styles.boxStyleImageBottom} color="#F1CA93"/>
            <BoxStyleImageTwo width={70} height={70} style={styles.boxStyleImageLeft} color="#F1CA93"/>
                <Text style={styles.dailyEngYellowTitle}>Daily energy reflection</Text>
                <TitleSeperator width={176} height={7} color="#F7CE85" style={styles.seperatorStyle}/>
                <Text style={styles.dailyEngQuote}>"The cosmic alignment today favors introspection. Authored for the date, your energy is a 
                    quiet flame, steady and bright. Nurture your inner peace as you navigate the day's currents."</Text>
        </View>

    </View>

  );
}

const styles = StyleSheet.create({
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
        dailyEngQuote:{
            color:'#E9E1DB',
            textTransform:'uppercase',
            textAlign:'center',
            fontSize:12
        },
        dailyEngAllTitles:{
            // backgroundColor:'green',
            alignItems:'center',
            position:'relative',
            padding:25
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
        dailyEnergyReflectionMainBox:{
        backgroundColor: 'rgba(20,16,42,0.5)',
        // backgroundColor:'#999',
        padding: 10,
        marginBottom:10,
        borderStyle:'solid',
        borderWidth: 1,
        borderColor:'#D4AF7A',
        borderRadius: 7,
        overflow:'hidden'
    }
})