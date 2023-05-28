"use client";

import {
  Button,
  Center,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaImage } from "react-icons/fa";

export default function NotFound() {
  return (
    <Center
      style={{
        height: "calc(100vh - 5rem)",
      }}
    >
      <VStack gap={4} maxW={"sm"} textAlign={"center"}>
        <HStack>
          <FaImage />
          <Heading size={"md"}>404 | Image Not Found</Heading>
        </HStack>
        <Text fontSize={"0.8rem"}>
          The image url you are trying to browse to does not exist.
        </Text>
        <Button as={Link} href={"/"} size={"sm"}>
          View all images
        </Button>
      </VStack>
    </Center>
  );
}
