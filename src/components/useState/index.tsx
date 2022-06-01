import { useState } from "react";

import {
  Container,
  Infos,
} from './style';

export const UseStateExample = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <Container>
      <Infos>
        <p>Clique no botão para aumentar uma unidade: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Clique aqui
        </button>
      </Infos>
    </Container>
  );
};
