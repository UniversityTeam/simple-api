import http from 'k6/http';
import { check, sleep } from 'k6';
const baseURL = 'http://localhost:3000';

export const options = {
    scenarios: {
        getFilmsList: {
            executor: "ramping-vus",
            stages: [
                { target: 10, duration: "10s" },
                { target: 500, duration: "5s" },
                { target: 50, duration: "1s" },
                { target: 0, duration: "10s" },
            ],
            exec: "getFilmsList",
        },
        addUser: {
            executor: "ramping-vus",
            stages: [
                { target: 500, duration: "10s" },
                { target: 0, duration: "15s" },
            ],
            exec: "addUser",
        },
    },
    thresholds: {
        http_req_duration: ["p(90)<5000"],
    },
};

export function getFilmsList() {
    const res = http.get(`${baseURL}/filmsList`);
    check(res, {
        'is status 200': (r) => r.status === 200,
    });
    sleep(1);
}

export function addUser() {
    const user = {
        email: 'Test@gmail.com',
        password: 'test1'
    }
    const res = http.post(
        `${baseURL}/addUser`,
        JSON.stringify(user),
        {
            headers: {
                "Content-Type": "application/json",
            },
        });
    check(res, {
        'is status 200': (r) => r.status === 200,

    });
    sleep(1);
}
