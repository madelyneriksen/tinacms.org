import React from 'react'
import styled from 'styled-components'
import { LinkNav } from '../ui'
import { TinaWordmark } from '../logo'
import TwitterIconSvg from '../../public/svg/twitter-icon.svg'
import GithubIconSvg from '../../public/svg/github-icon.svg'
import { EmailForm } from '../forms'

export const Footer = styled(({ ...styleProps }) => {
  return (
    <div {...styleProps}>
      <FooterTop>
        <TinaWordmark />
        <LinkNav />
        <FooterSocial>
          <a href="https://twitter.com/tina_cms" target="_blank">
            <TwitterIconSvg />
          </a>
          <a
            className="github"
            href="https://github.com/tinacms/tinacms"
            target="_blank"
          >
            <GithubIconSvg />
          </a>
        </FooterSocial>
      </FooterTop>
      <FooterBottom>
        <FooterForm>
          <span>Stay in touch 👉</span>
          <EmailForm isFooter />
        </FooterForm>
        <Footnote>
          <a
            href="https://github.com/tinacms/tinacms/blob/master/LICENSE"
            target="_blank"
          >
            License
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <p>
            &copy; TinaCMS 2019–
            {new Date().getFullYear()}
          </p>
        </Footnote>
      </FooterBottom>
    </div>
  )
})``

const FooterSocial = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a {
    display: flex;
    align-items: center;
  }

  svg {
    width: 2rem;
    height: auto;
    fill: white;
    margin-left: 1rem;
  }
`

const FooterForm = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 1.5rem;

  span {
    margin: 0.5rem 1rem 0.5rem 0;
    white-space: nowrap;
    font-size: 1.25rem;
    line-height: 1;
  }

  @media (min-width: 550px) {
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    margin-bottom: 0;
  }
`

const FooterTop = styled.div`
  display: grid;
  grid-gap: 1rem;
  padding: 2rem 2rem;
  background-color: var(--color-primary);
  align-items: start;
  grid-template-areas: 'logo social' 'nav nav';

  @media (min-width: 800px) {
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-areas: 'logo nav social';
  }

  ${TinaWordmark} {
    grid-area: logo;
    margin-bottom: 1rem;
  }

  ${LinkNav} {
    grid-area: nav;
  }

  ${FooterSocial} {
    grid-area: social;
  }
`

const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.25rem 2rem;
  background-color: var(--color-primary-dark);

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`

const Footnote = styled.span`
  display: flex;
  color: white;
  font-size: 1rem;

  p {
    color: white;
    margin: 0;
    font-size: 1rem;
    opacity: 0.65;
  }

  a {
    text-decoration: none;
    color: white;
    opacity: 0.65;
    &:hover {
      color: white;
      opacity: 1;
    }
  }
`
