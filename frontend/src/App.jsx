import './App.scss';
import Header from './components/header/Header';
import Breadcrumbs from './components/breadcrumbs/Breadcrumbs';
import SearchResult from './components/searchResult/SearchResult';
import Container from './components/container/Container';
import ItemDetail from './components/itemDetail/ItemDetail';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useSearch } from './shared/hooks/useSearch';

const componentWithContainer = (component) => {
  return(
    <Container>
      {component}
    </Container>
  )
}

const App = () => {
  const { search, items, categories } = useSearch();
  const location = useLocation()

  return (  
    <main className="App">
      <Header search={(e) => search(e)}></Header>
      {location.pathname !== '/' && <Breadcrumbs categories={categories}></Breadcrumbs>}
      <Routes>
            <Route exact path="/" element={null} />
            <Route exact path={`/items`} element={componentWithContainer(<SearchResult items={items}/>)} />
            <Route exact path="/items/:id" element={componentWithContainer(<ItemDetail/>)} />
      </Routes>
    </main>
  );
}

export default App;
