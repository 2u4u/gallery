import React, { ReactElement } from 'react';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './store';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const render = (ui: ReactElement, renderOptions?: RenderOptions) => {
  const Wrapper: React.FC = ({ children }) => (
    <Provider store={store}>
      {children}
    </Provider>
  );
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
