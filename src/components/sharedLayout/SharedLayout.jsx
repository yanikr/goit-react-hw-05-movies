import { Suspense } from 'react';
import { Link } from '../App.styled';
import { Outlet } from 'react-router-dom';
import { Container, Navigation, Header } from './SharedLayout.styled';
export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Navigation>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
