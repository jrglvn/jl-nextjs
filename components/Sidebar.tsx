import React, { useState } from "react";
import { useRouter } from "next/router";
import { Box, Flex } from "@chakra-ui/react";
import Link from "../components/Link";
import { ChevronRightIcon } from "@chakra-ui/icons";

import { SIDEBAR_NODE_TREE } from "../mock/data";

export default function Sidebar(props) {
  return (
    <Flex flexDirection="column" w="64" h="full" bg="gray.800">
      <Flex flexDirection="column">
        {SIDEBAR_NODE_TREE.map((node) => (
          <SidebarNode key={node.location} node={node} />
        ))}
      </Flex>
    </Flex>
  );
}

const SidebarNode = ({ node, depth = 1, ...props }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <>
      <SidebarLink
        node={node}
        depth={depth}
        expanded={expanded}
        onClick={() => setExpanded((prev) => !prev)}
      />

      {expanded && node.nodes && (
        <div>
          {node?.nodes?.map((node) => (
            <SidebarNode key={node.location} node={node} depth={depth + 1} />
          ))}
        </div>
      )}
    </>
  );
};

const SidebarLink = (props) => {
  const { node, expanded, depth, onClick } = props;
  let router = useRouter();

  const isExact: boolean = node.location === router?.asPath;

  return (
    <Flex
      pl={depth * 2}
      bg={isExact ? "gray.600" : "inherit"}
      alignItems="center"
    >
      {node.nodes ? (
        <ChevronRightIcon
        color="white"
        w="4"
        h="4"
        onClick={onClick}
        transform={expanded && "rotate(90deg)"}
        transitionDuration=".5s"
        />
      ) : (
        <Box w="4" />
      )}
      <Link color="gray.400" href={node.location} ml="1">
        {node.label}
      </Link>
    </Flex>
  );
};
