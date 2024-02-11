import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Footer = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Made with </Text>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="heart" size={24} color="#ff7f50" />
      </View>
      <Text style={styles.text}>by P.T.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3498db',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ecf0f1',
    borderRadius:10,
    shadowColor: '#000',
    marginTop:20,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
  iconContainer: {
    marginRight: 5,
  },
  text: {
    color: '#fff',
    fontSize: 19,
  },
});

export default Footer;
