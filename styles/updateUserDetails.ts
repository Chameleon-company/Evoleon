import { StyleSheet } from "react-native";

export const UserDetailsPageStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  userDetailsForm: {
    marginTop: 50,
    marginBottom: 50,
    width: "80%",
  },
  userDetailsLabel: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  userDetailsInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  userDetailsInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
  },
  userDetailsButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
  },
  userDetailsButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  userDetailsText: {
    fontSize: 16,
    marginBottom: 5,
  },
});
