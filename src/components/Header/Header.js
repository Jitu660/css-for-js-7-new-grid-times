import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { BREAKPOINTS, QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopIconWrapper>
          <button>
            <Search size={24}/>
          </button>
          <button>
            <Menu size={24} />
          </button>
        </DesktopIconWrapper>
        <Logo />
        <SubscribeWrapper>
          <Button>Subscribe</Button>
          <SubscribeLink>Already a subscriber?</SubscribeLink>
        </SubscribeWrapper>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    margin-bottom: 72px;
    margin-top: 16px;
  }
`;

const DesktopIconWrapper = styled(ActionGroup)`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

const SubscribeWrapper = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    align-self: end;
    justify-self: end;
  }
`;

const SubscribeLink = styled.a`
  color: var(--color-gray-900);
  font-size: ${14/16}rem;
  font-style: italic;
  text-decoration: underline;
`;

export default Header;
