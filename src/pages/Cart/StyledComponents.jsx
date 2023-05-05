import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 14px;
  flex-direction: column;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
`;

const EmptyCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 115px);
`;

export { Container, EmptyCart };
