import './App.scss';
import Header from './components/header/Header';
import Breadcrumbs from './components/breadcrumbs/Breadcrumbs';
import SearchResult from './components/searchResult/SearchResult';
import Container from './components/container/Container';
import ItemDetail from './components/itemDetail/ItemDetail';

const App = () => {
  return (
    <main className="App">
          <Header></Header>
          <Breadcrumbs></Breadcrumbs>
          <Container>
            {/* <SearchResult></SearchResult> */}
            <ItemDetail></ItemDetail>
          </Container>
    </main>
  );
}

export default App;
