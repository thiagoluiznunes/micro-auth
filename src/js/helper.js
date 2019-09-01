import 'regenerator-runtime/runtime';
import env from '../environment';

const chooseUrlConnection = () => {
  return Math.random() > Math.random() ? env.GOOGLE_AUTH_URL : env.HEROKU_AUTH_URL;
}

export default {
  chooseUrlConnection,
}
