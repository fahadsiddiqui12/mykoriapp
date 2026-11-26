import MeditationCard from '@/components/meditation/MeditationCard';
import { meditations } from '@/data/meditations';
import { Stack, useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text } from "react-native";

export default function MedicationCategory() {
    const {name} = useLocalSearchParams<{ name: string }>();

    const filteredMeditations = meditations.filter(
            (itemCat) =>  itemCat.category == name 
    )
    

    return(
        <ScrollView contentContainerStyle={styles.scrollContent}>
             <Stack.Screen options={{ title: name }} />
             {
                filteredMeditations.map(
                    (item) => (
                        <MeditationCard key={item.id} title={item.title} duration={item.duration}/>
                    )
                )
            }
            {
                filteredMeditations.length === 0 && (
                    <Text style={styles.whiteText}>No meditation available in this category yet!</Text>
                )
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    whiteText:{
        color:'#fff',
        fontSize:15
    },
    scrollContent:{
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
    }
})