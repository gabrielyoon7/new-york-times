import { createGlobalStyle } from 'styled-components';

import { reset } from './reset.ts';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background: #f0f1f4;
  }
`;
