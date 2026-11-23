import { categories } from '@/data/meditations';
import { Pressable, StyleSheet, Text, View } from 'react-native';
type CategoryChipsProps = {
    active: string;
    onSelect: (category: string) => void;
};
export default function CategoryChips({ active,  onSelect }: CategoryChipsProps)
{
    return(
        <>
{/* Categories Chips list */}
            <View style={styles.mainChipsBox}>
                    
                <Text style={styles.chipBoxTitle}>
                    Nine Categories
                </Text> 
                
                {
                    categories.map(
                        (cats) => (
                            <Pressable key={cats} 
                                onPress={() => onSelect(cats)}
                                style={[
                                    styles.chipSingleCat,
                                    active === cats && styles.chipSingleCatActive
                                ]} 
                                >
                                <Text style={[
                                        styles.chipCatText,
                                        active === cats && styles.chipCatTextActive
                                        ]}>
                                    {cats}
                                </Text>
                            </Pressable>
                        )
                    )
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    chipCatText:
    {
        color:'#F1CA93',
        fontSize:12
    },
    chipCatTextActive:{
        color:'#100B28',
    },
    chipSingleCat:{
        backgroundColor:'#100B28',
        paddingHorizontal:18,
        paddingVertical:10,
        borderRadius:25,
    },
    chipSingleCatActive:{
        backgroundColor:'#D4AF7A',
    },
    chipBoxTitle:{
        color:'#FFF',
        fontSize:11,
        textTransform:'uppercase',
        width:'100%'
    },
    mainChipsBox:{
        flexDirection:'row',
        flexWrap:'wrap',
        gap: 8,
        marginBottom:15
    },
})