import styled, { css } from "styled-components/macro"

export const Layout = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  padding: 50px 35px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
`

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 50px;
  
  img {
    max-width: 250px;
    width: 100%;
    height: auto;
  }
  @media(max-width: 600px) {
    flex-direction: column-reverse;
    gap: 40px;
  }
`

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 40px;


`

export const CardContainer = styled.div<CardContainerProps>`
    ${({backgroundImage, color}) => css`
      background-image: url('${backgroundImage}');
      border-radius: 10px;
      padding: 35px;
      position: relative;
      overflow: hidden;
      background-size: cover;
      background-position: center;
      z-index: 10;
      box-shadow:
              0px 1.7px 2.2px rgba(0, 0, 0, 0.07),
              0px 4.1px 5.3px rgba(0, 0, 0, 0.05),
              0px 7.8px 10px rgba(0, 0, 0, 0.042),
              0px 13.8px 17.9px rgba(0, 0, 0, 0.035),
              0px 25.9px 33.4px rgba(0, 0, 0, 0.028),
              0px 62px 80px rgba(0, 0, 0, 0.02)
    ;
      transition: all .25s ease-in;
      
      h2 {
        color: white;
        margin-bottom: 30px;
      }
      
      &::before {
        content:'';
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        position: absolute;
        background: rgba(0,0,0,0.3);
        z-index: -1;
        transition: all .25s ease-in-out;
      }
      
      :hover {
        &::before {
          background: rgba(0,0,0,0);
        }
        box-shadow:
                0px 4px 2.2px rgba(0, 0, 0, 0.11),
                0px 9.5px 5.3px rgba(0, 0, 0, 0.079),
                0px 17.9px 10px rgba(0, 0, 0, 0.066),
                0px 31.9px 17.9px rgba(0, 0, 0, 0.055),
                0px 59.7px 33.4px rgba(0, 0, 0, 0.044),
                0px 143px 80px rgba(0, 0, 0, 0.031)
      ;

      }
      
      a {
        padding: 12px 24px;
        background: white;
        display: inline-block;
        color:black;
        border-radius: 5px;
        transition: .25s ease-in;
        
        &:hover {
          text-decoration: none;
          background: ${color ? color : '#6732ba'};
          color: white;
        }
      }

    `}
  `

export interface CardContainerProps {
  backgroundImage: string,
}
