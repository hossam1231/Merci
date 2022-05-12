import { Box ,Text , HStack,Input ,Icon,IconButton} from 'native-base'
import React from 'react'
import {
    AntDesign,
    Ionicons,
  } from "@expo/vector-icons";

const Test = () => {
  return (
   <Box safeArea flex="1">

<Box justifyContent="center">
    
   <HStack>
       <IconButton as={<Ionicons name="ios-search" />}/>
       <Text>Search</Text>
   </HStack>

</Box>


   </Box>
  )
}


export const SearchBar = () => {
return(
    <HStack
    mt="5"
    mb="5"
    alignItems="center"
    justifyContent="space-between"
  >
    <Input
      width="80%"
      placeholder="Search"
      variant="filled"
      borderRadius="10"
      py="2"
      px="2"
      borderWidth="0"
      InputLeftElement={
        <Icon
          ml="2"
          size="4"
          color="gray.400"
          as={<Ionicons name="ios-search" />}
        />
      }
    />
    <IconButton
      icon={
        <Icon as={AntDesign} name="ellipsis1" />
      }
      borderRadius="full"
      _icon={{
        color: "white",
        size: "md",
      }}
    />
  </HStack>
)

}




export default Test