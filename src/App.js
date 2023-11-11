import { Route, Switch } from "wouter";
import HomeScreen from "./screen/HomeScreen";
import CalculadoraScreen from "./screen/CalculadoraScreen";
import ListaScreen from "./screen/ListaScreen";

//navegação vai ser camada 4
function App() {
  return (
    <Switch>
      <Route path="/" component={HomeScreen} />
      <Route path="/calculadora" component={CalculadoraScreen}/>
      <Route path="/lista" component={ListaScreen}/>
    </Switch>
  );
}

export default App;
