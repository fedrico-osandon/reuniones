import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './container/ItemDetailContainer'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from './Navbar'
import Formulario from './Form'


function App() {
  return (
    
    <BrowserRouter>
      <Switch>
        
        <Route path="/" exact>
          <ItemDetailContainer />  
        </Route>

        <Route path="/reuniones/:id">
          <Formulario/>          
        </Route>
      </Switch>  
    
    </BrowserRouter>   
    
    
  );
}

export default App;
