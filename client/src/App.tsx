import { ApolloProvider } from '@apollo/client';
import { Route, Routes } from 'react-router-dom';
import { apolloClient } from './lib/graphql/queries';
import HomePage from './pages/HomePage';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <main className="section">
        <Routes>
          <Route index path="/"
            element={<HomePage />}
          />
        </Routes>
      </main>
    </ApolloProvider>
  );
}

export default App;
