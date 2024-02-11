import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Text,
  Image,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import AppIntroSlider from "react-native-app-intro-slider";
import job1 from "../assets/images/job1.png";
import job2 from "../assets/images/job2.png";
import job3 from "../assets/images/job3.png";
import job4 from "../assets/images/job4.png";
import job5 from "../assets/images/job5.png";
import job6 from "../assets/images/job6.png";
import { useTheme } from "react-native-paper";
import Footer from "../components/footer/footer";
import FresherJobs from "../components/home/indiaJobs/indiaJobs";
const Home = () => {
  const { colors } = useTheme();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: "center",
          justifyContent: "space-around",
          paddingBottom: 100,
        }}
      >
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
          <View style={{ backgroundColor: "#5c95ff", height: 20 }}></View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                flex: 1,
                padding: SIZES.medium,
                backgroundColor: "white",
                borderRadius: 20,
              }}
            >
              <Welcome
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleClick={() => {
                  if (searchTerm) {
                    router.push(`/search/${searchTerm}`);
                  }
                }}
              />

              <Popularjobs />
              <FresherJobs />
              <Nearbyjobs />
              <Footer />
            </View>
          </ScrollView>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
          bottomButton
        />
      )}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
  },
  titleStyle: {
    padding: 10,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  paragraphStyle: {
    padding: 20,
    textAlign: "center",
    fontSize: 16,
  },
  introImageStyle: {
    width: 400,
    height: 400,
    borderRadius: 20,
  },
  introTextStyle: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
    marginBottom: 16,
    fontWeight: "bold",
  },
});

const slides = [
  {
    key: "s1",
    title: "Land Your Dream Job",
    text: "Tired of endless scrolling and generic applications? We connect you with the perfect companies and roles, tailored to your skills and aspirations",
    image: job1,
    backgroundColor: "#20d2bb",
  },
  {
    key: "s2",
    title: "Showcase Your Uniqueness",
    text: "Forget one-size-fits-all resumes. Build a dynamic profile that highlights your skills, experience, and achievements in a way that grabs attention",
    image: job6,
    backgroundColor: "#febe29",
  },
  {
    key: "s3",
    title: "Target the Right Opportunities",
    text: "Say goodbye to irrelevant job postings. Our powerful search engine filters through thousands of openings to match your preferences and career goals",
    image: job5,
    backgroundColor: "#22bcb5",
  },
  {
    key: "s4",
    title: "Connect and Impress",
    text: "Skip the impersonal application process. Engage directly with hiring managers and showcase your personality through one-on-one messaging",
    image: job4,
    backgroundColor: "#3395ff",
  },
  {
    key: "s5",
    title: "Land the Interview, Land the Job",
    text: "Get expert guidance and interview preparation tips to make a lasting impression. We are with you every step of the way, from application to offer",
    image: job3,
    backgroundColor: "#f6437b",
  },
  {
    key: "s6",
    title: "Ready to Explore",
    text: "Start your journey now",
    image: job2,
    backgroundColor: "#febe29",
  },
];
