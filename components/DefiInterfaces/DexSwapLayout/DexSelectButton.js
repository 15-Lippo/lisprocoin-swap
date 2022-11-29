import React from "react";
import {
  Button,
  Select,
  FormControl,
  Radio,
  RadioGroup,
  Stack,
  Flex,
  Box,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";

export default function SelectButton({ getChain }) {
  const BoxBgColor = useColorModeValue("gray.200", "#243036");
  const BoxBorderColor = useColorModeValue("gray.200", "gray.500");
  const ButtonColorMode = useColorModeValue("#319795", "#00AF91");
  const ButtonColorMode1 = useColorModeValue("gray.300", "#303E46");
  const ButtonBorderColorMode1 = useColorModeValue("gray.300", "gray.600");

  // const ref = useRef(null);
  // const myfunc = () => {
  //   console.log("I was activated 1 seconds later");
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     ref.current.click();
  //   }, 1);
  // }, []);

  useForm();

  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      mt={24}
      right={0}
      zIndex="sticky"
      maxH="550"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={BoxBgColor}
      borderColor={BoxBorderColor}
      borderRightWidth="1px"
      w="60"
      borderRadius="xl"
      shadow="lg"
    >
      <Stack direction="column">
        <form onSubmit={getChain}>
          <FormControl>
            <Stack mt={2} mx={2} spacing={1} direction="row">
              <Select
                textAlign="center"
                maxW={118}
                name="chainId"
                type="number"
                borderWidth={1}
                borderColor={ButtonBorderColorMode1}
                bg={ButtonColorMode1}
                shadow="lg"
              >
                <option name="chainId" value="1">
                  Ethereum
                </option>
                <option name="chainId" value="137">
                  Polygon
                </option>
                <option name="chainId" value="43114">
                  Avalanche
                </option>
                <option name="chainId" value="56">
                  Binance
                </option>
                <option name="chainId" value="1284">
                  Moonbeam
                </option>
                <option name="chainId" value="42161">
                  Arbitrum
                </option>
                <option name="chainId" value="250">
                  Fantom
                </option>
              </Select>
              <Button
                borderRadius="lg"
                right="0"
                bgColor={ButtonColorMode}
                type="submit"
                textTransform="uppercase"
                shadow="lg"
                // ref={ref}
                // onClick={myfunc}
              >
                analyse
              </Button>
            </Stack>
          </FormControl>

          <Flex justifyContent="space-around">
            <RadioGroup
              my={5}
              textAlign="left"
              maxW={150}
              name="dexName"
              type="number"
              defaultValue="uniswap_v2"
            >
              <Text
                mb={2}
                color={"gray.400"}
                letterSpacing={0.3}
                fontSize="md"
                fontWeight="thin"
                decoration="lightblue"
                textTransform="uppercase"
              >
              
  );
}
