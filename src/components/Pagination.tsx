import { Stack, Button, Box } from "@chakra-ui/react";
export function Pagination() {
  return (
    <Stack direction="row" spacing="6" justify="space-between" align="center" mt="8">
        <Box>
            <strong>0</strong>-<strong>10</strong> de <strong>100</strong>
        </Box>
        <Stack direction="row" spacing="2">
        <Button
        colorScheme="pink"
        size="sm"
        fontSize="xs"
        width="4"
        disabled
        _disabled={{
          bgColor: "pink.500",
          cursor: "default",
        }}
      >
        1
      </Button>

      <Button
        size="sm"
        fontSize="xs"
        width="4"
        bgColor="gray.700"
        _hover={{ bgColor: "gray.500" }}
      >
        2
      </Button>

      <Button
        size="sm"
        fontSize="xs"
        width="4"
        bgColor="gray.700"
        _hover={{ bgColor: "gray.500" }}
      >
        3
      </Button>

      <Button
        size="sm"
        fontSize="xs"
        width="4"
        bgColor="gray.700"
        _hover={{ bgColor: "gray.500" }}
      >
        4
      </Button>

        </Stack>
      
    </Stack>
  );
}
