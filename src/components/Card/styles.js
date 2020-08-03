import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: space-around;
`;

export const CardContainer = styled.div`
  width: 30%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.75);
  & section:nth-child(1) {
    width: 300px;
    height: 300px;
    border: 10px solid;
    border-color: ${(props) => props.color};
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & h1 {
      text-transform: uppercase;
      color: gray;
      margin: 0;
    }
    & h2 {
      margin: 0;
    }
  }
  & section:nth-child(2) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    & > div {
      display: flex;
      justify-content: space-between;
      & div {
        width: 50%;
        display: flex;
        justify-content: space-around;
      }
    }
    & > div {
      & > h3 {
        color: ${(props) => props.color};
      }
      & > h3:nth-child(2) {
        filter: contrast(20%);
      }
      & p:nth-child(2) {
        color: gray;
      }
    }
  }
`;
