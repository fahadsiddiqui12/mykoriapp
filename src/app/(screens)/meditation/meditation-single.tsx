import SingleMainPlayerBox from '@/components/home/SingleMainPlayerBox';
import BottomMenu from '@/components/layout/BottomMenu';
import { Image, ScrollView, StyleSheet } from 'react-native';


export default function MeditationSingle() {
  return (
    <>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Full Page Background Image */}
        <Image source={require('@/assets/images/main_bg_img.png')} style={styles.bgimg}/>

        
        <SingleMainPlayerBox/>

        <BottomMenu/>
      </ScrollView>

    </>
  );
}

const styles = StyleSheet.create({
  
  bgimg: {
    position: 'absolute',
    top: 0,
    left: 0,
    resizeMode: 'stretch',
  },
  scrollContent: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
