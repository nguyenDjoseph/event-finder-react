import React from 'react';

import Loader from './Loader';

const withLoader = Component => ({ isLoading, cityName, ...props }) =>
  (isLoading ? <Loader searchCity={cityName}/> : <Component {...props} />);

export default withLoader;