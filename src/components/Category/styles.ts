import styled from "styled-components";

export const Title = styled.h3`
  font-size: 23px;
  margin: 10px 0 10px 1.9rem;
  text-transform: uppercase;
`;

export const List = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 20px 0;

  & > div {
    width: 100%;
    flex: 0 0 auto;
    margin-right: 16px;
    height: 300px;
    border-radius: 8px;

    &:last-child {
      margin-right: 0;
    }
  }

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const Wrapper = styled.div`
  margin-top: 1rem;
  position: relative;
  margin-top: -4rem;
  padding: 2rem 0;
  padding-left: 1rem;
  z-index: 1;
`;
