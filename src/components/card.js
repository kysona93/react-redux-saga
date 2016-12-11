import React from 'react'; 
import { Thumbnail } from 'react-bootstrap';

export default class Card extends React.Component {
    render(){
        return (
            <div>
                <Thumbnail src="http://localhost:8080/images/cartoon.jpg" alt="242x200">
                    <h3 style={{"fontFamily":"Comic Sans MS","fontSize":"14pt"}}>{this.props.name}</h3>
                    <p style={{"color":"#616161","fontFamily":"Comic Sans MS"}}><i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;{this.props.location}</p>
                    <p style={{"float": "right","color":"green","fontWeight":"bold"}}>
                        $&nbsp;{this.props.discountPrice}  
                    </p>
                    <p>
                        <strike style={{"color":"red"}}>$&nbsp;{this.props.originalPrice}</strike>
                    </p>
                </Thumbnail>
            </div>
        )
    }
}
