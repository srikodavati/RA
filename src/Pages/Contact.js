import {Heading, Text, Box} from "@chakra-ui/react"
import { VStack, Input, useToast ,Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AlertPop from "./AlertPop";
import Stats from "./Stats";
import '../Style.css';

export default function Contact() {
    

    const toast = useToast();
    const [data, setData] = useState();

    const {
    register,
    handleSubmit,
    formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        //console.log(data);
    toast({
         title: "Submitted!",
         status: "success",
        duration: 3000,
        isClosable: true
    });

  setData(data);
    };
    console.log(data);
    console.log(errors)
    return (
        <div class="container1">
    <Box >
    
    <Heading as="h1" color = "white">Developers Deck</Heading>
    <Text color = "white">Ask any question you have 🔥</Text>
        <VStack mt={8} spacing="3px">
        <Box   >
        <form onSubmit={handleSubmit(onSubmit)}>
        <Box m={[2, 3]} display="flex" alignItems="center" justifyContent="space-between"  borderRadius='md' borderColor='Black' >
        <VStack>

          <Input
            type="text"
            placeholder="First name"
            {...register("firstname", {
              required: "Please enter first name",
              minLength: 3,
              maxLength: 80
            })}
          />
          {errors.firstname && <AlertPop title={errors.firstname.message} />}
          <Input
            type="text"
            placeholder="Last name"
            {...register("lastname", {
              required: "Please enter Last name",
              minLength: 3,
              maxLength: 100
            })}
          />
        {errors.lastname && <AlertPop title={errors.lastname.message} />}
          <Input
            type="text"
            placeholder="Question"
            {...register("Question", {
              required: "Please enter the Question",
            })}
          />
          {errors.Question && <AlertPop title={errors.Question.message} />}

          <Button
            borderRadius="md"
            bg="cyan.600"
            _hover={{ bg: "cyan.200" }}
        
            colorScheme='teal' 
            variant='outline'
            type="submit"
          >
            Submit
          </Button>
          
        </VStack>
        </Box>
      </form>
    <Box  m={[2, 3]} display="flex" alignItems="center" justifyContent="space-between"  >
      {data && (
        <Stats
          Firstname={data.firstname}
          Lastname={data.lastname}
          Question={data.Question}
        />
      )}
      </Box>
        </Box>
        </VStack>
    </Box>
    </div>
    );
}
