import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine} from "react-icons/ri";

export const SideBar = () => {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" fontSize="small" color="gray.400">
            GERAL
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" align="center" color="pink.400">
              <Icon as={RiDashboardLine} fontSize="20"/>
                <Text ml="4" fontWeight="medium">
                  Dashboard
                </Text>
              
            </Link>

            <Link display="flex" align="center" color="pink.400">
              <Icon as={RiContactsLine} fontSize="20"/>
                <Text ml="4" fontWeight="medium">
                  Usuários
                </Text>
              
            </Link>
          </Stack>
        </Box>

        <Box>
          <Text fontWeight="bold" fontSize="small" color="gray.400">
            AUTOMAÇÃO
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" align="center" color="pink.400">
              <Icon as={RiInputMethodLine} fontSize="20"/>
                <Text ml="4" fontWeight="medium">
                  Formulários
                </Text>
              
            </Link>

            <Link display="flex" align="center" color="pink.400">
              <Icon as={RiGitMergeLine} fontSize="20"/>
                <Text ml="4" fontWeight="medium">
                  Automação
                </Text>
              
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
