import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";

import { SIDEBAR_NODE_TREE } from "../mock/data";

export default function Sidebar(props) {
  return (
    <div className="flex flex-col fixed min- w-64 h-full bg-gray-800 gap-8">
      <StyledNavLink to="/">Home</StyledNavLink>
      <div>
        {SIDEBAR_NODE_TREE.map((node) => (
          <SidebarNode key={node.location} node={node} />
        ))}
      </div>
    </div>
  );
}

const SidebarNode = ({ node, depth = 1, ...props }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <>
      <CustomLink
        node={node}
        depth={depth}
        expanded={expanded}
        onClick={() => setExpanded((prev) => !prev)}
      >
        {node.label}
      </CustomLink>

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

const CustomLink = (props) => {
  const { node, expanded, depth, onClick } = props;
  let router = useRouter();

  console.log("router: ", router);

  const isExact: boolean = node.location === router?.pathname;

  return (
    <StyledNodeHeader
      expanded={expanded}
      depth={depth}
      onClick={onClick}
      isExact={isExact}
    >
      <div style={{ width: "10px" }}>{node.nodes && <FaChevronRight />}</div>
      <Link href={node.location} passHref>
        <StyledNavLink>{props.children}</StyledNavLink>
      </Link>
    </StyledNodeHeader>
  );
};

const StyledNodeHeader = styled.div.attrs((props) => ({
  className: `${props.isExact && "bg-gray-600"}`,
}))<{
  expanded: boolean;
  depth: number;
}>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-left: ${({ depth }) => depth * 0.5}rem;

  svg {
    color: white;
    font-size: 10px;
    transform: ${({ expanded }) =>
      expanded ? "rotate(90deg)" : "rotate(0deg)"};
    transition: all 0.25s;
  }
`;

export const StyledNavLink = styled.a.attrs({
  className: "text-gray-400",
})`
  display: inline-block;
  width: 100%;
  &.active {
    color: white;
  }
`;
