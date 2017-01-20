import 'whatwg-fetch';

const GET = 'GET';
const POST = 'POST';

const checkStatus = (res) => {
  if (res.status >= 200 && res.status < 300) {
    return res;
  }

  const error = new Error(res.statusText);
  error.response = res;
  throw error;
};

const makeApiRequest = (path, headers = {}, method = GET, body) => {
  if (!headers['Content-Type']) {
    Object.assign(headers, { 'Content-Type': 'application/json' });
  }

  return fetch(path, {
    method,
    body: JSON.stringify(body),
    headers,
  }).then(response => checkStatus(response))
    .then(response => response.json());
};

const authHeader = token => ({ Authorization: `JWT ${token}` });

const login = (email, pin) => makeApiRequest('/login', {}, POST, { email, pin });

const getUsers = token => makeApiRequest('/api/users', authHeader(token));

const getMe = token => makeApiRequest('/api/users/me', authHeader(token));

const submitRsvp = (token, rsvp) =>
  makeApiRequest('/api/users/me/rsvp', authHeader(token), POST, rsvp);

export default {
  login,
  getUsers,
  getMe,
  submitRsvp,
};
