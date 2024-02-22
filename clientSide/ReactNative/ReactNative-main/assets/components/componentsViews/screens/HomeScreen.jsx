import React from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar, Image } from "react-native";
import NavBar from "../../NavBar/NavBar";
import LottieView from "lottie-react-native";
const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* Set background color of status bar */}
            <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.collegeImageContainer}>
                        <Image source={require("../../images/college.png")} />
                    </View>
                    <View style={styles.welcome}>
                        <LottieView
                            style={{ flex: 1 }}
                            source={require("../../Animations/Hello.json")}
                            autoPlay
                            loop

                        />
                    </View>
                    <View style={styles.textContainer}>
                        {/* <Text style={styles.heading}>Welcome To The ChildRights Application</Text> */}


                    </View>
                    <View style={styles.childContainer}>
                        <Image source={require("../../images/childRights.jpg")} />
                    </View>
                    <View>
                        <Text style={styles.rights}>
                            Child rights are essential for protecting children, ensuring access to education and healthcare, preventing exploitation, and fostering a fair and just society.
                        </Text>

                    </View>
                </View>

                {/* NavBar is placed outside the content */}
                <NavBar />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: '#F4EAE0' // Background color of the screen
    },
    content: {
        flex: 1,
        marginTop: 30,
        alignItems: "center",
    },
    textContainer: {

        alignItems: "center", // Align text horizontally
    },
    // heading: {
    //     fontSize: 23,
    //     marginBottom: 1,
    //     textAlign: 'center',
    // },
    rights: {
        marginTop: 5,
        fontSize: 16,
        textAlign: 'center', // Align text horizontally
        paddingHorizontal: 20, // Add padding
    },
    welcome: {
        height: 200,
        aspectRatio: 1
    }
});

export default HomeScreen;