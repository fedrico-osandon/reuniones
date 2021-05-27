import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './container/ItemDetailContainer'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from './Navbar'
import Formulario from './Form'


function App() {
  return (
    
    <BrowserRouter>
      
      <NavBar/>

      <Switch>
      
        <Route path="/" exact >
        </Route>

        <Route path="/reuniones" exact>
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
