const apiUrl = "https://wedev-api.sky.pro/api/user";

export const signUp = async ({login, password, name}) => {
  const response = await fetch(apiUrl, {
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
