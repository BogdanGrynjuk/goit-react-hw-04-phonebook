import styled from "@emotion/styled";

export const Contact = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 400px;
  padding: 10px 0;
`;

export const Text = styled.p`
  font-size: 20px;
  font-family: 'Roboto', sans-serif;  
  text-transform: capitalize;
`;

export const Button = styled.button`
  padding: 5px;  
  border: 1px solid #000000;
  border-radius: 5px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25),
              0 5px 5px rgba(0, 0, 0, 0.25);
  cursor: pointer;

    &:hover {
      background-color: #b5f5fe;
  }
`;