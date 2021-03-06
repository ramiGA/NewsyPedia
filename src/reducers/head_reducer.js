import _ from 'lodash';
import { FETCH_HEAD } from '../actions';
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_HEAD:
      return [...action.payload.data.articles];

    default:
      return state;
  }
}
