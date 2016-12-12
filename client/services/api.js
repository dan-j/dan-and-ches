import 'whatwg-fetch';

const GET = 'GET', PUT = 'PUT', POST = 'POST';

const makeApiRequest = (path, headers = {}, method = GET, body) => {

  if (!headers['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }

  return fetch(path, {
    method,
    body: JSON.stringify(body),
    headers,
  }).then(response => checkStatus(response))
    .then(response => response.json());
};

const checkStatus = (res) => {
  if (res.status >= 200 && res.status < 300) {
    return res;
  } else {
    const error = new Error(res.statusText);
    error.response = res;
    throw error;
  }
};

const login = (email, pin) => {
  return makeApiRequest('/login', {}, POST, { email, pin });
};

const getUsers = (token) => {
  return makeApiRequest('/api/users', { Authorization: token });
};

const rsvp = (email, token, content) => {

};

export default {
  login,
  getUsers,
  rsvp,
};
