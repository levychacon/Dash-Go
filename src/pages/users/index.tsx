import {
  Box,
  Flex,
  Heading,
  Button,
  Icon,
  Table,
  Thead,
  Tr,
  Th,
  Checkbox,
  Tbody,
  Td,
  Text,
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/Sidebar";
import {Pagination} from "../../components/Pagination"
import { RiAddLine, RiPencilLine} from "react-icons/ri";

export default function UsersList() {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />
        <Box flex="1" borderRadius={8} bgColor="gray.800" p="8">
          <Flex mb="8" justifyContent="space-between" align="center">
            <Heading fontWeight="normal" size="lg">
              Usuários
            </Heading>
            <Button
              as="a"
              colorScheme="pink"
              size="sm"
              fontSize="sm"
              leftIcon={<Icon as={RiAddLine} fontSize="20"/>}
            >
              Criar novo usuário
            </Button>
          </Flex>

          <Table colorScheme="whiteAlfa">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>usuário</Th>
                <Th>Data de cadastro</Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">Levy Almeida de Lima Chacon</Text>
                    <Text fontSize="sm" color="gray.300">
                      levychacon@yahoo.com
                    </Text>
                  </Box>
                </Td>
                <Td>04/09/2021</Td>
                <Td>
                  <Button
                    as="a"
                    colorScheme="purple"
                    size="sm"
                    fontSize="sm"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar 
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination/>
        </Box>
      </Flex>
    </Box>
  );
}
