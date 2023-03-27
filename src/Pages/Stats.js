import {
    Heading,
    HStack,
    Stack,
    Stat,
    StatHelpText,
    StatLabel
  } from "@chakra-ui/react";
  import React from "react";
  import '../Style.css';
  
  export default function Stats(props) {
    return (
      <Stat mt={5}>
        <Heading my={2} as="h4" fontSize="20px" color="White">
          Submitted Result
        </Heading>
        <Stack
          p={4}
          borderWidth="3px"
          borderRadius="md"
          direction="column"
          align="flex-start"
        >
          <HStack>
            <StatLabel color="White">Name: {props.Firstname}</StatLabel>
            <StatLabel color="White">{props.Lastname}</StatLabel>
          </HStack>
          <StatHelpText color="White">Question : {props.Question}</StatHelpText>
        </Stack>
      </Stat>
    );
  }
  