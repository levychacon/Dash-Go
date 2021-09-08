import {Flex, Box,Avatar,Text} from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
      <Box textAlign="right" mr="4">
        <Text>Levy Chacon</Text>
        <Text color="gray.300" fontSize="small">
          levychacon@yahoo.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Levy Chacon"
        src="http://linkedin.com/levy-chacon.png"
      />
    </Flex>
  );
}
