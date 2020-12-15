import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImagesList';

class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			images: []
		}
	}

	onSearchSubmit = async (term) =>{
		const response = await axios.get('https://api.unsplash.com/search/photos', {
			params: { query: term },
			headers: {
				Authorization: 'Client-ID sTbtmRmXWMgEq7iBbq7i-M6lAc4YrWDWJkiLVeOrvmE'
			}
		})/* Essa é uma forma de mostrar os dados retornados da pesquisa da API, 
		.then((response) => {
			console.log(response.data.results); 
		})*/
		this.setState({ images: response.data.results });
	}

	render(){
		console.log(this.state.images)
		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col-12 col-lg-12">
							<SearchBar onSubmit={ this.onSearchSubmit } />
							{this.state.images.length ? 
								<div className="mt-5">
									<p>A Procura Retornou: {this.state.images.length} imagens</p>
								</div> :
								''
							}
						</div>
					</div>
				</div>
				<div className="container-fluid">
					<div className="row">
						<ImageList images={this.state.images} />
					</div>
				</div>	
			</div>
		);
	}
}

export default App;
