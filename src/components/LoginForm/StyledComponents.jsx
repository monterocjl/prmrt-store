import styled from "styled-components";

const Container = styled.div`
  height: calc(100vh - 150px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 11px;
`;

const Input = styled.input`
  width: 200px;
  height: 30px;
  padding: 5px 10px;
  border: 1px solid #cccccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  font-weight: 500;
  background: #4da2c2;
  height: 30px;
  color: white;
  border-radius: 5px;
  border: none;
  padding: 19px 10px;
  font-size: 17px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 13px;
`;

export { Container, Form, Input, Button, ErrorMessage };
