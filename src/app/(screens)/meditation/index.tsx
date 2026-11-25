import FeaturedLargeIcon from '@/assets/images/mediation_feature_icon.svg';
import FeaturedPlayIcon from '@/assets/images/mediation_feature_icon_play.svg';
import SearchFilterIcon from '@/assets/images/meditaion-filter_icon.svg';
import SearchFieldIcon from '@/assets/images/search_field_icon.svg';
import CategoryCards from '@/components/meditation/CategoryCard';
import QuickLinkCard from '@/components/meditation/QuickLinkCard';
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

                {/*  Featured Box */}
                <Pressable style={styles.mainFeaturedBox}>
                    <View style={styles.featuredLargeIconBox}>
                        <FeaturedLargeIcon width={30} height={30} color="#2C2107"/>
                    </View>
                    <View style={styles.featuredTitlesBox}>
                            <View style={styles.featuredAlltitles}>
                                <Text style={styles.featuredWhiteTitle}>Energy Reset</Text>
                                <Text style={styles.featuredTag}>FEATURED</Text>
                            </View>
                        <Text style={styles.featuredWhiteSMTitle}>
                            Quick cosmic realignment • 7 min
                        </Text>
                    </View>
                    <View style={styles.featuredPlayBtn}>
                        <FeaturedPlayIcon width={20} height={20} color="#D9B36C"/>
                    </View>
                </Pressable>

                {/* QuickLink */}

                <QuickLinkCard/>

            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    featuredAlltitles:{
        flexDirection:'row',
        flexWrap:'wrap',
        gap:5
    },
    featuredTitlesBox:{
        flex:1
    },
    featuredPlayBtn:
    {
        width:50,
        height:50,
        backgroundColor:'#2D293E',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25
    },
    featuredTag:{
        borderRadius:7,
        backgroundColor:'rgba(217, 179, 108,0.2)',
        color:'#D9B36C',
        fontSize:10,
        paddingVertical:4,
        paddingHorizontal:10
    },
    featuredWhiteTitle:{
        color:'#fff',
        fontSize:15
    },
    featuredWhiteSMTitle:{
        color:'#fff',
        fontSize:12
    },
    featuredLargeIconBox:
    {
        backgroundColor:'#F1CA93',
        width:60,
        height:60,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    mainFeaturedBox:{
        backgroundColor:'rgba(17, 12, 42,0.8)',
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'rgba(212, 175, 122,0.5)',
        borderRadius:7,
        padding:8,
        flexDirection:'row',
        gap:10,
        justifyContent:'space-between',
        alignItems:'center'
    },
    categoryMainBox:{
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        rowGap: 12,
        marginTop:10,
        marginBottom:10
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