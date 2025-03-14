import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from "@/constants"; 

const FormField = ({title,value,placeholder,handleChangeText,otherStyles,...props}) => {
    const [showPassword,setShowPassword] = useState(false)
  
    return (
    <View className={`my-3 ${otherStyles}`}>
      <Text className='text-base text-gray-100 font-pmedium mb-1'>{title}</Text>
        <View className='w-full h-16 border-2 border-black-200 bg-black-100 rounded-2xl px-4 focus:border-secondary items-center flex-row'>
            <TextInput 
            className='flex-1 text-white font-psemibold text-base'
            value={value}
            placeholder={placeholder}
            onChangeText={handleChangeText}
            placeholderTextColor="#7b7b8b"
            secureTextEntry={title==="Password" && !showPassword}
            />

            {title==="Password" && (
                <TouchableOpacity
                onPress={()=>{
                    setShowPassword(!showPassword)
                }}
                >
                    <Image
                        source={showPassword ? icons.eye : icons.eyeHide}
                        resizeMode='contain'
                        className='w-6 h-6'
                    />
                </TouchableOpacity>
            )}
        </View>
    </View>
  )
}

export default FormField