import {useState} from 'react'
import {
  View,
  Text, 
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'


const jobTypes= ["Full-Time","Part-Time","Contaractor",];
const Welcome = () => {

  const router = useRouter();
  const [activejobtype, setactivejobtype] = useState('full-time') 
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Yassin</Text>
        <Text style={styles.welcomeMessage}>Find Your Perfect Job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}> 
            <TextInput
            style={styles.searchInput}
            value=""
            onCharge={()=>{}}
            placeholder="wahat are you looking for?" 
            />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
          <Image
          source={icons.search}
          resizeMode="contain"
          style={styles.searchBtnImage}
          

          />
        </TouchableOpacity>
      </View> 
      
      <View style={styles.tabsContainer} > 
        {/* FlatList component to render the list of job types */}
        <FlatList
        data={jobTypes}
        /* The data array to be rendered (jobTypes = ["Full-Time", "Part-Time", "Contractor"])*/
        renderItem={({item})=> (
          /* Each item (job type) is wrapped in a TouchableOpacity for interactivity */
            <TouchableOpacity
            style={styles.tab(activejobtype, item)}
            onPress={()=>{
              setactivejobtype(item);
              router.push('/search/${item}')
            }}
            >
              <Text style={styles.tabText(activejobtype,item)}>{item}</Text>{/*  //selected with past */} 
            </TouchableOpacity>
        )}
                 KeyExtractor={item => item}
                 ContentContainerStyle={{ columnGap: SIZES.small }}
                 horizontal
                 /*hese three lines ensure that each list item has a unique key (keyExtractor), add spacing between items (contentContainerStyle), and enable horizontal scrolling (horizontal).  */
            />
        
      </View>
    </View>
  )
}

export default Welcome