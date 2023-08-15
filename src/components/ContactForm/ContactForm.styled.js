import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  background-color: rgba(199, 195, 195, 0.1);
  border: 3px solid #070808;
  border-radius: 4px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: #070808;
  font-size: 20px;
`;

export const Input = styled.input`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
`;

export const Button = styled.button`
  padding: 6px 8px;
  font: inherit;
  cursor: pointer;
  border-radius: 20px;
  border: 2px solid #070808;
  color: #070808;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

}
`;