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
  Spinner,
  Td,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/Sidebar";
import { Pagination } from "../../components/Pagination";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Link from "next/link";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { api } from "../../services/api";
import {useUsers} from '../../services/hooks/useUsers'

export default function UsersList() {
  const { data, isLoading, isFetching, error } = useUsers()
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />
        <Box flex="1" borderRadius={8} bgColor="gray.800" p="8">
          <Flex mb="8" justifyContent="space-between" align="center">
            <Heading fontWeight="normal" size="lg">
              Usuários

              {!isLoading && isFetching && <Spinner color="gray.500" size="sm" ml="4"/>}
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                colorScheme="pink"
                size="sm"
                fontSize="sm"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo usuário
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error?(
            <Flex justify="center">
              <Text>Falha ao carregar os dados dos usuários</Text>
            </Flex>
          ): (
            <>
              <Table colorScheme="whiteAlfa">
                <Thead>
                  <Tr>
                    <Th px={["4", "4", "6"]} color="gray.300" width="8">
                      <Checkbox colorScheme="pink" />
                    </Th>
                    <Th>usuário</Th>
                    {isWideVersion && <Th>Data de cadastro</Th>}
                    <Th width="8"></Th>
                  </Tr>
                </Thead>
                <Tbody>
                {data.map(user=>{
                  return(
                    <Tr key={user.id}>
                    <Td px={["4", "4", "6"]}>
                      <Checkbox colorScheme="pink" />
                    </Td>

                    <Td>
                      <Box>
                        <Text fontWeight="bold">
                          {user.name}
                        </Text>
                        <Text fontSize="sm" color="gray.300">
                          {user.email}
                        </Text>
                      </Box>
                    </Td>
                    {isWideVersion && <Td>{user.createdAt}</Td>}
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
                  )
                })}
                </Tbody>
              </Table>
              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
