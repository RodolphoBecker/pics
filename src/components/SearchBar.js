import './styles/SearchBar.css';
import React, { Component } from 'react';

class SearchBar extends Component {
	state = {
		term: '',
		text: ''
	};

	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state.term)
	};

	onFormChange = (event) => {
		this.setState({ term: event.target.value });
	};

	render(){
		return(
			<div className="ui segment" style={{ marginTop: "50px" }}>
				<form className="ui form" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
					<div className="field" style={{ width: "80%" }}>
						<label className="main-title">Image Search Engine</label>
						<input className="search-input" value={this.state.term} onChange={ this.onFormChange } typeof="text" placeholder="Digite o que você procura"></input>
						<button onClick={ this.onFormSubmit } className="ui button" type="submit">Procurar</button>
						{/* <button onClick={ (e) => alert('Voce Clicou!') } style={{ alignSelf: "flex-end" }} className="ui button" type="submit">Submit</button> */}
					</div>
				</form>
			</div>
		);
	};
};

export default SearchBar;