import { StyleSheet } from "react-native";

// HelpAndSupportPage styles
export const HelpAndSupportPageStyle = StyleSheet.create({
  // Style for the main container
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  // Style for the title
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 20,
  },
  // Style for the faq container
  faqContainer: {
    width: "80%",
    marginBottom: 20,
  },
  // Style for the question container
  questionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#E5E5E5",
    padding: 10,
    borderRadius: 5,
  },
  // Style for the question text
  questionText: {
    fontWeight: "bold",
    fontSize: 16,
    flex: 1,
  },
  // Style for the answer container
  answerContainer: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  // Style for the answer text
  answerText: {
    fontSize: 16,
  },
  // Style for the icon
  icon: {
    marginLeft: 10,
  },
  // Style for the FAQs container
  faqsContainer: {
    alignItems: "center",
  },
});
