// export const domainApi = "http://10.15.144.129:6443/"; // DEV | WFH
export const domainApi = 'https://fis-ca-api.fpt.com/';

interface ApiProps {
  googleKey: string;
  login: string;
  setupCall: (guid: string) => string;
}

export const ConfigApi: ApiProps = {
  googleKey: 'AIzaSyBKlQzql1G8nlF1GAdwt0usTO7OgBknHww',

  /** <---------- LOGIN ----------> */
  login: `${domainApi}customer/login`,

  /** <---------- VERIFY ACCOUNT ----------> */
  setupCall: guid => `${domainApi}customer/callvideo/${guid}`,
};
