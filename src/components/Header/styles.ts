import styled from "styled-components";

export const Container = styled.header`

background: var(--yellow);  
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
  width: 80px;
  height: 80px;
  border-radius: 40px;
  }

  span{
    flex: 1;
    flex-direction: row;
    font-size: 1.5rem;
    color: var(--text-title);
    font-weight: 600;
    
  }

  button {
    font-size: 1rem;
    background: var(--yellow-light);
    color: var(--text-title);
    border-radius: 0.25rem;
    padding: 0 2rem;
    border: 0;
    height: 3rem;

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9);
    }
  }
  
`;  