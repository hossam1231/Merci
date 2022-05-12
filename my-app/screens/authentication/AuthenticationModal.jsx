import { Box, VStack, Text, Button, HStack } from "native-base";
import React, { useState } from "react";

const federationProviders = [
	{
		icon: "",
		name: "google",
	},
	{
		icon: "",
		name: "apple",
	},
	{
		icon: "",
		name: "amazon",
	},
];

const AuthenticationModal = () => {
	return (
		<VStack px="2" safeArea alignItems="center">
			<Text fontSize="md">Almost there</Text>
			<Text>Sign up or log in to continue.</Text>
			<Text>It only takes a minute.</Text>

			<FederationLogin />

			<Text>or</Text>

			<Button variant="ghost">Continue with email</Button>
			<TermsConditions />
		</VStack>
	);
};

export const TermsConditions = () => {
	return (
		<>
			<Text fontSize="xs">
				By continuing you agree to out T&Cs. Please also check out our Privacy
				Policy.
			</Text>
			<Text fontSize="xs" mt="1">
				We use your data to offer you a personalised experience and to better
				understand and improve our services. For more information see here.
			</Text>
		</>
	);
};

export const FederationLogin = () => {
	const [providers, setProviders] = useState(federationProviders);

	return (
		<>
			<HStack>
				<Text>Sign in with </Text>
			</HStack>
		</>
	);
};

export default AuthenticationModal;
