import { Pressable, StyleSheet, Text, View } from "react-native";
import { SvgProps } from 'react-native-svg';

type CategoryCardsProps = {   
    name: string,
    subtitle: string,
    icon: React.FC<SvgProps>;
};

export default function CategoryCards({name,subtitle,icon}: CategoryCardsProps){
    const Icon = icon;
    return(
        <>
            <Pressable style={styles.categoryPressBox}>
                <View style={styles.categoryIconBox}>
                    <Icon width={20} height={20} color="#2C2107"/>
                </View>
                <Text style={styles.categoryLargeText}>{name}</Text>
                <Text style={styles.categorySmallText}>{subtitle}</Text>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    categorySmallText:{
        color:'#fff',
        fontSize:13
    },
    categoryLargeText:{
        color:'#fff',
        fontSize:16,
        marginBottom:5
    },
    categoryIconBox:{
        width:50,
        height:50,
        backgroundColor:'#F1CA93',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:10
    },
    categoryPressBox:{
        backgroundColor:'rgba(17, 12, 42,0.8)',
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'rgba(212, 175, 122,0.5)',
        borderRadius:7,
        padding:10,
        width:'48%',
    }
});