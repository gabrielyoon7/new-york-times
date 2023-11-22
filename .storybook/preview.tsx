import type { Preview } from '@storybook/react';
import { GlobalStyle } from '../src/styles/GlobalStyle';
import { withRouter } from 'storybook-addon-react-router-v6';
import ModalProvider from '../src/components/layout/modal-wrapper/ModalProvider';

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
        <ModalProvider>
          <GlobalStyle />
          <Story />
        </ModalProvider>
      );
    },
  ],
};

export default preview;
