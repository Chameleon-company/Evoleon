import { StyleSheet } from "react-native";
import Color from '../constants/Colors';

export const HelpAndSupportPageStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.light.BACKGROUND,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 20,
  },
  faqContainer: {
    width: "80%",
    marginBottom: 20,
  },
  questionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Color.light.BACKGROUND,
    padding: 10,
    borderRadius: 5,
  },
  questionText: {
    fontWeight: "bold",
    fontSize: 16,
    flex: 1,
  },
  answerContainer: {
    backgroundColor: Color.light.BACKGROUND,
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  answerText: {
    fontSize: 16,
  },
  icon: {
    marginLeft: 10,
  },
  faqsContainer: {
    alignItems: "center",
  },
});
