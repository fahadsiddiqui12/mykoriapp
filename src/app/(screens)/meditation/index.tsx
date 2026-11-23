import SearchFilterIcon from '@/assets/images/meditaion-filter_icon.svg';
import SearchFieldIcon from '@/assets/images/search_field_icon.svg';
import CategoryCards from '@/components/meditation/CategoryCard';
import { meditationsCategoryCards } from '@/data/meditations';
import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function MeditationHome() {
    return(
        <>
            <ScrollView contentContainerStyle={styles.scrollContent}>

                {/* Top Page ka titles box ha ya */}
                <View>
                    <Text style={styles.mainWhiteLargeTitle}>Meditations</Text>
                    <Text style={styles.mainWhiteSmallText}>Explore guided sacred journeys crafted for inner serenity</Text>
                </View>

                {/* Search Box Div */}
                <Pressable style={styles.searchBoxMain} onPress={() => router.navigate('/(screens)/meditation/search')}>
                    <SearchFieldIcon width={20} height={20} color="#F1CA93"/>
                    <Text style={styles.searchBoxPlaceholder}>Search 60+ guided journeys...</Text>
                    <SearchFilterIcon width={20} height={20} color="#CCCCCC"/>
                </Pressable>

                {/* All Meditation Cards List */}
                <View style={styles.categoryMainBox}>
                    {
                        meditationsCategoryCards.map((cat)=>(
                            <CategoryCards key={cat.id} name={cat.name} subtitle={cat.subtitle} icon= {cat.icon}/>
                        ))
                    }
                </View>

            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    categoryMainBox:{
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        rowGap: 12,
        marginTop:10,
    },
    searchBoxMain:{
        borderStyle:'solid',
        borderColor:'rgba(212, 175, 122,0.5)',
        borderWidth:1,
        borderRadius: 7,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:12,
        gap:10,
        marginTop:12,
    },
    searchBoxPlaceholder:{
        color:'#CCCCCC',
        fontSize:13,
        flex:1,
    },
    mainWhiteLargeTitle:{
        color:'#fff',
        fontSize:18
    },
    mainWhiteSmallText:{
        color:'#fff',
        fontSize:14
    },
    scrollContent: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
    }
})