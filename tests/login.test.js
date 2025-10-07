import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
    vus: 10, //Quantidade de usuarios virtuais
    duration: '30s', // tempo de execução
    thresholds: {
        http_req_duration: ['p(90)<3000', 'max<5000'],
        http_req_failed: ['rate<0.1']
    }
};



export default function () {
    const url = 'http://localhost:3000/login';
    const payload = JSON.stringify({
        username: "julio.lima",
        senha: "123456"
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const res = http.post(url, payload, params);

    check(res, {
        'Validar que Status Code é 200': (r) => r.status === 200,
        'Validar que o Token é string': (r) => typeof (r.json().token) == 'string'
    })

    sleep(1)


}