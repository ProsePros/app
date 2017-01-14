/**
 * Created by juanitasoranno on 1/8/17.
 */
import React from 'react';

export default class axiosUtils extends React.Component {
  axios.get(
  'https://api.nytimes.com/svc/search/v2/articlesearch.json'
).then(function (response) {
    create(result);
    console.log(response.data); // ex.: { user: 'Your User'}
    console.log(response.status); // ex.: 200
  });
};
