import { StyleSheet } from "react-native";

export const HelpAndSupportPageStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    backgroundColor: "#E5E5E5",
    padding: 10,
    borderRadius: 5,
  },
  questionText: {
    fontWeight: "bold",
    fontSize: 16,
    flex: 1,
  },
  answerContainer: {
    backgroundColor: "#F5F5F5",
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
