import styled from "@emotion/styled";

export const Form = styled.form`  
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 10px;
  width: 400px;
  border: 1px solid #000000;
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  text-transform: capitalize;
  
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;  
`;

export const Input = styled.input`
  margin-top: 10px;
  padding: 5px;
  width: 250px;
  outline: none;
  border: 1px solid #000000;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25),
              0 5px 5px rgba(0, 0, 0, 0.25);
`;

export const Button = styled.button`
  padding: 5px;
  width: 100px;
  border: 1px solid #000000;
  border-radius: 5px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25),
              0 5px 5px rgba(0, 0, 0, 0.25);
  cursor: pointer;

    &:hover {
      background-color: #b5f5fe;
  }
`;