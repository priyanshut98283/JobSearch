import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  Easing,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated';
import { useIsFocused } from '@react-navigation/native';

const About = () => {
  const isFocused = useIsFocused();
  const springAnimation = useSharedValue(0);
  const backgroundColorAnimation = useSharedValue(0);

  useEffect(() => {
    if (isFocused) {
      springAnimation.value = 0;
      backgroundColorAnimation.value = 0;

      springAnimation.value = withSpring(1, {
        damping: 2,
        stiffness: 80,
      });

      backgroundColorAnimation.value = withTiming(1, {
        duration: 2000,
        easing: Easing.inOut(Easing.ease),
      });
    }
  }, [isFocused]);

  const animatedStyle = useAnimatedStyle(() => {
    const translateY = springAnimation.value * 40;
    const backgroundColor = interpolateColor(
      backgroundColorAnimation.value,
      [0, 1],
      ['#ffffff', '#d0f4de'] // Adjust colors as needed
    );

    return {
      transform: [{ translateY }],
      backgroundColor,
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
        <Text style={styles.sectionTitle}>About Us</Text>
        <Text style={styles.aboutText}>
          JobSearchApp is dedicated to helping you find the career of your dreams. Our mission is to
          simplify the job search process, providing you with a personalized and efficient
          experience.
        </Text>

        <Text style={styles.sectionTitle}>Our Values</Text>
        <Text style={styles.valueText}>
          - Innovation: We strive to bring innovative solutions to the job search experience.
        </Text>
        <Text style={styles.valueText}>
          - Collaboration: We believe in the power of collaboration to achieve success.
        </Text>
        <Text style={styles.valueText}>
          - Empowerment: We empower individuals to make informed decisions about their careers.
        </Text>
        <Text style={styles.sectionTitle}>Mission Statement</Text>
        <Text style={styles.valueText}>
          Our mission is to connect job seekers with meaningful employment opportunities and
          facilitate a seamless and empowering job search experience.
        </Text>

        <Text style={styles.sectionTitle}>Contact Us</Text>
        <Text style={styles.valueText}>
          Email: info@jobsearchapp.com{'\n'}
          Phone: (123) 456-7890
        </Text>
      </ScrollView>

      <Text style={styles.version}>Version 1.0.0</Text>
    </Animated.View>
  );
};

const COLORS = {
  primary: '#3498db',
  secondary: '#2ecc71',
  white: '#ffffff',
  gray: '#7f8c8d',
  lightGray: '#ecf0f1',
  lightBlue: '#3498db',
  lightGreen: '#2ecc71',
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
  logo: require('../../assets/splash.png'),
  // Add more icons as needed
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.white,
    marginTop: -40,
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
  contentContainer: {
    flex: 1,
    width: '100%',
    marginTop: 20,
  },
  sectionTitle: {
    ...FONTS.h3,
    color: COLORS.primary,
    marginBottom: 10,
    textAlign:'center'
  },
  aboutText: {
    ...FONTS.body4,
    textAlign: 'justify',
    color: COLORS.gray,
    marginBottom: 20,
    fontSize:15
  },
  valueText: {
    ...FONTS.body4,
    color: COLORS.gray,
    marginBottom: 10,
    fontSize:15
  },
  version: {
    ...FONTS.body4,
    color: COLORS.gray,
    marginBottom:40
  },
});

export default About;
