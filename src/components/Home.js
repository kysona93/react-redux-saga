import React from "react";
import { connect } from "react-redux";
import { Row, Col } from 'react-bootstrap';
import Card from './card.js';
import * as actions from './../actions';
var $ = require("jquery");

// Home page component
class Home extends React.Component {
  constructor(props){
    super(props);
    $(document).scroll(function(){
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            //alert("reach buttom");
            //this.props.loadProducts();
        }
    });

  }
  componentWillMount(){
    //console.log("componentWillMount");
    this.props.loadProducts();
  }
  // render
  render() {
    return (
      <div className="page-home">
        <Row>
          {this.props.products.map((product, index) => 
            <Col xs={12} sm={6} md={3} lg={3} key={product.id} >
              <Card name={product.name} location={product.location} discountPrice={product.dis_price} originalPrice={product.ori_price} />
            </Col> )
          }
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state){
  return ({
    products: state.products
  })
}

export default connect(mapStateToProps, actions)(Home);
