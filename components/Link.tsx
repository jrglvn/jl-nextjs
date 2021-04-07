import NextLink from "next/link";
import { ChakraProps, Link as ChakraLink } from "@chakra-ui/react";
import React from "react";

export default function Link(
  props: { href: string; children?: React.ReactNode } & ChakraProps
) {
  const { children, href, ...rest } = props;

  return (
    <NextLink href={href} passHref>
      <ChakraLink
        _hover={{ textDecor: "none", opacity: ".8" }}
        _focus={{ outline: "none" }}
        transitionDuration=".25"
        {...rest}
      >
        {children}
      </ChakraLink>
    </NextLink>
  );
}
