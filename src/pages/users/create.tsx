import {
  Box,
  Flex,
  Divider,
  Heading,
  VStack,
  SimpleGrid,
  HStack,
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
import { SideBar } from "../../components/SideBar";
import { Input } from "../../components/form/input"; 
import { Pagination } from "../../components/Pagination";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

export default function CreateUser() {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />
        <Box flex="1" borderRadius={8} bgColor="gray.800" p="8">
          <Heading fontWeight="normal" size="lg">
            Criar usuário
          </Heading>

          <Divider />

          <VStack spacing="8" mt="4">
            <SimpleGrid minChildWidth="240px" width="100%" spacing="8">
                <Input name="name" label="Nome completo"/>
                <Input name="email" label="E-mail" type="email"/>
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" width="100%" spacing="8">
                <Input name="password" label="Senha" type="password"/>
                <Input name="password_confirmation" label="Confirmação da senha" type="password"/>
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
              <HStack spacing="4">
                  <Button colorScheme="whiteAlfa">Cancelar</Button>
                  <Button colorScheme="pink">Salvar</Button>
              </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
