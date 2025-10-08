import http from 'k6/http';
import { sleep, check } from 'k6';
import { obterToken } from '../helpers/autenticacao.js'
import { pegarBaseURL } from '../utils/variaveis.js';


export const options = {
  interations: 1
};

export default function () {
  const token = obterToken()

  const url = pegarBaseURL() + '/transferencias';
  const payload = JSON.stringify({
    contaOrigem: 1,
    contaDestino: 3,
    valor: 12,
    token: ""
  })

  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  }

  const res = http.post(url, payload, params);

  check(res, {
    "status is 201": (res) => res.status == 201
  });


  sleep(1);
}
