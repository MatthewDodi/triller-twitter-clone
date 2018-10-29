import { saveLikeToggle } from '../utils/api';

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const TOGGLE_TWEET = 'TOGGLE_TWEET';

export const receiveTweets = (tweets) => {
  return {
    type: RECEIVE_TWEETS,
    tweets
  }
}

export const toggleTweet = ({ id, authedUser, hasLiked }) => {
  return {
    type: TOGGLE_TWEET,
    id,
    authedUser,
    hasLiked
  }
}

export const handleToggleTweet = (info) => {
  return (dispatch) => {
    dispatch(toggleTweet(info));

    return saveLikeToggle(info)
      .catch(err => {
        alert('There was an error while completing that proccess. Please Try Again');
        return dispatch(toggleTweet(info));
      })
  }
}