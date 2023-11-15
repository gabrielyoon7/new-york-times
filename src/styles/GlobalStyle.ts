import { createGlobalStyle } from 'styled-components';

import { reset } from './reset.ts';

export const GlobalStyle = createGlobalStyle`
  ${reset}
`;
