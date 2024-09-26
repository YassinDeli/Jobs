import React from 'react'
import { View, Text,TouchableOpacity,ActivityIndicator } from 'react-native'
import {useState} from 'react'
import { useRouter } from 'expo-router'

import styles from './popularjobs.style'
import { COLORS,SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import { FlatList } from 'react-native'

const Popularjobs = () => {

  const router = useRouter();
  const isLoading = false;
  const error = false;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary}/>
        ) : error ? (
          <Text>Somthing want wrong !</Text>
        ) : (
          <FlatList
             data={[1,2,3,4,5,6]}
             renderItem={({ item }) => (
              <PopularJobCard
              item={item}
              />
             )}
             
             KeyExtractor={item => item?.job_id}
             ContentContainerStyle={{ columnGap: SIZES.medium }}
             horizontal
          />
        )
      }
      
         
      </View>
    </View>
  )
}

export default Popularjobs