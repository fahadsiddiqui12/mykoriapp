import CurveIconOne from '@/assets/images/dashboard_op_curve_icon1.svg';
import CurveIconTwo from '@/assets/images/dashboard_op_curve_icon2.svg';
import IconOne from '@/assets/images/dashboard_op_icon1.svg';
import IconTwo from '@/assets/images/dashboard_op_icon2.svg';
import IconThree from '@/assets/images/dashboard_op_icon3.svg';
import IconFour from '@/assets/images/dashboard_op_icon4.svg';
import IconFive from '@/assets/images/dashboard_op_icon5.svg';
import IconSix from '@/assets/images/dashboard_op_icon6.svg';
import IconSeven from '@/assets/images/dashboard_op_icon7.svg';
import IconEight from '@/assets/images/dashboard_op_icon8.svg';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function DashbaoardDifferentOptions ()
{
    const router = useRouter();
    return(
        <>

            <View style={styles.mainDiffOptionsBox}>

                {/* OP 1 */}
                <Pressable style={styles.opTextImageBox}>
                    <View style={styles.diffOpImageBox}>
                        <CurveIconOne width={25} height={25} color="#F1CA93" style={styles.curveIconOne}/>
                            <IconOne width={40} height={40} color="#F1CA93" style={styles.opMainIcon}/>
                        <CurveIconTwo width={25} height={25} color="#F1CA93" style={styles.curveIconTwo}/>
                    </View>
                    <View style={styles.diffOpTxt}>
                        <Text style={styles.diffOpYellowText}>Today’s Journey</Text>
                    </View>
                </Pressable>

                {/* OP 2 */}
                <Pressable style={styles.opTextImageBox}>
                    <View style={styles.diffOpImageBox}>
                        <CurveIconOne width={25} height={25} color="#F1CA93" style={styles.curveIconOne}/>
                            <IconTwo width={40} height={40} color="#F1CA93" style={styles.opMainIcon}/>
                        <CurveIconTwo width={25} height={25} color="#F1CA93" style={styles.curveIconTwo}/>
                    </View>
                    <View style={styles.diffOpTxt}>
                        <Text style={styles.diffOpYellowText}>Frequency</Text>
                    </View>
                </Pressable>

                {/* OP 3 */}

                <Pressable style={styles.opTextImageBox}>
                    <View style={styles.diffOpImageBox}>
                        <CurveIconOne width={25} height={25} color="#F1CA93" style={styles.curveIconOne}/>
                            <IconThree width={40} height={40} color="#F1CA93" style={styles.opMainIcon}/>
                        <CurveIconTwo width={25} height={25} color="#F1CA93" style={styles.curveIconTwo}/>
                    </View>
                    <View style={styles.diffOpTxt}>
                        <Text style={styles.diffOpYellowText}>Spirit Guide</Text>
                    </View>
                </Pressable>

                {/* OP 4 */}

                <Pressable style={styles.opTextImageBox}>
                    <View style={styles.diffOpImageBox}>
                        <CurveIconOne width={25} height={25} color="#F1CA93" style={styles.curveIconOne}/>
                            <IconFour width={40} height={40} color="#F1CA93" style={styles.opMainIcon}/>
                        <CurveIconTwo width={25} height={25} color="#F1CA93" style={styles.curveIconTwo}/>
                    </View>
                    <View style={styles.diffOpTxt}>
                        <Text style={styles.diffOpYellowText}>Moon Phase</Text>
                    </View>
                </Pressable>

                {/* OP 5 */}
                <Pressable style={styles.opTextImageBox} onPress={() => router.navigate('/(screens)/meditation')}>
                    <View style={styles.diffOpImageBox}>
                        <CurveIconOne width={25} height={25} color="#F1CA93" style={styles.curveIconOne}/>
                            <IconFive width={40} height={40} color="#F1CA93" style={styles.opMainIcon}/>
                        <CurveIconTwo width={25} height={25} color="#F1CA93" style={styles.curveIconTwo}/>
                    </View>
                    <View style={styles.diffOpTxt}>
                        <Text style={styles.diffOpYellowText}>Meditate</Text>
                    </View>
                </Pressable>

                {/* OP 6 */}
                <Pressable style={styles.opTextImageBox}>
                    <View style={styles.diffOpImageBox}>
                        <CurveIconOne width={25} height={25} color="#F1CA93" style={styles.curveIconOne}/>
                            <IconSix width={40} height={40} color="#F1CA93" style={styles.opMainIcon}/>
                        <CurveIconTwo width={25} height={25} color="#F1CA93" style={styles.curveIconTwo}/>
                    </View>
                    <View style={styles.diffOpTxt}>
                        <Text style={styles.diffOpYellowText}>Tarot</Text>
                    </View>
                </Pressable>

                {/* OP 7 */}
                <Pressable style={styles.opTextImageBox}>
                    <View style={styles.diffOpImageBox}>
                        <CurveIconOne width={25} height={25} color="#F1CA93" style={styles.curveIconOne}/>
                            <IconSeven width={40} height={40} color="#F1CA93" style={styles.opMainIcon}/>
                        <CurveIconTwo width={25} height={25} color="#F1CA93" style={styles.curveIconTwo}/>
                    </View>
                    <View style={styles.diffOpTxt}>
                        <Text style={styles.diffOpYellowText}>Journal</Text>
                    </View>
                </Pressable>

                {/* OP 8 */}
                <Pressable style={styles.opTextImageBox}>
                    <View style={styles.diffOpImageBox}>
                        <CurveIconOne width={25} height={25} color="#F1CA93" style={styles.curveIconOne}/>
                            <IconEight width={40} height={40} color="#F1CA93" style={styles.opMainIcon}/>
                        <CurveIconTwo width={25} height={25} color="#F1CA93" style={styles.curveIconTwo}/>
                    </View>
                    <View style={styles.diffOpTxt}>
                        <Text style={styles.diffOpYellowText}>Explore</Text>
                    </View>
                </Pressable>

            </View>

        </>
    );
}
const styles = StyleSheet.create({
    diffOpYellowText:{
        color:'#D4AF7A',
        fontSize: 12,
        textTransform:'uppercase',
        textAlign:'center'
    },
    opMainIcon:{
        // backgroundColor:'yellow',
    },
    curveIconOne:{
        position:'absolute',
        top:5,
        right:5,
    },
    curveIconTwo:{
        position:'absolute',
        left:5,
        bottom:5,
    },
    diffOpImageBox:{
        borderStyle:'solid',
        borderWidth: 1,
        borderColor:'#D4AF7A',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        borderRadius: 5,
        height:90,
        marginBottom:8,
    },
    mainDiffOptionsBox:{
        flexDirection:'row',
        justifyContent:'center',
        // alignItems:'center',
        flexWrap:'wrap',
        gap:8,
        marginVertical:10
    },
    opTextImageBox:{
        // flexDirection:'column',
        // flexWrap:'wrap',
        // backgroundColor:'yellow',
        // justifyContent:'center',
        // alignItems:'center',
        width:'22%',
    }
});