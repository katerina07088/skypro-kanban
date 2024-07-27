const apiUrlLogin = "https://wedev-api.sky.pro/api/user/login";

export const signIn = async ({ login, password }) => {
  const response = await fetch(apiUrlLogin, {
    method: "POST",
    body: JSON.stringify( {
      login,
      password,
    }),
  });
  if (response.status == 400) {
    throw new Error ("Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.")
  }
  if (!response.ok) {
    throw new Error("Не удалось загрузить данные, попробуйте позже");
  }
  return response.json();
};


const apiUrlRegister = "https://wedev-api.sky.pro/api/user";

export const signUp = async ({login, password, name}) => {
  const response = await fetch(apiUrlRegister, {
    method: "POST",
    body: JSON.stringify( {
      login,
      password,
      name,
    }),
  });
  if (response.status == 400) {
    throw new Error ("Пользователь с таким логином уже сущетсвует")
  }
  if (!response.ok) {
    throw new Error("Не удалось загрузить данные, попробуйте позже");
  }
  return response.json();
};
