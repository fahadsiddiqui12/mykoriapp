import { Pressable, StyleSheet, Text, View } from "react-native";

import { SvgProps } from 'react-native-svg';

type QuickLinkProps = {   
    name: string,
    subtitle: string,
    icon: React.FC<SvgProps>;
};

export default function QuickLinkCard({name,subtitle,icon}: QuickLinkProps){
    const Icon = icon;
    return(
        <>
            <Pressable style={styles.quickLinkCardPrssBtn}>
                <View style={styles.quickIconBox}>
                    <Icon width={20} height={20} color="#2C2107"/>
                </View>
                <View>
                    <Text style={styles.quickWhiteLargeTitle}>{name}</Text>
                    <Text style={styles.quickWhiteSmallTitle}>{subtitle}</Text>
                </View>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    quickWhiteSmallTitle:{
        color:'#fff',
        fontSize:12,
    },
    quickWhiteLargeTitle:{
        color:'#fff',
        fontSize:16,
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
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        width:'48%'
    }
})