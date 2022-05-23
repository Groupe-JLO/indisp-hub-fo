import styled, { css } from "styled-components/macro"

export const AppContainer = styled.section<CardContainerProps>`
    min-height: 90vh;
    background: #0D3842;
    background-size: cover;
    background-position: center;
`

export const Layout = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 1300px;
    padding: 50px 35px;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  z-index: 999;
  position: relative;
  box-shadow: 0 1.7px 2.2px rgba(0, 0, 0, 0.07),
  0 4px 5.3px rgba(0, 0, 0, 0.05),
  0 7.5px 10px rgba(0, 0, 0, 0.042),
  0 13.4px 17.9px rgba(0, 0, 0, 0.035),
  0 25.1px 33.4px rgba(0, 0, 0, 0.028),
  0 60px 80px rgba(0, 0, 0, 0.02);
  background: white;
`

export const HeadingContainer = styled.div`
  display: flex;
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  align-items: center;
  padding: 20px 35px;
  box-sizing: border-box;
  justify-content: space-between;
  
  h1 {
    margin: 0;
  }

  img {
    max-width: 250px;
    max-height: 100px;
    width: auto;
    height: auto;
  }

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    gap: 40px;
  }
`

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 40px;


`

export const CardContainer = styled.div<CardContainerProps>`
  ${({ backgroundCardImage, color }) => css`
    background-image: url('${backgroundCardImage}');
    border-radius: 10px;
    padding: 60px;
    display: flex;
    gap: 30px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    z-index: 10;
    box-shadow: 0px 1.7px 2.2px rgba(0, 0, 0, 0.07),
    0px 4.1px 5.3px rgba(0, 0, 0, 0.05),
    0px 7.8px 10px rgba(0, 0, 0, 0.042),
    0px 13.8px 17.9px rgba(0, 0, 0, 0.035),
    0px 25.9px 33.4px rgba(0, 0, 0, 0.028),
    0px 62px 80px rgba(0, 0, 0, 0.02);
    transition: all .25s ease-in;

    @media (max-width: 950px) {
      padding: 25px;
      flex-direction: column-reverse;
    }



    &::before {
      content: '';
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      position: absolute;
      background: rgba(0, 0, 0, 0.3);
      z-index: -1;
      transition: all .25s ease-in-out;
    }

    :hover {
      &::before {
        background: rgba(0, 0, 0, 0);
      }

      box-shadow: 0px 4px 2.2px rgba(0, 0, 0, 0.11),
      0px 9.5px 5.3px rgba(0, 0, 0, 0.079),
      0px 17.9px 10px rgba(0, 0, 0, 0.066),
      0px 31.9px 17.9px rgba(0, 0, 0, 0.055),
      0px 59.7px 33.4px rgba(0, 0, 0, 0.044),
      0px 143px 80px rgba(0, 0, 0, 0.031);

    }

    a {
      padding: 12px 24px;
      background: white;
      display: inline-block;
      color: black;
      border-radius: 5px;
      transition: .25s ease-in;

      &:hover {
        text-decoration: none;
        background: ${color ? color : "#6732ba"};
        color: white;
      }
    }

  `}
`

export const CardContent = styled.div`
  flex: 4;

  h2 {
    color: white;
    margin-bottom: 30px;
  }

  p {
    font-size: 18px;
    color: white;
    margin-top: 15px;
    margin-bottom: 40px;
  }
`

export const CardLogo = styled.div`
  flex: 3;
  img {
    max-width: 400px;
    width: 100%;
  }
`

export interface CardContainerProps {
  backgroundCardImage?: string,
}
