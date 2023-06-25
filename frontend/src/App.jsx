import './App.scss';
import Header from './components/header/Header';
import Breadcrumbs from './components/breadcrumbs/Breadcrumbs';
import SearchResult from './components/searchResult/SearchResult';
import Container from './components/container/Container';
import ItemDetail from './components/itemDetail/ItemDetail';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSearch } from './shared/hooks/useSearch';

const componentWithContainer = (component) => {
  return(
    <Container>
      {component}
    </Container>
  )
}

const App = () => {
  const { search, searchItemDetail, items, categories } = useSearch();

  const getItemDetail = async (itemId) => {
    return await searchItemDetail(itemId);
  }

  const router = createBrowserRouter([
    {
      path: '',
      element: <></>,
    },
    {
      path: '/items',
      element: componentWithContainer(<SearchResult items={items}/>)
    },
    {
      path: '/items/:id',
      element: componentWithContainer(<ItemDetail/>),
      loader: async ({ params }) => getItemDetail(params.id)
    }
  ]);

  return (
    <main className="App">
          <Header search={(e) => search(e)}></Header>
          <Breadcrumbs categories={categories}></Breadcrumbs>
          <RouterProvider router={router} />
    </main>
  );
}

export default App;
