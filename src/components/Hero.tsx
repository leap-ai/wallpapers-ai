"use client";

import {
  HStack,
  Heading,
  Image,
  Text,
  VStack,
  useColorMode,
} from "@chakra-ui/react";

export default function Hero() {
  const { colorMode } = useColorMode();

  return (
    <VStack py={24}>
      <Heading textAlign={"center"}>AI generated wallpapers.</Heading>
      <HStack
        as={"a"}
        href={"https://tryleap.ai?ref=wallpapers.fyi"}
        target={"_blank"}
      >
        <Text fontSize={"0.8rem"}>Powered by</Text>
        <Image
          src={`/leap-logo-${colorMode === "dark" ? "white" : "black"}.svg`}
          alt={"Leap"}
          h={4}
        />
      </HStack>
    </VStack>
  );
}
