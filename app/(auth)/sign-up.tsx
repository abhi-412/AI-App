import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
import { useDispatch, useSelector } from 'react-redux'
import { signUpUser } from '@/context/userContext/userSlice'
import { AppDispatch } from '@/store/store'


const SignUp = () => {

  const dispatch = useDispatch<AppDispatch>();

  const [form,setForm] =useState({
    userName:"",
    email: "",
    password:"",
  })

  const [submitting, setSubmitting] = useState(false);
  const userState = useSelector((state:any)=>state.auth)
  // console.log(userState);
  


  const submit = async () => {
    setSubmitting(true); // Start the submitting state
    try {
      const res = await dispatch(signUpUser(form)); // Dispatch the signUpUser action
      if (res.meta.requestStatus === "fulfilled") { // Check if the request was successful
        router.navigate("/home"); // Navigate to the home page on success
      } else {
        // console.log(res);
        
        // If the request failed, handle the error
        Alert.alert("Error", res.payload); // Show an alert with the error message
      }
    } catch (error) {
      // Handle any unexpected errors that might occur during the dispatch
      // console.error("An error occurred:", error); // Log the error for debugging
      Alert.alert("Error", "An unexpected error occurred. Please try again."); // Show a generic error alert
    } finally {
      setSubmitting(false); // Reset the submitting state
    }
  };



  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
          <View className='w-full justify-center min-h-[83vh] px-4 my-6' >
              <Image
                source={images.logo}
                resizeMode='contain'
                className='w-[115px] h-[35px]'
              />
              <Text className='text-white font-psemibold text-2xl mt-8 mb-8'>Sign Up to Aura</Text>
              <FormField 
                title="UserName"
                value={form.userName}
                handleChangeText={(u:string)=>setForm({...form,userName:u})}
                keyboardType="text" 
              /> 

            <FormField 
                title="Email"
                value={form.email}
                handleChangeText={(e:string)=>setForm({...form,email:e})}
                keyboardType="email-address" 
              /> 

              <FormField 
                title="Password"
                value={form.password}
                handleChangeText={(p:string)=>setForm({...form,password:p})}
              /> 

              <CustomButton 
                title="Sign In"
                handlePress={submit}
                containerStyles="mt-4"
                isLoading={submitting}
              />

              <View>
                <Text className='text-white font-pmedium text-center mt-4'>Already have an account?{' '}
                  <Link className='text-secondary-200 font-psemibold' href="/sign-in">Sign in</Link>
                </Text>
              </View>
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp