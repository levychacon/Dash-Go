import { Flex, Text, Input, Icon, HStack, Box, Avatar } from "@chakra-ui/react";
import {
  RiSearchLine,
  RiUserAddLine,
  RiNotificationLine,
} from "react-icons/ri";
export const Header = () => {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      px="6"
      mt="4"
      align="center"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        Dashgo
        <Text as="span" color="pink.500" ml="1">
          .
        </Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        px="8"
        py="4"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: "gray.400" }}
          px="4"
          mr="4"
        ></Input>
        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      <Flex align="center" ml="auto">
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>
        <Flex align="center">
          <Box textAlign="right" mr="4">
            <Text>Levy Chacon</Text>
            <Text color="gray.300" fontSize="small">
              levychacon@yahoo.com
            </Text>
          </Box>

          <Avatar size="md" name="Levy Chacon" src="http://linkedin.com/levy-chacon.png"/>
        </Flex>
      </Flex>
    </Flex>
  );
};
