import MeditationPlayIcon from '@/assets/images/meditation_play_icon.svg';
import SearchInputIcon from '@/assets/images/search_field_icon.svg';
import { categories, meditations } from '@/data/meditations';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function MeditationSearch(){

    const [searchText,setSearchText] = useState('');
    const [activeChipCategory,setActiveChipCategory] = useState('Sleep');

        
    const handleActiveChipCategory = (activeChipval:string) : void => {
        setActiveChipCategory(activeChipval);
        //console.log(activeChipval);
    }

    const filteredMeditations = meditations.filter((itemscard)=> ( itemscard.category == activeChipCategory));

    return(
        <ScrollView contentContainerStyle={styles.scrollContent}>
            
            {/* Top Search Box */}
            <View style={styles.mainSearchBox}>
                <SearchInputIcon width={20} height={20} color="#F1CA93"/>
                <TextInput placeholder="Search meditations" placeholderTextColor="#B8A88A" style={styles.searchInput} onChangeText={setSearchText} value={searchText}/>
                {searchText !== '' && (
                <Pressable onPress={() => setSearchText('')}>
                    <Ionicons name="close-circle" size={18} color="#B8A88A" />
                </Pressable>
                )}
            </View>
            
            {/* Categories Chips list */}
            <View style={styles.mainChipsBox}>
                    
                <Text style={styles.chipBoxTitle}>
                    Nine Categories
                </Text> 
                
                {
                    categories.map(
                        (cats) => (
                            <Pressable key={cats} 
                                onPress={() => handleActiveChipCategory(cats)}
                                style={[
                                    styles.chipSingleCat,
                                    activeChipCategory === cats && styles.chipSingleCatActive
                                ]} 
                                >
                                <Text style={[
                                        styles.chipCatText,
                                        activeChipCategory === cats && styles.chipCatTextActive
                                        ]}>
                                    {cats}
                                </Text>
                            </Pressable>
                        )
                    )
                }
            </View>

            {/* Meditation card ka box ha ya */}

            <View>

                {/* Yahn pr meditation kay saaray card load ho rhay hain */}
                <Text style={[styles.chipBoxTitle,styles.chipBoxTitleSpace]}>{activeChipCategory}</Text> 
                {
                    filteredMeditations.map( (itemscard) => (
                        <Pressable key={itemscard.id} style={styles.meditationSingleCard} onPress={()=> {console.log(itemscard.category)}}>
                            <MeditationPlayIcon width={15} height={15} color="#F1CA93"/>
                            <Text style={styles.meditationCardLargeText}>{itemscard.title}</Text>
                            <Text style={styles.meditationCardSmallText}>{itemscard.duration}</Text>
                        </Pressable>))
                }
                
                {/* Jb koi meditation category ma available nae ha tw ya show hojayee ga */}
                {filteredMeditations.length === 0 && (
                    <Text style={styles.meditationCardSmallText}>
                        No medidation available in this category yet!
                    </Text>
                )}

            </View>

        </ScrollView>
        
    );
}
const styles = StyleSheet.create({
    meditationCardLargeText:{
        color:'#D4AF7A',
        fontSize:16,
        flex:1
    },
    chipBoxTitleSpace:{
        marginBottom:10
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
    chipSingleCatActive:{
        backgroundColor:'#D4AF7A',
    },
    chipCatTextActive:{
        color:'#100B28',
    },
    chipBoxTitle:{
        color:'#FFF',
        fontSize:11,
        textTransform:'uppercase',
        width:'100%'
    },
    chipSingleCat:{
        backgroundColor:'#100B28',
        paddingHorizontal:18,
        paddingVertical:10,
        borderRadius:25,
    },
    mainChipsBox:{
        flexDirection:'row',
        flexWrap:'wrap',
        gap: 8,
        marginBottom:15
    },
    chipCatText:
    {
    color:'#F1CA93',
    fontSize:12
    },
    searchInput:{
        flex: 1,
        color: '#F1CA93',
        fontSize: 15,
    },
    mainSearchBox:{
        backgroundColor: 'rgba(20,16,42,0.5)',
        borderStyle:'solid',
        borderColor:'#D4AF7A',
        borderWidth:1,
        borderRadius:8,
        flexDirection:'row',
        // justifyContent:'center',
        alignItems:'center',
        paddingVertical:5,
        paddingHorizontal:10,
        marginBottom:15
    },
    whiteTxt:{
        color:'#fff'
    },
    scrollContent: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },
})