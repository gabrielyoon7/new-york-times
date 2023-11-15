import type { Preview } from '@storybook/react';
import { GlobalStyle } from '../src/styles/GlobalStyle';
import { withRouter } from 'storybook-addon-react-router-v6';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withRouter,
    (Story) => {
      return (
        <>
          <GlobalStyle />
          <Story />
        </>
      );
    },
  ],
};

export default preview;
