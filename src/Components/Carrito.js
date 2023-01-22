import React from "react";
import {
  Badge,
  Button,
  Popover,
  PopoverBody,
  PopoverHeader,
  Table,
} from "reactstrap";
import { ListaCarrito } from "../Data/ListaCarrito.json";

class Carrito extends React.Component {
  constructor() {
    super();
    this.state = {
      popoverOpen: false,
      ListaCarrito
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({
      popoverOpen: !prevState.popoverOpen,
    }));
  }

    Totales()
  {
      var Total = 0;
      this.state.ListaCarrito.map((ListaCarrito, i) =>{
        Total += ListaCarrito.value;
        return Total;
      });
      return Total;
  }

  render() {
    const ArrayCarrrito = this.state.ListaCarrito.map((ListaCarrito, i) => {
        return (
          <tr>
            <td>{(i += 1)}</td>
            <td>{ListaCarrito.title}</td>
            <td>{Intl.NumberFormat('es-CL').format(ListaCarrito.value)}</td>
          </tr>
        );
      });
    return (
      <div>
        <Button id="Summary" onClick={this.toggle} color="info">
          <span className="material-icons">shopping_cart</span>
          <Badge id='CountItems' color="secondary">{ListaCarrito.length}</Badge>
        </Button>
        <Popover
          placement="bottom"
          isOpen={this.state.popoverOpen}
          target="Summary"
          toogle={this.toggle}
        >
          <PopoverHeader>Sumario</PopoverHeader>
          <PopoverBody>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Producto</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>{ArrayCarrrito}</tbody>
              <tfoot>
                <tr>
                  <td>Total:</td>
                  <td></td>
                  <td><b>{Intl.NumberFormat('es-CL').format(this.Totales())}</b> CLP</td>
                </tr>
              </tfoot>
            </Table>
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}

export default Carrito;
