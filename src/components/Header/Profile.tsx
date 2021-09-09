import {Flex, Box,Avatar,Text} from '@chakra-ui/react'

interface ProfileDataProps{
  showProfileData: boolean
}

export function Profile({showProfileData}: ProfileDataProps) {
  return (
    <Flex align="center">
      {showProfileData && (<Box textAlign="right" mr="4">
        <Text>Levy Chacon</Text>
        <Text color="gray.300" fontSize="small">
          levychacon@yahoo.com
        </Text>
      </Box>

      )}
      <Avatar
        size="md"
        name="Levy Chacon"
        
      />
    </Flex>
  );
}
