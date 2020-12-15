import React, { Component } from 'react';
import './styles/ImageCard.css'

class ImageCard extends Component {

    constructor(props){
        super(props);
        this.imageRef = React.createRef();
    }

    componentDidMount(){
        console.log(this.imageRef.current.isConnected)
    }

    render(){
        const { description, urls} = this.props.image
        return(
            <div className="dados">
                <img ref={this.imageRef} className="img-fluid" alt={description} src={urls.regular}></img>
                <p>{this.props.image.alt_description}</p>
            </div>
        );
    }
}

export default ImageCard;