import {useState} from 'react';
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome, welcome} from '../components';
import { ImageBackground } from 'react-native-web';



const Home = () => {
  
    const router = useRouter();
    return(
        // SafeAreaView component is used to render content within the safe area boundaries of a device.
        <SafeAreaView style={{flex:1, ImageBackgroundColor: COLORS.lightWhite}}>
            
            <Stack.Screen // Stack.Screen is a component from expo-router used for navigation and to display content.
                options={{
                    // Setting the background color of the header.
                    headerStyle: { ImageBackgroundColor: COLORS.lightWhite},
                    // Disabling the shadow under the header for a flat design look.
                    headerShadowVisible: false,
                    //headerLeft defines a component to render on the left side of the header.
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
                    ),
                    // // headerRight defines a component to render on the right side of the header.
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>
                    ),
                    // Setting the header title to an empty string to effectively remove it.
                    headerTitle: ""
                }}
            />
             <ScrollView showsVerticalScroLLIndicator={false}>
                <View
                style={{
                    flex:1,
                    padding: SIZES.medium
                }}
                >
                    <Welcome
                    
                    />
                    <Popularjobs/>
                    <Nearbyjobs/>
                    
                </View>
             </ScrollView>
        </SafeAreaView>
    )
}

export default Home;