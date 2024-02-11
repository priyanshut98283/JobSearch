import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolateColor,
} from 'react-native-reanimated';
import { useIsFocused } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

// ... (previous imports)

const Profile = () => {
  const isFocused = useIsFocused();
  const translateYAnimation = useSharedValue(0);
  const backgroundColorAnimation = useSharedValue(0);

  const [userName, setUserName] = useState('');
  const [about, setAbout] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const [userImage, setUserImage] = useState(null);

  useEffect(() => {
    if (isFocused) {
      translateYAnimation.value = 0;
      backgroundColorAnimation.value = 0;

      translateYAnimation.value = withTiming(1, {
        duration: 2000,
        easing: Easing.inOut(Easing.ease),
      });

      backgroundColorAnimation.value = withTiming(1, {
        duration: 2000,
        easing: Easing.inOut(Easing.ease),
      });
    }
  }, [isFocused]);

  const animatedStyle = useAnimatedStyle(() => {
    const translateY = translateYAnimation.value * 50;
    const backgroundColor = interpolateColor(
      backgroundColorAnimation.value,
      [0, 1],
      ['#ffffff', '#d0f4de'] // Change colors as needed
    );

    return {
      transform: [{ translateY }],
      backgroundColor,
    };
  });

  const handleLogoPress = () => {
    // Add additional actions when the logo is pressed
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setUserImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Animated.View style={[styles.container, animatedStyle]}>
        <TouchableOpacity onPress={handleLogoPress}>
          {userImage ? (
            <Image source={{ uri: userImage }} style={styles.profileImage} />
          ) : (
            <Image source={icons.logo} style={styles.logo} />
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={pickImage} style={styles.imagePickerButton}>
          <Feather name="camera" size={24} color={COLORS.gray} />
          <Text style={styles.imagePickerButtonText}>Pick an Image</Text>
        </TouchableOpacity>

        <Text style={styles.appName}>JobSearchApp</Text>
        <View style={styles.separator} />
        <View style={styles.profileInfoContainer}>
          <Text style={styles.profileLabel}>Name:</Text>
          <TextInput
            style={styles.profileInput}
            value={userName}
            onChangeText={(text) => setUserName(text)}
            placeholder="Enter your name"
          />
<View style={styles.separator} />
          <Text style={styles.profileLabel}>Number:</Text>
          <TextInput
            style={styles.profileInput}
            value={userNumber}
            onChangeText={(text) => setUserNumber(text)}
            placeholder="Enter your number"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.separator} />
        <Text style={styles.profileLabel}>About You:</Text>
        <TextInput
         style={styles.profileInput}
            value={userName}
            onChangeText={(text) => setAbout(text)}
            placeholder="Write something about yourself"
         />
      </Animated.View>
    </ScrollView>
  );
};
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
    marginTop:-50
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    borderRadius: 50,
    marginBottom: SIZES.padding,

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
    height: 2,
    backgroundColor: 'orange',
    width: '100%',
    marginVertical: SIZES.padding,
  },
  sectionTitle: {
    ...FONTS.h3,
    color: COLORS.primary,
    marginBottom: 10,
  },
  ProfileText: {
    ...FONTS.body4,
    textAlign: 'justify',
    color: COLORS.gray,
    marginBottom: 20,
  },
  version: {
    ...FONTS.body4,
    color: COLORS.gray,
  },
  profileInfoContainer: {
    width: '100%',
    marginBottom: 20,
  },
  profileLabel: {
    ...FONTS.body3,
    color: COLORS.gray,
    marginBottom: 5,
    textAlign:'center'
  },
  profileInput: {
    height: 40,
    borderColor: COLORS.lightGray,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    alignItems:'center',
    textAlign:'center',
    justifyContent:'center'
  },
  profileImage: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 50,
    marginBottom: SIZES.padding,
  },
  imagePickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  imagePickerButtonText: {
    ...FONTS.body4,
    color: COLORS.gray,
    marginLeft: 5,
  },
});

export default Profile;
