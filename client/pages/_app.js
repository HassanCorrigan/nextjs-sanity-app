import { StoreProvider } from 'context/StoreContext';
import 'styles/global.css';

const App = ({ Component, pageProps }) => {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
};

export default App;
