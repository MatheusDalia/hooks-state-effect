import { GlobalStyle } from './globalStyle';

import {
  UseStateExample,
  UseEffectExample,
  
} from './components';

export const App: React.FC = () => (
  <>
    <GlobalStyle />
    <UseStateExample/>
    <UseEffectExample/>
  </>
);
