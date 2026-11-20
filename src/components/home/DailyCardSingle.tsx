import { Image, StyleSheet, Text, View } from 'react-native';

export default function DailyCardSingle () {
    return(
        <>
            <View style={styles.dailyCardMainBox}>

                <View style={styles.dailyCardSingle}>

                    <View style={styles.daliyCardImage}>
                        <Image source={require('@/assets/images/daily-card-image.png')} style={styles.cardSingleImage}/>
                    </View>

                    <View style={styles.dailyCardDetails}>
                        <Text style={styles.dailyEngYellowTitle}>Daily energy reflection</Text>
                        <Text style={styles.dailyCardLargeTitle}>The Star</Text>
                        <Text style={styles.dailyEngQuote}>"The cosmic alignment today favors introspection. Authored for the date, your energy is a 
                            quiet flame, steady and bright. Nurture your inner peace as you navigate the day's currents."</Text>
                    </View>

                </View>

            </View>
        </>
    );
}

const styles = StyleSheet.create({
    dailyCardDetails:{
        width:'65%'
    },
    daliyCardImage:{
        width:'35%'
    },
    dailyCardSingle:{
        flexDirection:'row',
        alignItems:'center',
        gap:10
    },
    dailyEngYellowTitle:{
        color:'#D4AF7A',
        textTransform:'uppercase',
        fontSize: 10
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
    cardSingleImage:{
        width:'100%',
        height: 180,
        resizeMode:'stretch'
    },
    dailyCardMainBox:{
         backgroundColor: 'rgba(20,16,42,0.5)',
        // backgroundColor:'#999',
        padding: 15,
        borderStyle:'solid',
        borderWidth: 1,
        marginBottom:10,
        borderColor:'#D4AF7A',
        borderRadius: 7,
        overflow:'hidden'
    }
});