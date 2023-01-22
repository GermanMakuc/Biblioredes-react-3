import React from "react";
import {
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardImg,
} from "reactstrap";
import { ListaCarrito } from '../Data/ListaCarrito.json';
import {ListaProductos } from '../Data/ListaProductos.json';

class FichaProducto extends React.Component {
  constructor(props) {
    super();
    this.state = {
      modal: false,
      ListaCarrito,
      stock : props.props.stock
    };
    this.toggle = this.toggle.bind(this);
    this.Additems = this.Additems.bind(this);
  }
  toggle() {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  }

  Additems() 
  {
      if(this.state.stock !== 0)
      {
        ListaCarrito.push({
            title: this.props.props.title,
            value: this.props.props.value,
          });

          this.setState((stock)=>({
            stock : this.state.stock - 1
        }));

        var String = document.getElementById('CountItems');
        String.innerText = ListaCarrito.length.toString();

      }
      else
        alert('No queda stock para este producto.');

    this.setState((prevState) => ({
        modal: !prevState.modal,
      }));
  }

  StockManager()
  {
    ListaProductos.map();
  }

  render() {
    return (
      <Container>
        <Button onClick={this.toggle}>Ver</Button>
        <Modal isOpen={this.state.modal}>
          <ModalHeader>{this.props.props.title}</ModalHeader>
          <ModalBody>
            <CardImg src={this.props.props.imageUrl}></CardImg>
            <p>El detalle del producto es el siguiente</p>
            {this.props.props.description}
            <p>
              Este producto tiene un valor de <b>{Intl.NumberFormat('es-CL').format(this.props.props.value)}</b> pesos.
            </p>
            <p>
              Existen <b>{this.state.stock}</b> en stock de este producto.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.Additems}>Agregar al Carro</Button>
            <Button onClick={this.toggle}>Cerrar</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}
export default FichaProducto;
