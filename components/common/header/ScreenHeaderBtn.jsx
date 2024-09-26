import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity, Image  } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl, dimension, handLePress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handLePress}>
      <Image
        source= {iconUrl}
       resizeMode="cover"
       style={styles.btnImg(dimension)}
       
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn