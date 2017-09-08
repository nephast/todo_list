import React, { Component } from 'react';
import List from './List';

import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	Dimensions,
	TextInput,
	Button
} from 'react-native';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  term: '',
		  items: []
		};
	  }

	  onChange = (event) => {
		this.setState({term: event.target.value});
	  }

	  onSubmit = (event) => {
		event.preventDefault()
		this.setState({
		  term: '',
		  items: [...this.state.items, this.state.term]
		});
	  }

	render() {
		return (
			<View style={localStyles.container}>
				<StatusBar hidden = {true}/>
				<View>
				<TextInput
				value={this.state.term} onChange={this.onChange}
				style={localStyles.entree}
				/>	
				</View>	
				<View>
				<List items={this.state.items} />
				</View>
				<View style={localStyles.buttonContainer}>
				<Button title="Add Todo"
				onPress={this.onSubmit}
				/>	
				</View>
			</View>
		)

	}
}

const localStyles = StyleSheet.create({
	container: {
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-around",
		flex: 1,
		backgroundColor: '#5688d8'
	},
	entree: {
		width: 400,
		height: 50,
		backgroundColor: '#edbc74',
		borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center'
	  },
	  buttonContainer: {
		width: 400,
		height: 50,
		borderRadius: 30,	
		justifyContent: 'center',		
		backgroundColor: '#edbc74',
		alignItems: 'center'
		
		
	  }

});