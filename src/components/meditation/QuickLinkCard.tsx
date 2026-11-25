import FavoriteIcon from '@/assets/images/mediation_favorites_icon.svg';
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function QuickLinkCard(){
    return(
        <>
            <Pressable style={styles.quickLinkCardPrssBtn}>
                <View style={styles.quickIconBox}>
                    <FavoriteIcon width={20} height={20} color="#2C2107"/>
                </View>
                <View style={styles.quickLinkCardTitle}>
                    <Text style={styles.quickWhiteLargeTitle}>Favorites</Text>
                    <Text style={styles.quickWhiteSmallTitle}>6 saved</Text>
                </View>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    quickWhiteLargeTitle:{
        color:'#fff',
        fontSize:18,
    },
    quickIconBox:{
        width:50,
        height:50,
        backgroundColor:'#F1CA93',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:10
    },
    quickLinkCardPrssBtn:{
        backgroundColor:'rgba(17, 12, 42,0.8)',
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'rgba(212, 175, 122,0.5)',
        borderRadius:7,
        padding:8,
    }
})