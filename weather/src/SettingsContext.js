// settings for the weather app, to demonstrate context api
import React from 'react';

// defaults
const settings = {
  controls: "true"
};

const SettingsContext = React.createContext(settings);

export default SettingsContext;
