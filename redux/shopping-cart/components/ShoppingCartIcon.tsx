import React, { Component } from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'
import { withNavigation } from 'react-navigation'

class ShoppingCartIcon extends Component {
	render() {
		const { navigate } = this.props.navigation
		return (
			<TouchableNativeFeedback onPress={() => navigate('Cart')}>
				<View style={{ padding: 5 }}>
					<View style={{ position: 'absolute', height: 30, width: 30, borderRadius: 15, backgroundColor: 'rgba(95,197,123,.8)', right: 15, bottom: 15, alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
						<Text style={{color: '#fff', fontWeight: 'bold'}}>{this.props?.cardItems?.length ?? 0}</Text>
					</View>
					<Icon name='ios-cart' size={30} />
				</View>
			</TouchableNativeFeedback>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		cardItems: state
	}
}

export default connect(mapStateToProps)(withNavigation(ShoppingCartIcon))
