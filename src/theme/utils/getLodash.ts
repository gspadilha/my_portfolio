import get from 'lodash/get';

export function getLodash(theme: any, option: string) {
  return get(theme, option);
}
