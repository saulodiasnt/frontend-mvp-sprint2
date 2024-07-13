import styled from "styled-components";

export const Link = styled.a`
  flex: 0 0 auto;
  margin-right: 16px;
  width: 200px;
  height: 300px;
  background-color: #ccc;
  border-radius: 8px;

  img {
    object-fit: contain;
    margin: 0 10px;
    cursor: pointer;
    transition: 0.4s;
    border-radius: 2px;
    max-height: 300px;
    transition: transform 0.3s ease;
    display: block;
    &:hover {
      transform: scale(1.1);
      position: absolute;
      z-index: 10;
    }
  }
`;
