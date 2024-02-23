import React from 'react'
import { View, Image, Text } from 'react-native'

const AddProduct = () => {
  return (
    <View>
      <View>
        <Image source={require('../../assets/voltar.svg')}/>
        <Text>Adicionar produto</Text>
      </View>
    </View>
  )
}

export default AddProduct
