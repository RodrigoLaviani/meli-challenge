import './App.scss';
import Header from './components/header/Header';
import BreadCrumbs from './components/breadCrumbs/BreadCrumbs';
import SearchResult from './components/searchResult/SearchResult';
import Container from './components/container/Container';

const App = () => {
  return (
    <main className="App">
          <Header></Header>
          <BreadCrumbs></BreadCrumbs>
          <Container>
            <SearchResult></SearchResult>
          </Container>
    </main>
  );
}

export default App;
