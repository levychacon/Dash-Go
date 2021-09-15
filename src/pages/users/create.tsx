import {
  Box,
  Flex,
  Divider,
  Heading,
  VStack,
  SimpleGrid,
  HStack,
  Button,
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/Sidebar";
import { Input } from "../../components/form/input";
import Link from "next/link";
import {api }from '../../services/api'
import { useForm, SubmitHandler} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "react-query";
import { useRouter } from "next/router";
import { queryClient } from "../../services/queryClient";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "No mínimo 6 caracteres "),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref("password")], "As senhas precisam ser iguais"),
});

export default function CreateUser() {
  const router = useRouter()

  const createUser = useMutation(async(user:CreateUserFormData)=>{
    const response = await api.post('users',{
      user:{
        ...user,
        created_at: new Date()
      }
    })

    return response.data.user
  },{
    onSuccess:()=>{
      queryClient.invalidateQueries('users');
    }

  });

  

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });
  const { errors } = formState;
  const handleCreateUser: SubmitHandler<CreateUserFormData>=async(values)=>{
    await createUser.mutateAsync(values)

    router.push('/users')

  }
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />
        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bgColor="gray.800"
          p={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading fontWeight="normal" size="lg">
            Criar usuário
          </Heading>

          <Divider />

          <VStack spacing="8" mt="4">
            <SimpleGrid minChildWidth="240px" width="100%" spacing={["6", "8"]}>
              <Input
                name="name"
                label="Nome completo"
                {...register("name")}
                error={errors.name}
              />
              <Input
                name="email"
                label="E-mail"
                type="email"
                {...register("email")}
                error={errors.email}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" width="100%" spacing={["6", "8"]}>
              <Input
                name="password"
                label="Senha"
                type="password"
                {...register("password")}
                error={errors.password}
              />
              <Input
                name="password_confirmation"
                label="Confirmação da senha"
                type="password"
                {...register("password_confirmation")}
                error={errors.password_confirmation}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button colorScheme="whiteAlfa" >Cancelar</Button>
              </Link>

              <Button type="submit" colorScheme="pink" isLoading={formState.isSubmitting}>Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
