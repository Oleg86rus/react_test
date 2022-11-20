import AppLoader from './components/AppLoader'
import { Route } from 'react-router-dom'
import Main_page from './components/main_page/Main_page'

function App() {
  return (
    <div className="container mx-auto">
      <AppLoader>
        <Route path='/' exact component={Main_page} />
      </AppLoader>
    </div>
  );
}

export default App;