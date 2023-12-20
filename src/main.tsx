import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom/client';
import { PrimeReactProvider } from 'primereact/api';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { App } from './app/app';

import { store } from './redux/store';

// import 'primereact/resources/themes/saga-purple/theme.css';
// import 'primereact/resources/themes/lara-dark-purple/theme.css';
// import 'primereact/resources/themes/md-dark-deeppurple/theme.css';
// import 'primereact/resources/themes/mdc-dark-deeppurple/theme.css';
// import 'primereact/resources/themes/vela-purple/theme.css'; // Добро е! Бял текст с тъмни инпути
import 'primereact/resources/themes/arya-purple/theme.css'; // Добро е! Бял текст с черни инпути
// import 'primereact/resources/themes/bootstrap4-dark-purple/theme.css';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const primeReactValues = {
  ripple: true,
  cssTransition: true,
};

root.render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <PrimeReactProvider value={primeReactValues}>
            <App />
          </PrimeReactProvider>
        </Router>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
