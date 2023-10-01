import { StyleSheet } from 'react-native';

export const createLoginStyle = (colorScheme) =>
	StyleSheet.create({
		content: {
			display: 'flex',
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
		},
		text: {
			color: colorScheme.colors.text,
		},
		upperContent: {
			position: 'absolute',
			justifyContent: 'center',
			alignItems: 'center',
			top: 5,
			left: 10,
			right: 10,
		},
		inputView: {
			color: colorScheme.colors.text,
			marginTop: 50,
			marginBottom: 50,
			width: 300,
		},
		input: {
			color: colorScheme.colors.text,
			borderBottomColor: colorScheme.colors.border,
			borderBottomWidth: 1.5,
			marginBottom: 25,
			// paddingHorizontal: 50,
			justifyContent: 'flex-start',
		},
		checkboxContainer: {
			flexDirection: 'row',
			backgroundColor: colorScheme.colors.background,
			marginBottom: 15,
		},
		checkboxText: {
			marginLeft: 10,
			width: 250,
			flexWrap: 'wrap',
			marginBottom: 10,
			color: colorScheme.colors.text,
		},
	});
