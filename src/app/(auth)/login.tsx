import { useState } from 'react';

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

import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';


export default function LoginScreen() {

  // Store what the user types
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Runs when Login button is pressed
  const handleLogin = () => {

    // Check empty fields
    if (!email || !password) {
      Alert.alert(
        'Error',
        'Please enter your email and password.'
      );

      return;
    }


    // Temporary login check
    if (
      email === 'admin@test.com' &&
      password === '123'
    ) {

      // Login successful
      router.replace('/(app)/(tabs)');
      //router.push('/(onboarding)/step-one');

    } else {

      // Login failed
      Alert.alert(
        'Login Failed',
        'Invalid email or password.'
      );

    }
  };


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
        
                  <View style={styles.formParnetBox}>

                      <View style={styles.formFieldCol}>

                          {/* Email Address field */}
                          <Text style={styles.formText}>
                            Email
                          </Text>
                          <TextInput
                            placeholder="Enter your email address"
                            placeholderTextColor="#6B6878"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                            style={styles.input}
                          />
                      </View>
                      

                      {/* Password Field */}

                      <View style={styles.formFieldCol}>
                          <Text style={styles.formText}>
                            Password
                          </Text>
                          <TextInput
                            placeholder="Password"
                            placeholderTextColor="#6B6878"
                            secureTextEntry={!showPassword}
                            value={password}
                            onChangeText={setPassword}
                            style={styles.input}
                          />
                          <Pressable
                              style={styles.eyeButton}
                              onPress={() => setShowPassword(!showPassword)}
                            >
                              <Ionicons
                                name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                                size={22}
                                color="#6B6878"
                              />
                            </Pressable>

                          <Pressable style={styles.buttonForget} onPress={() => router.push('/(auth)/otp')}>
                            <Text style={styles.forgetText}>
                              Forgot password?
                            </Text>
                          </Pressable>
                      </View>

                      {/* Login Button */}
                      <View style={styles.formFieldCol}>
                          <Pressable
                            style={styles.solidYellowButton}
                            onPress={handleLogin}
                          >
                            <Text style={styles.buttonText}>
                              Sign In
                            </Text>
                          </Pressable>

                      </View>

                  </View>
                  
              </View>
              
              <View style={styles.logoFormBottom}>
                <Image source={require('@/assets/images/form-sep-line.png')} style={styles.formDivider}/>
                  <View style={styles.mainBtmText}>
                    <Text style={styles.DontText}>Don't have an account?</Text> 
                    <Pressable onPress={() => console.log('Create account pressed')}>
                      <Text style={styles.createAccountText}>Create one</Text>
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
  txtColor:{
    color: '#fff',
  },
  mainBtmText:{
    flexDirection: 'row',
    gap: 2,
  },
  keyboardView: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  buttonForget:{
    color: '#F7CE85',
    fontSize: 14,
  },
  DontText:{
    color: '#F7CE85',
    fontSize: 13,
  },
  createAccountText:{
    color: '#F7CE85',
    fontSize: 13,
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
  formDivider:{
    height: 8,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  formText:{
    color:'#FFECD0',
    marginBottom: 5,
    fontSize: 13,
  },
  formFieldCol:{
    width: '100%',
    marginBottom:10,
  },
  formParnetBox:{
    padding: 5,
    width: '85%',
  },
  eyeButton: {
    position: 'absolute',
    right: 5,
    top: 5,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
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
  background:{
    flex: 1,
    width: '100%',
    height:'100%',
  },
  forgetText :{
    fontSize: 12,
    textAlign: 'right',
    color: '#FFECD0',
    marginTop: 5,
  },
  container: {
    justifyContent: 'center',
    padding: 25,
    // backgroundColor: '#fff',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
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

});