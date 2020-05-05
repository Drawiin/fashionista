import axios from 'axios';

const { CancelToken } = axios;
const source = CancelToken.source();

const { isCancel } = axios;

const request = axios.create({
  baseURL: 'https://5e9935925eabe7001681c856.mockapi.io/api/v1',
  cancelToken: source.token,
});

function abortRequest() {
  source.cancel();
}

export default { request, abortRequest, isCancel };
