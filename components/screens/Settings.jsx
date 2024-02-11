import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated';
import { useIsFocused } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo Icons

const SettingsOption = ({ title, onPress,iconName }) => (
  <TouchableOpacity style={styles.settingsOption} onPress={onPress}>
        <View style={styles.optionContainer}>
     <View style={styles.leftContainer}>
     <Ionicons name={iconName} size={24} color="#3498db" style={styles.icon} />
    <Text style={styles.settingsOptionText}>{title}</Text>
    </View>
    <Ionicons name="arrow-forward" size={24} color="#3498db" style={styles.arrowIcon} />
</View>
  </TouchableOpacity>
);

const Settings = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const translateYAnimation = useSharedValue(0);
  const textColorAnimation = useSharedValue(0);

  useEffect(() => {
    if (isFocused) {
      translateYAnimation.value = 0;
      textColorAnimation.value = 0;

      translateYAnimation.value = withTiming(-30, {
        duration: 2000,
      });

      textColorAnimation.value = withTiming(1, {
        duration: 2000,
      });
    }
  }, [isFocused]);

  const animatedStyle = useAnimatedStyle(() => {
    const translateY = translateYAnimation.value;
    const textColor = interpolateColor(
      textColorAnimation.value,
      [0, 1],
      ['#57cc99', '#ffbe0b']
    );

    return {
      color: textColor,
    };
  });

  const handleLogoPress = () => {
    // Add additional actions when the logo is pressed
  };

  const navigateToOption = (screen) => {
    // Implement navigation logic
    navigation.navigate(screen);
  };

  return (
    <Animated.View style={[styles.container]}>
      <TouchableOpacity onPress={handleLogoPress}>
        <Image source={icons.logo} style={styles.logo} />
      </TouchableOpacity>

      <Animated.Text style={[styles.appName, animatedStyle]}>JobSearchApp</Animated.Text>

      <ScrollView style={styles.settingsContainer}>
        <SettingsOption
          title="Account Settings"
          iconName="settings" 
          onPress={() => navigateToOption('AccountSettings')}
        />
        <SettingsOption
          title="Logout"
          iconName="log-out" 
          onPress={() => navigateToOption('LoginScreen')}
        />
        <SettingsOption
          title="Notification Settings"
          iconName="notifications" 
          onPress={() => navigateToOption('NotificationSettings')}
        />
        <SettingsOption
          title="Privacy Settings"
          iconName="settings" 
          onPress={() => navigateToOption('PrivacySettings')}
        />
        <SettingsOption
          title="Feedback and Support"
          iconName="send" 
          onPress={() => navigateToOption('PrivacySettings')}
        />
        <SettingsOption
          title="Default theme"
          iconName="color-wand" 
          onPress={() => navigateToOption('PrivacySettings')}
        />
        <SettingsOption
          title="Language and Region"
          iconName="language" 
          onPress={() => navigateToOption('PrivacySettings')}
        />
        <SettingsOption
          title="App Version and Updates"
          iconName="arrow-up-circle" 
          onPress={() => navigateToOption('PrivacySettings')}
        />
        <SettingsOption
          title="Accessibility Settings"
          iconName="options-sharp" 
          onPress={() => navigateToOption('PrivacySettings')}
        />
        <SettingsOption
          title="Legal Information"
          iconName="information-circle" 
          onPress={() => navigateToOption('PrivacySettings')}
        />
        <SettingsOption
          title="About us"
          iconName="arrow-forward-circle" 
          onPress={() => navigateToOption('PrivacySettings')}
        />
        {/* Add more settings options as needed */}
      </ScrollView>

      <Text style={styles.version}>Version 1.0.0</Text>
    </Animated.View>
  );
};

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
  sectionTitle: {
    ...FONTS.h3,
    color: COLORS.primary,
    marginBottom: 10,
  },
  SettingsText: {
    ...FONTS.body4,
    textAlign: 'justify',
    color: COLORS.gray,
    marginBottom: 20,
  },
  version: {
    ...FONTS.body4,
    color: COLORS.gray,
    marginBottom:20
  },
  
  settingsContainer: {
    flex: 1,
    width: '100%',
    marginTop: 20,
  },
  settingsOption: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  settingsOptionText: {
    ...FONTS.body3,
    color: COLORS.primary,
    fontSize:20
  },
   icon: {
    marginRight: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowIcon: {
    marginLeft: 10,
  },
});

export default Settings;
