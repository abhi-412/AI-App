import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link } from 'expo-router'

const SignIn = () => {

  const [form,setForm] =useState({
    email: "",
    password:"",
  })

  const [submitting, setSubmitting] = useState(false)

  const submit = ()=>{

  } 

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
          <View className='w-full justify-center min-h-[83vh] px-4 my-6' >
              <Image
                source={images.logo}
                resizeMode='contain'
                className='w-[115px] h-[35px]'
              />
              <Text className='text-white font-psemibold text-2xl mt-8 mb-8'>Login to Aura</Text>
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
                <Text className='text-white font-pmedium text-center mt-4'>Don't have an account?{' '}
                  <Link className='text-secondary-200 font-psemibold' href="/sign-up">Sign up</Link>
                </Text>
              </View>
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn