import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const InfoPage = () => (
  <div>
    <p>
      Info Page --- This will change eventually, but I'm going to store credits here for the time being
      "Haunted house icon made by wanicon at www.flaticon.com"
    </p>
  </div>
);

export default InfoPage;
