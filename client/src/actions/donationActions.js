import axios from 'axios'

import {
    DONATE_BLOOD 
} from '../actions/types'

export const donateBlood =() =>dispatch => {
    dispatch(setProfileLoading());
    axios.get('/getSymptoms')
    .then(
        res =>
        dispatch(
            type: DONATE_BLOOD,
            res
        )
    )
    }