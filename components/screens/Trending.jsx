import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolateColor,
} from "react-native-reanimated";
import { useIsFocused } from "@react-navigation/native";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";

const { height: screenHeight } = Dimensions.get("window");
const Trending = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const fadeAnimation = useSharedValue(0);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (isFocused) {
      fadeAnimation.value = 0; // Reset animation state
      fadeAnimation.value = withTiming(1, {
        duration: 2000,
        easing: Easing.inOut(Easing.ease),
      });
    }
  }, [isFocused]);

  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      fadeAnimation.value,
      [0, 1],
      ["#ffffff", "#a2d2ff"] // Change colors as needed
    );

    return {
      backgroundColor,
    };
  });

  const handleCardPress = (job) => {
    setSelectedJob(job);
    if (!job.image) {
      setModalVisible(true);
    } else {
      switch (job.id) {
        case "1":
          navigation.navigate("fullstack");
          break;
        case "2":
          navigation.navigate("ui");
          break;
        case "3":
          navigation.navigate("datascientist");
          break;
        case "4":
          navigation.navigate("mobile");
          break;
        case "5":
          navigation.navigate("devops");
          break;
        case "6":
          navigation.navigate("frontend");
          break;
        case "7":
          navigation.navigate("backend");
          break;
        case "8":
          navigation.navigate("cyber");
          break;
        case "9":
          navigation.navigate("software");
          break;
        // Add more cases for different IDs as needed
        default:
          setModalVisible(true); // Open the modal for other cases
          break;
      }
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const trendingJobs = [
    {
      id: "1",
      name: "Full Stack Developer",
      image: require("../../assets/jobs/1.png"),
    },
    {
      id: "2",
      name: "UX/UI Designer",
      image: require("../../assets/jobs/2.png"),
    },
    {
      id: "3",
      name: "Data Scientist",
      image: require("../../assets/jobs/3.png"),
    },
    {
      id: "4",
      name: "Mobile App Developer",
      image: require("../../assets/jobs/4.png"),
    },
    {
      id: "5",
      name: "DevOps Engineer",
      image: require("../../assets/jobs/5.png"),
    },
    {
      id: "6",
      name: "Frontend Developer",
      image: require("../../assets/jobs/6.png"),
    },
    {
      id: "7",
      name: "Backend Developer",
      image: require("../../assets/jobs/7.png"),
    },
    {
      id: "8",
      name: "Cybersecurity",
      image: require("../../assets/jobs/8.png"),
    },
    {
      id: "9",
      name: "Software developer",
      image: require("../../assets/jobs/9.png"),
    },
  ];

  const trendingJobs2 = [
    {
      id: "1",
      name: "Full Stack Software Developer",
      color: "#fbc4ab",
      description:
        "Job Description: Full Stack Developer\nA Full Stack Developer is a versatile professional responsible for handling both front-end and back-end development tasks, ensuring the seamless functioning of web applications. They play a crucial role in creating dynamic and interactive user experiences. Here's a comprehensive job description:\n\nResponsibilities:\n\nFront-end Development:\nDevelop and implement user-facing features using HTML, CSS, and JavaScript.\nCollaborate with designers to translate mockups and wireframes into responsive web interfaces.\nEnsure the application's responsiveness and optimal performance.\n\nBack-end Development:\nDesign, develop, and maintain server-side logic using server-side languages such as Node.js, Python, or Java.\nCreate and manage databases, ensuring data security and integrity.\nImplement RESTful APIs for seamless communication between the front and back end.\n\nFull Stack Integration:\nIntegrate front-end and back-end aspects of the web application for a cohesive user experience.\nTroubleshoot and debug issues to optimize the application's performance.\n\nCollaboration and Communication:\nWork closely with cross-functional teams, including designers, other developers, and project managers.\nCommunicate effectively to gather requirements and provide regular project updates.\n\nContinuous Learning:\nStay updated with the latest industry trends, tools, and technologies.\nAdapt to evolving technologies and implement best practices.\n\nSkills:\n\nFront-end Technologies:\nProficiency in HTML, CSS, and JavaScript.\nExperience with front-end frameworks such as React, Angular, or Vue.js.\n\nBack-end Technologies:\nKnowledge of server-side languages like Node.js, Python, or Java.\nDatabase management skills with SQL or NoSQL databases (e.g., MySQL, MongoDB).\n\nFull Stack Tools:\nUnderstanding of version control systems (e.g., Git).\nFamiliarity with web servers and deployment processes.\n\nAPI Development:\nExperience in designing and implementing RESTful APIs.\n\nProblem-Solving:\nStrong analytical and problem-solving skills.\nAbility to troubleshoot and debug complex issues.\n\nSoft Skills:\nExcellent communication and collaboration skills.\nAdaptability and eagerness to learn new technologies.\n\nSalary:\nThe salary for Full Stack Developers varies based on factors such as experience, location, and the specific industry. On average, a Full Stack Developer can earn a competitive salary, with mid-to-senior level professionals commanding higher pay.\n\nRoadmap to Become a Full Stack Developer:\n\nLearn the Basics:\nStart with HTML, CSS, and JavaScript to build a solid foundation.\n\nFront-end Development:\nMaster a front-end framework like React, Angular, or Vue.js.\n\nBack-end Development:\nLearn a server-side language such as Node.js, Python, or Java.\nExplore database management with SQL or NoSQL databases.\n\nFull Stack Integration:\nGain experience integrating front-end and back-end components.\n\nVersion Control and Deployment:\nUnderstand version control using Git.\nLearn deployment processes and web server management.\n\nAPI Development:\nDive into designing and implementing RESTful APIs.\n\nBuild Projects:\nApply your skills by working on real-world projects to showcase in your portfolio.\n\nStay Updated:\nKeep up with industry trends and emerging technologies.\n\nJoin the Community:\nEngage with the developer community, participate in forums, and attend meetups or conferences.\n\nContinuous Learning:\nNever stop learning; the tech industry evolves, and staying current is essential.\nEmbarking on the journey to become a Full Stack Developer involves a commitment to continuous learning, practical application of skills, and staying adaptable in the ever-evolving tech landscape.",
    },
    {
      id: "2",
      name: "UX/UI Designer",
      color: "#2ec4b6",
      description:
        "A UX/UI Designer is responsible for creating engaging and visually appealing user experiences for digital products. This role combines elements of user research, interaction design, and visual design to ensure a seamless and enjoyable user journey. UX/UI Designers collaborate with cross-functional teams to understand user needs and business requirements, translating them into intuitive and aesthetically pleasing designs.\nSkills:\n- Proficiency in design tools such as Sketch, Figma, or Adobe XD\n- Strong understanding of user-centered design principles\n- Knowledge of information architecture and wireframing\n- Excellent visual design skills with a keen eye for detail\n- Ability to conduct user research and usability testing\n- Collaboration and communication skills to work with development and product teams\n\nSalary:\nThe salary for UX/UI Designers can vary based on experience, location, and the employing organization. Entry-level designers may earn around $60,000 to $80,000 per year, while experienced professionals can command higher salaries, ranging from $80,000 to $120,000 or more.\n\nRoadmap to Become a UX/UI Designer:\n1. Educational Foundation:\n - Obtain a degree in graphic design, interaction design, or a related field.\n - Learn fundamental design principles and tools.\n\n2. Build a Strong Portfolio:\n - Showcase personal projects and design exercises.\n - Highlight problem-solving and critical-thinking skills.\n\n3. Master Design Tools:\n - Gain proficiency in industry-standard design tools.\n - Stay updated with the latest features and design trends.\n\n4. User-Centered Design Knowledge:\n - Understand user research methodologies.\n - Learn to create user personas and conduct usability testing.\n\n5. Develop Technical Skills:\n - Acquire coding basics for better collaboration with developers.\n - Learn to prototype designs for interactive experiences.\n\n6. Networking:\n - Attend design conferences, meetups, and online communities.\n - Connect with professionals in the field for mentorship.\n\n7. Internship or Entry-Level Position:\n - Gain hands-on experience through internships or entry-level positions.\n - Apply classroom learning to real-world design challenges.\n\n8. Continual Learning:\n - Stay updated on design trends, tools, and technologies.\n - Pursue advanced courses or certifications for specialization.\n\n9. Specialization and Career Growth:\n - Explore areas of specialization, such as mobile design or UX research.\n - Aim for leadership roles or senior design positions.\n\nBecoming a UX/UI Designer requires a combination of education, practical experience, and continuous learning to adapt to the evolving landscape of design and technology.",
    },
    {
      id: "3",
      name: "Data Scientist",
      color: "#c77dff",
      description:
        "Description: A Data Scientist is a skilled professional who extracts meaningful insights and knowledge from large volumes of data, utilizing a combination of statistical, mathematical, and programming techniques. In this dynamic role, Data Scientists play a crucial part in informing business decisions, identifying trends, and solving complex problems through data analysis.\nSkills Required:\nStatistical Analysis: Proficiency in statistical methods to interpret and analyze complex data sets.\nProgramming: Strong coding skills in languages such as Python, R, or SQL for data manipulation and analysis.\nMachine Learning: Understanding and application of machine learning algorithms for predictive modeling and pattern recognition.\nData Visualization: Ability to communicate findings effectively through visualization tools like Tableau or Matplotlib.\nDomain Knowledge: Knowledge of the specific industry or business domain to contextualize data insights.\nDatabase Management: Competence in working with databases and big data technologies (e.g., Hadoop, Spark).\nCommunication Skills: Effective communication to convey findings to non-technical stakeholders.\nSalary Range:\nData Scientists are typically well-compensated due to their specialized skills. Salaries vary based on experience, location, and industry. Entry-level positions might start around $80,000 per year, while experienced professionals can earn well over $120,000 annually.\nRoadmap to Become a Data Scientist:\nEducational Background: Obtain a degree in a related field such as Computer Science, Statistics, or Data Science.\nLearn Programming: Gain proficiency in programming languages, especially Python and R.\nStatistics and Mathematics: Develop a strong foundation in statistical concepts and mathematics.\nData Analysis Tools: Familiarize yourself with tools like Pandas, NumPy, and Jupyter Notebooks.\nMachine Learning: Learn about machine learning algorithms and frameworks (Scikit-Learn, TensorFlow, or PyTorch).\nData Visualization: Master data visualization tools such as Tableau or Matplotlib.\nBuild a Portfolio: Work on real-world projects and create a portfolio showcasing your skills.\nNetworking: Engage with the data science community, attend meetups, and participate in online forums.\nAdvanced Degrees (Optional): Pursue advanced degrees like a Master's or Ph.D. for more senior roles.\nContinuous Learning: Stay updated on industry trends, new tools, and evolving technologies.\nBecoming a Data Scientist involves a combination of education, hands-on experience, and continuous learning to stay abreast of the rapidly evolving field of data science.\n",
    },
    {
      id: "4",
      name: "Mobile App Developer",
      color: "#ffd670",
      description:
        "Description: A Mobile App Developer is a creative professional responsible for designing, developing, and maintaining mobile applications. They play a crucial role in creating user-friendly and innovative mobile experiences for various platforms. Mobile App Developers use their programming skills to bring ideas to life and ensure seamless functionality in mobile applications.\n\nSkills Required:\nProgramming Languages: Proficiency in languages such as JavaScript (React Native, Flutter), Swift (for iOS), or Kotlin (for Android).\nUser Interface (UI) Design: Knowledge of UI principles and design tools to create visually appealing and user-friendly interfaces.\nCross-Platform Development: Experience in developing applications that can run on multiple platforms using frameworks like React Native or Flutter.\nMobile App Architecture: Understanding of mobile app architecture and design patterns for building scalable and maintainable applications.\nAPI Integration: Ability to integrate third-party APIs and web services to enhance app functionality.\nProblem-Solving: Strong problem-solving skills to troubleshoot issues and optimize app performance.\nTesting and Debugging: Proficient in testing and debugging techniques to ensure the reliability and stability of mobile applications.\nVersion Control: Familiarity with version control systems like Git for collaborative development.\nCommunication Skills: Effective communication to collaborate with cross-functional teams and understand client requirements.\nSalary Range:\nMobile App Developers are in high demand, and their salaries can vary based on experience, location, and the specific technologies used. Entry-level positions may start around $60,000 per year, while experienced developers can earn well over $100,000 annually.\n\nRoadmap to Become a Mobile App Developer:\nEducational Background: Obtain a degree in Computer Science, Software Engineering, or a related field.\nLearn Programming: Gain proficiency in programming languages relevant to mobile app development, such as JavaScript, Swift, or Kotlin.\nUI/UX Design: Acquire knowledge of UI/UX principles and design tools to create visually appealing interfaces.\nChoose a Platform: Decide whether to specialize in iOS, Android, or cross-platform development using frameworks like React Native or Flutter.\nBuild Projects: Work on real-world projects to build a portfolio showcasing your skills and creativity.\nNetworking: Connect with other developers, attend meetups, and participate in online communities to stay updated on industry trends.\nContinuous Learning: Stay informed about the latest advancements in mobile app development, tools, and technologies.\nInternships and Job Experience: Gain hands-on experience through internships or entry-level positions to enhance practical skills.\nSpecialization (Optional): Consider specializing in areas like augmented reality (AR), virtual reality (VR), or Internet of Things (IoT) for additional expertise.\nBecoming a Mobile App Developer involves a combination of education, hands-on experience, and staying updated on emerging technologies to create innovative and impactful mobile applications.",
    },
    {
      id: "5",
      name: "DevOps Engineer",
      color: "#00509d",
      description:
        "Description: A DevOps Engineer is a skilled professional responsible for bridging the gap between software development and IT operations. DevOps Engineers focus on automating and streamlining the software delivery process, ensuring collaboration between development and operations teams. They play a crucial role in enhancing efficiency, reducing deployment times, and maintaining system reliability.\n\nSkills Required:\n1. Automation Skills: Proficiency in automating manual processes using tools like Ansible, Puppet, or Chef.\n2. Containerization: Experience with containerization platforms like Docker and orchestration tools such as Kubernetes.\n3. Continuous Integration/Continuous Deployment (CI/CD): Implementing and managing CI/CD pipelines for automated testing and deployment.\n4. Infrastructure as Code (IaC): Knowledge of IaC tools like Terraform or CloudFormation to manage and provision infrastructure.\n5. Scripting Languages: Strong scripting skills in languages such as Python, Bash, or Ruby for automation and scripting tasks.\n6. Version Control: Familiarity with version control systems like Git for tracking changes in code and configuration.\n7. Monitoring and Logging: Implementing monitoring solutions and analyzing logs to ensure system performance and troubleshoot issues.\n8. Security Practices: Understanding and implementing security best practices in the deployment and management of infrastructure.\n9. Collaboration: Effective collaboration and communication skills to work with cross-functional teams and stakeholders.\n10. Cloud Services: Familiarity with cloud platforms like AWS, Azure, or Google Cloud for deploying and managing applications.\n\nSalary Range:\nDevOps Engineers are highly valued for their role in optimizing software delivery processes. Salaries vary based on experience, location, and the specific skills of the individual. Entry-level positions may start around $80,000 per year, while experienced DevOps Engineers can earn well over $120,000 annually.\n\nRoadmap to Become a DevOps Engineer:\n1. Educational Background: Obtain a degree in Computer Science, Information Technology, or a related field.\n2. Learn Linux: Gain proficiency in Linux operating systems and command-line tools.\n3. Automation Tools: Master automation tools like Ansible, Puppet, or Chef for configuration management.\n4. Containerization: Learn about containerization using Docker and container orchestration with Kubernetes.\n5. CI/CD: Understand and implement CI/CD pipelines for automated testing and deployment.\n6. IaC Tools: Gain expertise in IaC tools like Terraform or CloudFormation for infrastructure provisioning.\n7. Scripting: Develop strong scripting skills in languages such as Python, Bash, or Ruby.\n8. Version Control: Familiarize yourself with version control systems, especially Git.\n9. Cloud Platforms: Acquire knowledge of cloud platforms like AWS, Azure, or Google Cloud.\n10. Security Practices: Learn and implement security best practices in the DevOps process.\n\nBecoming a DevOps Engineer involves a combination of education, hands-on experience, and continuous learning to adapt to the evolving landscape of software development and IT operations.",
    },
    {
      id: "6",
      name: "Frontend Developer",
      color: "#ff85a1",
      description:
        "Description: A Frontend Developer is a creative professional who specializes in designing and implementing the user interface (UI) and user experience (UX) of web applications. Frontend Developers play a crucial role in bringing web designs to life, ensuring seamless and visually appealing interactions for users. They collaborate closely with designers and backend developers to create engaging and responsive web interfaces.\n\nSkills Required:\n1. Web Technologies: Proficiency in web development technologies, including HTML, CSS, and JavaScript.\n2. JavaScript Frameworks: Experience with popular JavaScript frameworks and libraries such as React, Angular, or Vue.js.\n3. Responsive Design: Knowledge of responsive design principles to create web applications that work well on various devices and screen sizes.\n4. Cross-Browser Compatibility: Ensuring that web applications function consistently across different web browsers.\n5. Version Control: Familiarity with version control systems like Git for tracking changes in code.\n6. Web Performance Optimization: Implementing techniques to optimize web application performance and loading times.\n7. Testing and Debugging: Proficient in testing and debugging web applications for a smooth user experience.\n8. UI/UX Design Principles: Understanding of UI/UX design principles to collaborate effectively with designers.\n9. Frontend Build Tools: Experience with build tools like Webpack for bundling and optimizing frontend assets.\n10. Collaboration: Effective collaboration skills to work with cross-functional teams and backend developers.\n\nSalary Range:\nFrontend Developers are in high demand, and their salaries can vary based on experience, location, and the specific technologies used. Entry-level positions may start around $60,000 per year, while experienced developers can earn well over $100,000 annually.\n\nRoadmap to Become a Frontend Developer:\n1. Educational Background: Obtain a degree in Computer Science, Software Engineering, or a related field.\n2. Learn HTML, CSS, and JavaScript: Gain a strong foundation in core web technologies.\n3. JavaScript Frameworks: Learn a popular JavaScript framework such as React, Angular, or Vue.js.\n4. Responsive Design: Understand and implement responsive design principles for diverse devices.\n5. Version Control: Familiarize yourself with version control using Git.\n6. Web Performance Optimization: Learn techniques to optimize web application performance.\n7. Testing: Gain proficiency in testing tools and techniques for frontend development.\n8. UI/UX Principles: Understand UI/UX design principles to collaborate effectively with designers.\n9. Build Tools: Familiarize yourself with frontend build tools like Webpack.\n10. Portfolio Building: Work on real-world projects to build a portfolio showcasing your skills and creativity.\n\nBecoming a Frontend Developer involves a combination of education, hands-on experience, and staying updated on emerging frontend technologies to create visually appealing and user-friendly web interfaces.",
    },
    {
      id: "7",
      name: "Backend Developer",
      color: "#e4c1f9",
      description:
        "Description: A Backend Developer is a skilled professional responsible for designing, developing, and maintaining the server-side logic and databases of web applications. Backend Developers play a crucial role in ensuring the functionality and performance of web applications by implementing server-side technologies, databases, and application logic. They work in collaboration with frontend developers to create a seamless and robust web application experience.\nSkills Required:\nServer-Side Programming: Proficiency in server-side programming languages such as Node.js, Python (Django or Flask), Ruby (Ruby on Rails), or Java.\nDatabase Management: Experience with database systems like MySQL, PostgreSQL, MongoDB, or Firebase for efficient data storage and retrieval.\nAPI Development: Designing and building robust and scalable APIs (Application Programming Interfaces) for seamless communication between frontend and backend systems.\nServer Management: Knowledge of server deployment and management to ensure the reliability and availability of web applications.\nAuthentication and Authorization: Implementing secure authentication and authorization mechanisms to protect sensitive data.\nVersion Control: Familiarity with version control systems like Git for tracking changes in code.\nWeb Security: Understanding and implementing security best practices to protect web applications from vulnerabilities.\nTesting and Debugging: Proficient in testing and debugging backend code for optimal performance and reliability.\nCollaboration: Effective collaboration skills to work with cross-functional teams, including frontend developers and designers.\nScalability:\nDesigning backend systems that can scale to handle increased loads and user interactions.\n Salary Range:\nBackend Developers are in high demand, and their salaries can vary based on experience, location, and the specific technologies used. Entry-level positions may start around $70,000 per year, while experienced developers can earn well over $120,000 annually.\n Roadmap to Become a Backend Developer:\nEducational Background: Obtain a degree in Computer Science, Software Engineering, or a related field.\nLearn a Backend Language: Gain proficiency in a backend programming language such as Node.js, Python, Ruby, or Java.\nDatabase Management: Learn to work with different types of databases and understand database management.\nAPI Development: Acquire skills in designing and building APIs for effective communication between frontend and backend.\nServer Deployment: Understand server deployment and management for hosting web applications.\nAuthentication and Authorization: Learn secure methods for user authentication and authorization.\nVersion Control: Familiarize yourself with version control using Git for collaborative development.\nWeb Security: Gain knowledge of web security best practices and implement them in backend development.\nTesting: Develop proficiency in testing and debugging backend code for reliability.\nCollaboration: Practice effective collaboration with frontend developers and other team members.\nBecoming a Backend Developer involves a combination of education, hands-on experience, and staying updated on emerging backend technologies to create robust and scalable web applications.",
    },
    {
      id: "8",
      name: "Cybersecurity",
      color: "#457b9d",
      description:
        "Description: A Cybersecurity Professional is a highly skilled individual responsible for securing computer systems, networks, and data from cyber threats and attacks. Cybersecurity professionals play a crucial role in safeguarding sensitive information and ensuring the integrity, confidentiality, and availability of digital assets. They employ a variety of tools and techniques to identify vulnerabilities, implement security measures, and respond to security incidents.\n\nSkills Required:\n\nNetwork Security: Expertise in securing computer networks from unauthorized access and cyber attacks.\nEncryption: Knowledge of encryption algorithms and techniques to protect data during transmission and storage.\nIntrusion Detection and Prevention: Implementing systems to detect and prevent unauthorized access and malicious activities.\nSecurity Auditing: Conducting regular security audits to assess vulnerabilities and ensure compliance with security policies.\nIncident Response: Developing and implementing plans to respond to and mitigate cybersecurity incidents.\nVulnerability Assessment: Identifying and assessing potential vulnerabilities in systems and applications.\nSecurity Policies and Compliance: Knowledge of cybersecurity regulations, standards, and best practices to ensure compliance.\nRisk Management: Assessing and managing risks associated with cybersecurity threats and vulnerabilities.\nSecurity Awareness and Training: Educating users and stakeholders about cybersecurity best practices.\nContinuous Learning: Staying updated on the latest cybersecurity threats, technologies, and defense strategies.\n\nSalary Range:\n\nCybersecurity professionals are in high demand, and salaries vary based on experience, location, and expertise. Entry-level positions may start around $80,000 per year, while experienced professionals can earn well over $120,000 annually.\n\nRoadmap to Become a Cybersecurity Professional:\n\nEducational Background: Obtain a degree in Cybersecurity, Information Technology, or a related field.\nGain Practical Experience: Participate in hands-on projects, internships, or entry-level positions to gain practical experience.\nCertifications: Pursue industry-recognized certifications such as CISSP, CompTIA Security+, or Certified Ethical Hacker (CEH).\nSpecialization: Choose a specialization within cybersecurity, such as network security, penetration testing, or security analysis.\nNetworking: Build a professional network by attending cybersecurity conferences, joining online forums, and connecting with professionals in the field.\nStay Informed: Keep up-to-date with the latest cybersecurity trends, threats, and technologies through continuous learning and professional development.",
    },
    {
      id: "9",
      name: "Software developer",
      color: "#b5179e",
      description:
        "Description: A Software Developer is a skilled professional responsible for designing, coding, testing, and maintaining software applications. Software developers play a crucial role in creating innovative and functional software solutions to meet the needs of businesses and end-users. They use programming languages and development tools to bring concepts and ideas to life in the form of applications.\nSkills Required:\nProgramming Languages: Proficiency in programming languages such as Java, Python, JavaScript, C#, or C++.\nProblem-Solving: Strong analytical and problem-solving skills to address complex software development challenges.\nSoftware Development Life Cycle (SDLC): Understanding and application of the SDLC, including requirements gathering, design, coding, testing, and deployment.\nVersion Control: Familiarity with version control systems like Git for tracking changes and collaborating with other developers.\nAlgorithms and Data Structures: Knowledge of algorithms and data structures for efficient and optimized code.\nDatabase Management: Competence in working with databases and database management systems (e.g., MySQL, PostgreSQL, MongoDB).\nWeb Development: Experience in web development technologies and frameworks (e.g., React, Angular, Node.js).\nMobile App Development (Optional): Knowledge of mobile app development for iOS and Android platforms using tools like React Native or Flutter.\nContinuous Learning: Willingness to learn and adapt to new programming languages, tools, and technologies.\nSalary Range:\nSoftware developers are in high demand, and salaries vary based on experience, location, and specialization. Entry-level positions may start around $60,000 per year, while experienced developers can earn well over $100,000 annually.\nRoadmap to Become a Software Developer:\nEducational Background: Obtain a degree in Computer Science, Software Engineering, or a related field.\nLearn Programming: Gain proficiency in one or more programming languages relevant to your career goals.\nBuild Projects: Work on real-world projects to apply theoretical knowledge and build a portfolio.\nInternships: Gain practical experience through internships or entry-level positions to enhance your skills.\nNetworking: Connect with other developers, attend meetups, and participate in online communities to stay updated on industry trends.\nSpecialization: Consider specializing in areas such as web development, mobile app development, or software engineering based on your interests.\nContinuous Learning: Stay informed about the latest advancements in programming languages, frameworks, and tools to remain competitive in the field.",
    },
  ];

  const renderCard = ({ item }) => {
    return (
      <TouchableOpacity
        style={[
          styles.card,
          item.image
            ? { backgroundColor: "transparent" }
            : { backgroundColor: item.color },
        ]}
        onPress={() => handleCardPress(item)}
      >
        {item.image ? (
          <Image source={item.image} style={styles.cardImage} />
        ) : (
          <Text style={styles.cardText}>{item.name}</Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <ScrollView>
        <Text style={styles.modalTitle}>Explore trending jobs </Text>
        <FlatList
          data={trendingJobs}
          keyExtractor={(item) => item.id}
          renderItem={renderCard}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.cardsContainer}
          numColumns={2} // Added for a two-column layout
          style={styles.flatList}
        />
        <Text style={styles.modalTitle}>Learn about jobs </Text>
        <FlatList
          data={trendingJobs2}
          keyExtractor={(item) => item.id}
          renderItem={renderCard}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.cardsContainer}
          numColumns={2} // Added for a two-column layout
        />
      </ScrollView>

      <Modal isVisible={isModalVisible} onBackdropPress={closeModal}>
        <ScrollView>
          <View style={styles.modalContainer}>
            {selectedJob && (
              <>
                <Text style={styles.modalTitle}>{selectedJob.name}</Text>
                <Text style={styles.modalDescription}>
                  {selectedJob.description}
                </Text>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={closeModal}
                >
                  <Text style={styles.modalButtonText}>Close</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </ScrollView>
      </Modal>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 38,
  },
  cardsContainer: {
    marginTop: 20,
  },
  card: {
    width: "45%",
    height: 200,
    borderRadius: 10,
    marginHorizontal: "2.5%",
    marginBottom: 20,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  cardText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    marginTop:80
  },
  modalContainer: {
    backgroundColor: "#ffe4f3",
    padding: 30,
    borderRadius: 20,
  },
  modalTitle: {
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#758bfd",
    marginTop:30
  },
  modalDescription: {
    fontSize: 19,
    marginBottom: 10,
    color: "#0081a7",
  },
  modalButton: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  modalButtonText: {
    color: "#ffffff",
  },
});

export default Trending;
