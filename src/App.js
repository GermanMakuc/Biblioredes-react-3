import React from 'react';
import Products from './Components/Products';
import Navegador from './Components/Navegation';
import './App.css';
import {Container, Row} from 'reactstrap';
import {ListaProductos} from './Data/ListaProductos.json';

class App extends React.Component {
  constructor()
  {
    super();
    this.state = {
      ListaProductos
    };
  }
  render() {
    const ArrayComp = this.state.ListaProductos.map(
      (ListaProductos, i) =>
      {
        return (
          <Products
            key={i}
            title={ListaProductos.title}
            imageUrl={ListaProductos.imageUrl}
            description={ListaProductos.description}
            value={ListaProductos.value}
            stock={ListaProductos.stock}
          ></Products>
        );
      }
    );
    return (
      <Container>
        <Navegador titulo='Barra de navegacion'></Navegador>
        <Row>
          {ArrayComp}
        </Row>
      </Container>
    );
  }
}

export default App;
