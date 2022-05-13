import {
	Box,
	VStack,
	Text,
	Button,
	HStack,
	SectionList,
	Center,
	Icon,
	View,
	Pressable,
} from "native-base";
import React, { useState } from "react";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import { emailProviders, federationProviders } from "./FederationProviders";

const AuthenticationModal = () => {
	const [page, setPage] = useState(0);
	return (
		<Box px="2" justifyContent="center" alignItems="center" flex="1">
			<TabContent page={page} setPage={setPage} />
			<TabSwitcher page={page} setPage={setPage} />
		</Box>
	);
};

export const TabContent = ({ page, setPage }) => {
	if (page === 0) {
		return (
			<>
				<Text fontSize="md">Almost there</Text>
				<Text>Sign up or log in to continue.</Text>
				<Text>It only takes a minute.</Text>

				<FederationLogin />

				<Text>or</Text>

				<Button variant="ghost" onPressIn={() => setPage(1)}>
					Continue with email
				</Button>
				<TermsConditions />
			</>
		);
	} else if (page === 1) {
		return (
			<>
				<EmailLogin />
			</>
		);
	} else if (page === 3) {
		return (
			// email
			<>
				<Input />
				<Button>Continue</Button>
			</>
		);
	} else if (page === 4) {
		// password
		<>
			<Input />
			<Button>Continue</Button>
		</>;
	}
};

export const TabSwitcher = ({ page, setPage }) => {
	return (
		<Box position="absolute" bottom="10">
			<Pressable onPress={() => setPage(page++)}>
				<Icon as={AntDesign} name="closecircleo" size="lg" />
			</Pressable>
		</Box>
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

export const EmailLogin = () => {
	const [data, setData] = useState(emailProviders);
	return (
		<>
			{data.map(function (item, i) {
				return <EachEmailLogin item={item} key={i} />;
			})}
		</>
	);
};

export const EachEmailLogin = (item) => {
	const { name, icon } = item.item;

	return (
		<>
			<Box
				justifyContent="center"
				alignItems="center"
				shadow="1"
				bg="white"
				m="2"
				mt="2"
				w="100%"
				h="10"
			>
				<Text color="coolGray.800" bold>
					{name}
				</Text>
			</Box>
		</>
	);
};

export const FederationLogin = () => {
	const [data, setData] = useState(federationProviders);
	return (
		<VStack alignItems="center" w="100%">
			{data.map(function (item, i) {
				return <EachFederationLogin item={item} key={i} />;
			})}
		</VStack>
	);
};

export const EachFederationLogin = (item) => {
	const { name, icon } = item.item;

	return (
		<>
			<Box shadow="1" bg="white" m="2" mt="2" w="100%" h="10">
				<HStack px="2" alignItems="center" flex="1" space={3}>
					<Center>
						<Icon as={AntDesign} name={icon} />
					</Center>

					<VStack>
						<Text color="coolGray.800" bold>
							Sign in with {name}
						</Text>
					</VStack>
				</HStack>
			</Box>
		</>
	);
};

export default AuthenticationModal;
