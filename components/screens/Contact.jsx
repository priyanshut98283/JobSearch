import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { useIsFocused } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
const Contact = () => {
  const isFocused = useIsFocused();
  const opacityAnimation = useSharedValue(0);

  useEffect(() => {
    if (isFocused) {
      opacityAnimation.value = 0;
      opacityAnimation.value = withTiming(1, {
        duration: 2000,
      });
    }
  }, [isFocused]);

  const animatedStyle = useAnimatedStyle(() => {
    const opacity = opacityAnimation.value;

    return {
      opacity,
    };
  });

  const handleLogoPress = () => {
    // Add additional actions when the logo is pressed
  };

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <TouchableOpacity onPress={handleLogoPress}>
        <Image source={icons.logo} style={styles.logo} />
      </TouchableOpacity>

      <Text style={styles.appName}>JobSearchApp</Text>

      <Text style={styles.description}>
        Connecting you with the perfect job opportunities tailored to your skills and aspirations.
      </Text>

      <View style={styles.separator} />

      <ScrollView style={styles.contentContainer}>
        <Text style={styles.sectionTitle}>Contact Us</Text>

        <Text style={styles.contactDetails}>
          Email: jobsearchSupport@gmail.com{'\n'}
          Phone: (123) 456-7890{'\n'}
          Address: 123 Road, Bhiwadi, Rajasthan, India
        </Text>

        <Text style={styles.sectionTitle}>Social Media</Text>
        <View style={styles.socialContainer}>
          {socialMediaIcons.map((item, index) => (
            <TouchableOpacity key={index} style={styles.socialIcon}>
              <Feather name={item.icon} size={24} color={item.color} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <Text style={styles.version}>Version 1.0.0</Text>
    </Animated.View>
  );
};

const socialMediaIcons = [
  { icon: 'facebook', color: '#1877f2' },
  { icon: 'twitter', color: '#1da1f2' },
  { icon: 'linkedin', color: '#0a66c2' },
  // Add more social media icons as needed
];

// Rest of the code remains unchanged

// constants.js

const COLORS = {
  primary: '#3498db',
  secondary: '#2ecc71',
  white: '#ffffff',
  gray: '#7f8c8d',
  lightGray: '#ecf0f1',
};

const SIZES = {
  padding: 16,
};

const FONTS = {
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  body3: {
    fontSize: 16,
    color: COLORS.gray,
  },
  h3: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  body4: {
    fontSize: 14,
    color: COLORS.gray,
  },
};

const icons = {
  logo: require('../../assets/splash.png'), // Replace with your actual logo file path
  // Add more icons as needed
};

// ... (previous constants)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: SIZES.padding,
    marginTop:30
  },
  appName: {
    ...FONTS.h2,
    color: COLORS.primary,
    marginBottom: 10,
  },
  description: {
    ...FONTS.body3,
    textAlign: 'center',
    color: COLORS.gray,
    marginBottom: 20,
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.lightGray,
    width: '100%',
    marginVertical: SIZES.padding,
  },
  contactDetails:{
    color:'dodgerblue',
    marginTop:30,
    textAlign:'center'
  },
  sectionTitle: {
    ...FONTS.h3,
    color: COLORS.primary,
    marginBottom: 10,
    marginTop:20,
    textAlign:'center'
  },
  ContactText: {
    ...FONTS.body4,
    textAlign: 'justify',
    color: COLORS.gray,
    marginBottom: 20,
  },
  version: {
    ...FONTS.body4,
    color: COLORS.gray,
  },
  
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  socialIcon: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 20,
  },
});

export default Contact;
