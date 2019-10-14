export const FontSize = (state = 12, action) => {
	switch (action.type) {
		case 'INCREASE_FONT_SIZE':
			return state + 4
		case 'DECREASE_FONT_SIZE':
			return state - 4
		default:
			return state
	}
}