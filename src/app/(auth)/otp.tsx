import { useEffect, useRef, useState } from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';



export default function LoginScreen() {
    
  // Each OTP box has its own state
  const [digit1, setDigit1] = useState('');
  const [digit2, setDigit2] = useState('');
  const [digit3, setDigit3] = useState('');
  const [digit4, setDigit4] = useState('');

  const input1 = useRef<TextInput>(null);
  const input2 = useRef<TextInput>(null);
  const input3 = useRef<TextInput>(null);
  const input4 = useRef<TextInput>(null);

  // Run when Verify button is clicked
  const handleVerify = () => {

    // Combine all 4 numbers
    const otp = digit1 + digit2 + digit3 + digit4;

    console.log(otp);

    // Check if all boxes are filled
    if (otp.length !== 4) {
      Alert.alert(
        'Error',
        'Please enter the complete OTP.'
      );

      return;
    }


    // Temporary OTP for practice
    if (otp === '1234') {

      Alert.alert(
        'Success',
        'OTP verified successfully.'
      );

    } else {

      Alert.alert(
        'Error',
        'Invalid OTP.'
      );

    }

  };


  useEffect(() => {
    setTimeout(() => {
      input1.current?.focus();
    }, 300);

  }, []);

  return (
  
    <KeyboardAvoidingView
      style={styles.keyboardView}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
        <Image source={require('@/assets/images/new_bg_app.png')} style={styles.bgimg}/>
        
            <View style={styles.mainLoginBox}>

                <View style={styles.logoFormBox}>
                  <Image source={require('@/assets/images/login-logo.png')} style={styles.logo}/>
        
                  <View>

                        <Text style={styles.DontText}>
                            Enter the 4-digit verification code sent to your email.
                        </Text>

                            <View style={styles.otpRow}>

                                    {/* Field 1 */}
                                    <TextInput
                                    ref={input1}
                                    style={styles.otpInput}
                                    keyboardType="number-pad"
                                    maxLength={1}
                                    value={digit1}
                                    onChangeText={(value) => {
                                      setDigit1(value);
                                        if (value) {
                                          input2.current?.focus();
                                        }
                                      }}
                                    />

                                    {/* Field 2 */}

                                    <TextInput
                                    ref={input2}
                                    style={styles.otpInput}
                                    keyboardType="number-pad"
                                    maxLength={1}
                                    value={digit2}
                                    onChangeText={(value) => {
                                      setDigit2(value);
                                        if (value) {
                                          input3.current?.focus();
                                        }
                                      }}
                                    onKeyPress={({ nativeEvent }) => {
                                          if (
                                            nativeEvent.key === 'Backspace' &&
                                            digit2 === ''
                                          ) {
                                            input1.current?.focus();
                                          }
                                        }}
                                    />

                                    {/* Field 3 */}

                                    <TextInput
                                    ref={input3}
                                    style={styles.otpInput}
                                    keyboardType="number-pad"
                                    maxLength={1}
                                    value={digit3}
                                    onChangeText={(value) => {
                                        setDigit3(value);

                                        if (value) {
                                          input4.current?.focus();
                                        }
                                      }}
                                      onKeyPress={({ nativeEvent }) => {
                                          if (
                                            nativeEvent.key === 'Backspace' &&
                                            digit3 === ''
                                          ) {
                                            input2.current?.focus();
                                          }
                                        }}
                                    />

                                    {/* Field 4 */}

                                    <TextInput
                                    ref={input4}
                                    style={styles.otpInput}
                                    keyboardType="number-pad"
                                    maxLength={1}
                                    value={digit4}
                                    onChangeText={(forthNumber)=>{
                                      setDigit4(forthNumber);
                                      }}
                                      onKeyPress={({ nativeEvent }) => {
                                        if (
                                          nativeEvent.key === 'Backspace' &&
                                          digit4 === ''
                                        ) {
                                          input3.current?.focus();
                                        }

                                      }}
                                    />

                                </View>


                                {/* VERIFY BUTTON */}

                                <Pressable
                                    style={styles.solidYellowButton}
                                    onPress={handleVerify}
                                >

                                    <Text style={styles.buttonText}>
                                    Verify OTP
                                    </Text>

                                </Pressable>

                  </View>
                  
                </View>
              

            </View>
      </ScrollView>  
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  mainLoginBox:{
    justifyContent: 'space-around',
    gap: 20,
    height: '100%',
    width: '100%',
    // backgroundColor: 'green',
    // flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  DontText:{
    color: '#F7CE85',
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 20,
  },
  logoFormBox:{
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 10,
    // height: '100%',
    // backgroundColor: '#5a01ff'
  },
  logoFormBottom:{
    // justifyContent: 'center',
    alignItems: 'center',
    // flex: 0,
    // backgroundColor: 'yellow'

  },
  bgimg:{
    // flex : 1,
    position : 'absolute',
    top: 0,
    left: 0,
    resizeMode: 'stretch',
  },
  logo:{
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#FFF0DB',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 13,
    backgroundColor: '#FFF0DB',
  },
  solidYellowButton: {
    height: 50,
    backgroundColor: '#F1CA93',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#F1CA93',
  },
  buttonText: {
    color: '#2C2107',
    fontSize: 14,
    fontWeight: '600',
  },
  otpInput:{
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: '#F1CA93',
    borderRadius: 10,
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
    backgroundColor: '#F1CA93',
    textAlign: 'center',
  },
   verifyButton: {
    height: 52,
    backgroundColor: '#227db7',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  otpRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 20,
  }
});