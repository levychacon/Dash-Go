import {  Text, Link, Icon, LinkProps as ChakraLinkProps} from "@chakra-ui/react";
import { ElementType } from "react";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine} from "react-icons/ri";

interface NavLinkProps extends ChakraLinkProps{
    title: string,
    icon:ElementType
}
export function NavLink({title, icon, ...rest}: NavLinkProps){
    return(
        <Link display="flex" align="center" color="pink.400" {...rest}>
        <Icon as={icon} fontSize="20"/>
          <Text ml="4" fontWeight="medium">
            {title}
          </Text>
        
      </Link>
    )
}