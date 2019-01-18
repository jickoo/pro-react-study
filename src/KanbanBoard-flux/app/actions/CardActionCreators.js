import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import KanbanAPI from '../api/KanbanApi';
import {throttle} from '../utils';
import CardStore from '../stores/CardStore';

let CardActionCreators = {
	fetchCards() {
		AppDispatcher.dispatcherAsync(KanbanAPI.fetchCards(), {
			request: constants.FETCH_CARDS
			, success: constants.FETCH_CARDS_SUCCESS
			, error: constants.FETCH_CARDS_ERROR
		})
	},

	addCard(card) {
		AppDispatcher.dispatcherAsync(KanbanAPI.addCard(card), {
			request: constants.CREATE_CARD
			, success: constants.CREATE_CARD_SUCCESS
			, error: constants.CREATE_CARD_ERROR
		}, {card});
	},

	updateCard(card, draftCard) {
		AppDispatcher.dispatcherAsync(KanbanAPI.updateCard(card, draftCard), {
			request: constants.UPDATE_CARD
			, success: constants.UPDATE_CARD_SUCCESS
			, error: constants.UPDATE_CARD_ERROR
		}, {card});
	},

	updateCardStatus: throttle((cardId, listId) => {
		AppDispatcher.dispatcher({
			type: constants.UPDATE_CARD_STATUS
			, payload: {cardId, listId}
		});
	})
};

export default CardActionCreators;