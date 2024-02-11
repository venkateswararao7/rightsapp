import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import NavBar from "../../NavBar/NavBar";
import RightComponent from "../RightsScreen/RightsComponent";

const QuizScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.content}>
                        <View>
                            <Text style={styles.levelHeading}>Level -1</Text>
                        </View>
                        <RightComponent
                            article="Right To Equality"
                            discription="guarantees free and mandatory education for children aged 6 to 14, fostering universal access to quality schooling."
                            youTubeLink="https://www.youtube.com/watch?v=g7rNnT_QuLI"
                            webSiteLink="https://ceodelhi.gov.in/eLearningv2/admin/EnglishPDF/chapter%206%20Democratic%20rights.pdf"
                            level="level1"
                        />
                        <RightComponent
                            article="Right against discrimination"
                            discription="Indian Constitution guarantees equal rights, bars discrimination based on caste, religion and so on"
                            youTubeLink="https://www.youtube.com/watch?v=doRSExm-dhI"
                            webSiteLink="https://www.constitutionofindia.net/articles/article-15-prohibition-of-discrimination-on-grounds-of-religion-race-caste-sex-or-place-of-birth/"
                            level="level1"
                        />
                        <View>
                            <Text style={styles.levelHeading}>Level -2</Text>
                        </View>
                        <RightComponent
                            article="Right To Freedom Of Speech And Expresstion"
                            discription="Constitution grants citizens freedom to express opinions, ensuring democratic participation."
                            youTubeLink="https://www.youtube.com/watch?v=U2IQvZ12jPY"
                            webSiteLink="https://static.mygov.in/indiancc/2021/07/mygov-99999999916219128.pdf"
                            level="level2"
                        />
                        <RightComponent
                            article="Right To Education"
                            discription="Constitution assures free, compulsory education, fostering inclusive learning opportunities for all."
                            youTubeLink="https://www.youtube.com/watch?v=wNoisxAoOCo"
                            webSiteLink="https://www.education.gov.in/rte#:~:text=The%20Constitution%20(Eighty%2Dsixth%20Amendment,may%2C%20by%20law%2C%20determine."
                            level="level2"
                        />
                        <View>
                            <Text style={styles.levelHeading}>Level -3</Text>
                        </View>
                        <RightComponent
                            article="Right Against Child Labor"
                            discription="Constitution protects children, bans labor, ensuring their right to education, safety, and a dignified childhood"
                            youTubeLink="https://www.youtube.com/watch?v=OMs95Ow8QOY"
                            webSiteLink="https://labour.gov.in/sites/default/files/FAQ_child_labour.pdf"
                            level="level3"
                        />
                        <RightComponent
                            article="Right To Be Protected From Trafficking"
                            discription="Constitution safeguards against human trafficking, ensuring protection and security for all individuals"
                            youTubeLink="https://www.youtube.com/watch?v=35uM5VMrZas"
                            webSiteLink="https://www.mea.gov.in/human-trafficking.htm"
                            level="level3"
                        />
                        <View>
                            <Text style={styles.levelHeading}>Level -4</Text>
                        </View>
                        <RightComponent
                            article="Right To Identity"
                            discription=""
                            youTubeLink=""
                            webSiteLink="https://ijlljs.in/wp-content/uploads/2015/04/Personal-Identity-and-Law.pdf"
                            level="level4"
                        />

                        <RightComponent
                            article="Right To Be Protected Against Abuse"
                            discription=""
                            youTubeLink=""
                            webSiteLink="https://www.sos-childrensvillages.org/news/the-right-to-protection"
                            level="level4"
                        />
                        <View>
                            <Text style={styles.levelHeading}>Level -5</Text>
                        </View>
                        <RightComponent
                            article="Right To Life And Personal Liberty"
                            discription="Constitution guarantees right to life, liberty, ensuring personal freedom and security for all citizens"
                            youTubeLink=""
                            webSiteLink=""
                            level="level5"
                        />
                        <RightComponent
                            article="Prohibition Of Child Marriages"
                            discription=""
                            youTubeLink=""
                            webSiteLink=""
                            level="level5"
                        />
                        <RightComponent
                            article="Protection From Sexual Offences"
                            discription=""
                            youTubeLink=""
                            webSiteLink=""
                            level="level5"
                        />

                    </View>
                </ScrollView>
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
        backgroundColor: "#F4DFC8",
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: "center",
    },
    content: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 50
    },
    levelHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    }
});

export default QuizScreen;
