/* eslint-disable global-require,camelcase */
import isOmniFeather from 'utils/isOmniFeather';
import isLTC from 'utils/isLTC';

export default () => {
  if (isOmniFeather) {
    return 'Feathercoin';
  }
  if (isLTC) {
    return 'Litecoin';
  }
  return 'OmniExplorer';
};

const getLongName = () => {
  if (isOmniFeather) {
    return 'Feathercoin Explorer';
  }
  if (isLTC) {
    return 'Litecoin Explorer';
  }
  return 'OmniExplorer';
};

const getLayerName = () => {
  if (isOmniFeather) {
    return 'Feathercoin';
  }
  if (isLTC) {
    return 'Litecoin';
  }
  return 'Omni Layer';
};

const getSiteDescriptor = () => {
  if (isOmniFeather) {
    return 'The block explorer for Feathercoin Tokens';
  }
  if (isLTC) {
    return 'The block explorer for Litecoin Tokens';
  }
  return 'The block explorer for Omni Token, Tether, USDT, MaidSafe and Omni Layer Tokens / Cryptocurrencies';
};

export { getLongName, getLayerName, getSiteDescriptor };
