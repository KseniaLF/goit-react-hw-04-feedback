import styled from 'styled-components';

export const FeedbackButtons = styled.div`
  margin-bottom: 20px;
  button {
    padding: 5px 15px;
    font-size: 25px;
    border: 2px solid black;
    cursor: pointer;
    margin-right: 10px;
    box-shadow: 0px 0px 5px black;
    border-radius: 8px;
    text-transform: capitalize;
    transition: background-color 200ms;
    :hover {
      background-color: rgb(167, 202, 244);
    }
  }
`;
