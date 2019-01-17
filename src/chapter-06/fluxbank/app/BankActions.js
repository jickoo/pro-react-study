import AppDispatcher from './AppDispatcher';
import bankConstants from './constants';

let BankActions = {
	createAccount() {
		AppDispatcher.dispatch({
			type: bankConstants.CREATE_ACCOUNT
			, amount: 0
		})
	},

	depositIntoAccount(amount) {
		AppDispatcher.dispatch({
			type: bankConstants.DEPOSITED_INTO_ACCOUNT
			, amount: amount
		})
	},

	withdrawFromAccount(amount) {
		AppDispatcher.dispatch({
			type: bankConstants.WITHDREW_FROM_ACCOUNT
			, amount: amount
		})
	}
}

export default BankActions;