import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	FlatList
} from 'react-native';

export default class List extends Component {
	// constructor(props) {
	// 	super(props);
		
	//   }
	render() {
		return (
			<View style={localStyles.container}>
				<FlatList>
					To do:
					{this.props.items.map((item, index) => <Text style={localStyles.baseText} key={index}>{item}</Text>)}
				</FlatList>
		  </View>
		)
	}
}

const localStyles = StyleSheet.create({
	container: {
		width: 400,
		height: 250,
		backgroundColor: '#edbc74',
		borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center'
	  },
	  baseText: {
		fontFamily: 'Cochin',
		color: '#5688d8'
	  },
	  titleText: {
		fontSize: 20,
		width: 40,
		height: 25,
		fontWeight: 'bold',
	  }
});
