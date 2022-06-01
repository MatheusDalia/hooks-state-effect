import axios from "axios";
import { useState, useEffect } from "react";

import {
  Container,
  Infos,
} from './style';

type User = {
  login: string,
  id: number,
  company: string,
}

export const UseEffectExample = () => {
  const [infos, setInfos] = useState<User>({} as User);

  const getInfos = async () => {
    const res = await axios.get('https://api.github.com/users/CaiolBarreto')
    const { data } = res;
    setInfos({
      login: data.login,
      id: data.id,
      company: data.company,
    })
  }

  useEffect(() => {
    getInfos();
  }, [])

  return (
    <Container>
      <Infos>
        <p>Nome: {infos.login}</p>
        <p>ID: {infos.id}</p>
        <p>Company: {infos.company}</p>
      </Infos>
    </Container>
  );
};
