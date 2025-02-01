import React from "react";
import styled from "styled-components";
import { WEIGHTS } from "../../constants";

function FlipNavLink({ children, ...delegated }) {
  return (
    <Wrapper>
      <NavLink {...delegated}>{children}</NavLink>
      <HiddenNavLink {...delegated}>{children}</HiddenNavLink>
    </Wrapper>
  );
}

const NavLink = styled.a`
  display: inline-block;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.normal};
`;

const HiddenNavLink = styled(NavLink)`
  font-weight: ${WEIGHTS.bold};
  position: absolute;
  top: 100%;
  left: 0;
`;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  & a {
    transition: transform 500ms;
  }
  &:hover a {
    transform: translateY(-100%);
    transition: transform 500ms;
  }
  &:first-of-type a {
    color: var(--color-secondary);
  }
`;

export default FlipNavLink;
