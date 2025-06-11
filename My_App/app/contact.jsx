import { Image } from 'expo-image';
import React, { useState } from 'react';
import { Platform, StyleSheet, TextInput, Button, View, Alert } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import contact from '@/assets/images/contact.png';
import contact_coffee from '@/assets/images/contact-coffee.png';
import { Link } from 'expo-router';

export default function TabTwoScreen() {
  const [suggestion, setSuggestion] = useState('');
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <ThemedView style={styles.headerImagesRow}>
          <Image source={contact} style={styles.contactImage} />
          <Image source={contact_coffee} style={styles.contactCoffeeImage} />
        </ThemedView>
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Contact</ThemedText>
      </ThemedView>
      <ThemedText>If you have any enquiry you wants to make, don't hesitate to contact us.</ThemedText>
      <Collapsible title="Phone">
        <ThemedText>
          <Link href="tel:+233539138458">0539138458</Link>
        </ThemedText>
      </Collapsible>
      <Collapsible title="Email">
        <ThemedText>
          <Link href="tettehk537@gmail.com">You can also send an email.</Link>
        </ThemedText>
      </Collapsible>
      <Collapsible title="Location">
        <ThemedText>
          Ghana, Accra, East Legon, Adjiringanor, 2nd Avenue, House No. 12
        </ThemedText>
      </Collapsible>
      <Collapsible title="Suggestion / Request">
        <View style={styles.suggestionContainer}>
        <TextInput
          style={styles.textarea}
          placeholder="Type your suggestion or request here..."
          multiline
          numberOfLines={4}
          value={suggestion}
          onChangeText={setSuggestion}
        />
        <Button
          title="Send"
          onPress={() => {
            Alert.alert('Thank you!', 'Your suggestion/request has been sent.');
            setSuggestion('');
          }}
        />
      </View>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  suggestionContainer: {
    margin: 24,
    marginTop: 0,
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  suggestionLabel: {
    marginBottom: 8,
    fontSize: 16,
  },
  textarea: {
    minHeight: 80,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
    fontSize: 16,
  },
  button: {
    backgroundColor: 'yellow',
  },
  headerImage: {
    display: 'flex',
    flexDirection: 'row',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  headerImagesRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginBottom: 30,
    gap: 0,
  },
  contactImage: {
    width: 180,
    height: 180,
    borderRadius: 16,
  },
  contactCoffeeImage: {
    width: 50,
    height: 50,
    borderRadius: 12,
    marginTop: 130,
    marginLeft: -50,
    opacity: 0.6
  },
});