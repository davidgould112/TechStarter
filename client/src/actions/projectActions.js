import axios from 'axios';

export const FETCH_PROJECTS_PENDING = 'FETCH_PROJECTS_PENDING';
export const FETCH_PROJECTS_FULFILLED = 'FETCH_PROJECTS_FULFILLED';
export const FETCH_PROJECTS_REJECTED = 'FETCH_PROJECTS_REJECTED';

export const fetchProjects = () => {
  console.log('running fetchProjects');
  return dispatch => {
    dispatch({ type: FETCH_PROJECTS_PENDING });
    axios.get('/api/projects')
      .then(response => {
        console.log(response);
        dispatch({
          type: FETCH_PROJECTS_FULFILLED,
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({
          type: FETCH_PROJECTS_REJECTED,
          payload: err
        });
      });
  };
};
