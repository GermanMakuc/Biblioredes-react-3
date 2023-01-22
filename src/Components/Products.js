import React from 'react';
import {CardImg, CardText, CardTitle, CardSubtitle, CardBody, Col, Card } from 'reactstrap';
import './Products.css';
import FichaProductos from './FichaProducto';

class Products extends React.Component {
  render() {
    return (
      <Col md="4">
        <Card className="Card" body outline color="primary">
          <CardImg src={this.props.imageUrl}></CardImg>
          <CardBody>
            <CardTitle>{this.props.title}</CardTitle>
            <CardSubtitle>
              <b>Valor: </b>
              {Intl.NumberFormat('es-CL').format(this.props.value)}
            </CardSubtitle>
            <CardText>{this.props.description}</CardText>
            <FichaProductos props={this.props}></FichaProductos>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default Products;
