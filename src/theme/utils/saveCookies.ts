import Cookies from 'js-cookie';

interface ISaveCookie {
  name: string;
  value: string | number | boolean;
}

export const saveCookie = ({ name, value }: ISaveCookie) => {
  Cookies.set(name, String(value));
};
