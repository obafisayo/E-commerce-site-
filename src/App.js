import './App.css';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import CartContextProvider from './contexts/cartcontext';
import WishContextProvider from './contexts/wishcontext';
import Router from './routes/Routes';

function App() {
  return (
    <>
      <WishContextProvider>
        <CartContextProvider>
          <Router />
          <ScrollToTop />
        </CartContextProvider>
      </WishContextProvider>
    </>
  );
}

export default App;
