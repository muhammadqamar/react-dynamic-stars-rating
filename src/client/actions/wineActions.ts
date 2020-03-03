import wineService from '../services/wines';
import { Dispatch } from 'redux';

function fetchWines() {
    return function(dispatch: Dispatch) {
        return wineService.getWines()
            .then(winesdata=> winesdata.json().then(wines=> {

               
                dispatch({
                    type: 'FETCH_WINES_SUCCESS',
                    payload: {
                        wines
                    }
                });
            }));
    };
}

export {
    fetchWines
};
