import MeditationPlayIcon from '@/assets/images/meditation_play_icon.svg';
import { Pressable, StyleSheet, Text } from 'react-native';

// Batao card ko kya kya chahiye
type MeditationCardProps = {
    title: string;
    duration: string;
};

export default function MeditationCard({ title, duration }: MeditationCardProps) {
    return (
        <Pressable style={styles.meditationSingleCard}>
            <MeditationPlayIcon width={15} height={15} color="#F1CA93" />
            <Text style={styles.meditationCardLargeText}>{title}</Text>
            <Text style={styles.meditationCardSmallText}>{duration}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    meditationCardLargeText:{
        color:'#D4AF7A',
        fontSize:16,
        flex:1
    },
    meditationCardSmallText:{
        color:'#fff',
        fontSize:12
    },
    meditationSingleCard:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#100B28',
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'#D4AF7A',
        borderRadius:10,
        padding:13,
        marginBottom:10,
        gap:10
    },
});