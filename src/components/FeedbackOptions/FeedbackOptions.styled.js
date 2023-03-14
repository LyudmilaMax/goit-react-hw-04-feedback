import styled from 'styled-components';

export const BoxButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 30px 0;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 6px 12px;
  text-align: center;
  line-height: 1.63;
  font-weight: 500;
  font-size: 16px;
  border: 1px solid grey;
  border-radius: 4px;
  color: black;
  background: #f5f4fa;
  box-shadow: rgb(164 156 156) 1px 1px 3px 1px;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #35bcb7;
    color: #f5f4fa;
  }
`;
