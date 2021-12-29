import http from 'k6/http';
import { check, sleep } from 'k6';
const baseURL = 'http://localhost:3000';

export const options = {
    scenarios: {
        getFilmsList: {
            executor: "ramping-vus",
            stages: [
                { target: 10, duration: "20s" },
                { target: 1000, duration: "5s" },
                { target: 50, duration: "1s" },
                { target: 0, duration: "10s" },
            ],
            exec: "getFilmsList",
        },
    },
    thresholds: {
        http_req_duration: ["p(90)<3000"],
    },
};

export function getFilmsList() {
    const res = http.get(`${baseURL}/filmsList`);
    check(res, {
        'is status 200': (r) => r.status === 200,
    });
    sleep(1);
}

