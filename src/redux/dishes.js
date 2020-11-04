import * as ActionTypes from './ActionTypes';

export const Dishes=(state={isLoadong:true, erMess:null, dishes:[]}, action)=>{
	switch(action.type){
		case ActionTypes.ADD_DISHES:
			return {...state, isLoading:false, errmMess:null, dishes:action.payload};
		case ActionTypes.DISHES_LOADING:
			return {...state, isLoading:true, errmMess:null, dishes:[]};
		case ActionTypes.DISHES_FAILED:
			return {...state, isLoading:false, errmMess:action.payload};
		default:
			return state;
	}
};