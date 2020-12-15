import './styles/ImagesList.css'
import React from 'react';
import ImageCard from './ImageCard';



const ImageList = (props) => {
    /* Função map percorre todo um array e traz cada instancia do array separadamente e mostrada através do parametro informado:
    images.map((image) => {}); */

    const images = props.images.map((image) => {
        return (
            <div className="col-12 col-lg-6" key={image.id} style={{ padding: '30px 15px' }}>
                <ImageCard image={image} />
            </div>
        );
    });

    /*Const images pode ser desconstruido e escrito da forma abaixo, isso por que a prop imagem se repete diversas vezes

    const images = props.images.map(({ description, id, urls }) => {
        return <img alt={description} key={id} src={urls.regular} />
    });

    */
    return(
        <div className="imagesList grid">
            {images}
        </div>
    )
}

export default ImageList;