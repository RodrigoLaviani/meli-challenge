import './App.scss';
import Header from './components/header/Header';
import Breadcrumbs from './components/breadcrumbs/Breadcrumbs';
import SearchResult from './components/searchResult/SearchResult';
import Container from './components/container/Container';
import ItemDetail from './components/itemDetail/ItemDetail';
import { Route, Routes } from 'react-router-dom';

const componentWithContainer = (component) => {
  return(
    <Container>
      {component}
    </Container>
  )
}

const App = () => {
  return (
    <main className="App">
          <Header></Header>
          <Breadcrumbs></Breadcrumbs>
          <Routes>
            <Route exact path="/" element={null} />
            <Route exact path={`/items`} element={componentWithContainer(<SearchResult/>)} />
            <Route exact path="/items/:id" element={componentWithContainer(<ItemDetail/>)} />
          </Routes>
    </main>
  );
}

export default App;
