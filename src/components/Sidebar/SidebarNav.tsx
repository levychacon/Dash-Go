import { NavSection } from "./NavSection";
import { NavLink } from "./NavLink";
import {Stack} from '@chakra-ui/react';
import {
    RiDashboardLine,
    RiContactsLine,
    RiInputMethodLine,
    RiGitMergeLine,
  } from "react-icons/ri";
export function SidebarNav(){
    return(
        <Stack spacing="12" align="flex-start">

        <NavSection title="GERAL">
          <NavLink title="Dashboard" href="/dashboard" icon={RiDashboardLine} />
          <NavLink title="Usuários" href="/users" icon={RiContactsLine} />
        </NavSection>

        <NavSection title="AUTOMAÇÃO">
          <NavLink title="Formulários" href="/forms" icon={RiInputMethodLine} />
          <NavLink title="Automação" href="/automation" icon={RiGitMergeLine} />
        </NavSection>
        
      </Stack>
    )
}