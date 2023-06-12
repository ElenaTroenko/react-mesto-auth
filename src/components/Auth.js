// Базовый путь запросов
const BASE_URL = 'https://auth.nomoreparties.co';
// Заголовки
const headers = {
  'Content-Type': 'application/json',
}


// Запрос на сервер: РЕГИСТРАЦИЯ. Возвращает промис
export const register = ({password, email}) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      password: password,
      email: email,  
    }),
  })
}


// Запрос на сервер: АВТОРИЗАЦИЯ. Возвращает промис
export const login = ({password, email}) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      password: password,
      email: email,  
    }),
  })
}


// Запрос на сервер: ПРОВЕРКА ТОКЕНА. Возвращает промис
export const checkToken = (token) => {
  // добавить к заголовкам Bearer токен
  headers["authorization"] = `Bearer ${token}`;

  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: headers,
  })
}