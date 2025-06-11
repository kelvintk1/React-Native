import React from "react";
import { StyleSheet, View, Text, Image, FlatList, SafeAreaView } from "react-native";
import { MENU_ITEMS } from "@/constants/MenuItems";
import MENU_IMAGES from "@/constants/MenuImages";

export default function MenuScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image
              source={MENU_IMAGES[item.id - 1]}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        )}
        ListFooterComponent={() => (
          <View style={styles.footer}>
            <Text style={styles.footerText}>End Of Menu</Text>
            <Text style={styles.footerText}>
              © 2025 Coffee Shop.
            </Text>
            <Text style={styles.footerText}>
              All rights reserved.
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  image: {
    width: 64,
    height: 64,
    marginRight: 12,
    borderRadius: 8,
    backgroundColor: "#ccc",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white"
  },
  description: {
    color: "#555",
  },
  footer: {
    padding: 16,
    alignItems: "center",
    backgroundColor: "#222",
  },
  footerText: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
});