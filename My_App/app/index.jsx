import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import Kay from "@/assets/images/iced-coffee.png";

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Kay}
        resizeMode='cover'
        style={styles.image}>
        <Text style={styles.title}>Coffee Shop</Text>
        <View style={styles.div}>
          <Link href="/contact" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>
                Contact Us
              </Text>
            </Pressable>
          </Link>
          <Link href="/menu" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>
                Menu
              </Text>
            </Pressable>
          </Link>
        </View>
      </ImageBackground>
    </View>
  )
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    marginBottom: 100,
    width: '100%',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  div: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: 20, // Space between buttons
  },
  link: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    padding: 0,
    marginTop: 130,
    marginHorizontal: 'auto',
  },
  button: {
    height: 60,
    width: 150,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: 'black',
    opacity: 0.7,
    padding: 6,
    marginTop: 20,
    marginHorizontal: 8, // Add spacing between buttons
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 8,
  }
})