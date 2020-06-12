import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, SafeAreaView, ScrollView, Animated, StatusBar } from 'react-native';

export default function App() {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#F2F2E8" barStyle="dark-content" />
      <Animated.View 
        style={[styles.header, 
        { 
          height: scrollY.interpolate({ inputRange: [10, 160, 185], outputRange: [110, 20, 0], extrapolate: 'clamp'}),
          opacity: scrollY.interpolate({ inputRange: [1, 75, 170], outputRange: [1, 1, 0], extrapolate: 'clamp'}) 
        }
        ]}
      >
        <Animated.Image 
          source={require('./assets/hamburguer.png')} 
          style={{height: scrollY.interpolate({inputRange: [0, 120], outputRange: [ 36, 20 ],extrapolate: 'clamp' }), 
          width: 36}} 
          resizeMode="contain"
        />
        <Animated.Image 
          source={require('./assets/vegan.png')} 
          style={{height: scrollY.interpolate({inputRange: [0, 120],outputRange: [ 80, 45 ],extrapolate: 'clamp'}), 
          width: 230, marginLeft: -50}} 
          resizeMode="contain" 
        />
        {/* RIGHT SIDE ICON: */}
        <View></View>

      </Animated.View>

      <ScrollView 
      scrollEventThrottle={16}
      onScroll={Animated.event([{
        nativeEvent: {
          contentOffset: { y: scrollY }
        },
      }],
      { useNativeDriver: false }
      )}>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F2F2E8',
    // backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    borderBottomWidth: 2,
    borderBottomColor: "#FFF",
  },
  box: {
    height : 300,
    backgroundColor: '#f9f9f4',
    margin: 7,
    borderRadius: 5,
  }
});
