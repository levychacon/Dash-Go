import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import {
  RiDashboardLine,
  RiContactsLine,
  RiInputMethodLine,
  RiGitMergeLine,
} from "react-icons/ri";
import { NavSection } from "./NavSection";
import { NavLink } from "./NavLink";

export const SideBar = () => {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">

        <NavSection title="GERAL">
          <NavLink title="Dashboard" icon={RiDashboardLine} />
          <NavLink title="Usuários" icon={RiContactsLine} />
        </NavSection>

        <NavSection title="AUTOMAÇÃO">
          <NavLink title="Formulários" icon={RiInputMethodLine} />
          <NavLink title="Automação" icon={RiGitMergeLine} />
        </NavSection>
        
      </Stack>
    </Box>
  );
};
