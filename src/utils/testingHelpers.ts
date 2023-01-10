import { exists } from 'react-native-fs';

export const logUrlExists = async (uri: string) => {
  const exist = await exists(uri);
  console.log(uri, 'uri in exists check');
  console.log(exist, 'Does this uri exists');
};
