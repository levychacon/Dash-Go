import { Flex, useBreakpointValue, Icon, IconButton } from "@chakra-ui/react";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { useSidebarDrawer } from "../contexts/SidebarDrawerContext";
import { RiMenuLine } from "react-icons/ri";

export const Header = () => {
  const { onOpen } = useSidebarDrawer();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      px="6"
      mt="4"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          icon={<Icon as={RiMenuLine} />}
          aria-label="Open Navigation"
          mr="2"
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
        ></IconButton>
      )}
      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
};
