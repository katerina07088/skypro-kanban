const apiUrl = "https://wedev-api.sky.pro/api/kanban";
const apiUrlOfOneTask = "https://wedev-api.sky.pro/api/kanban/"

//получение всех задач
export const getTasks = async (token) => {
  const response = await fetch(apiUrl, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Не удалось загрузить данные, попробуйте позже");
  }
  return response.json();
};

//добавление задачи
export const addTask= async (tasksData, token) => {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(tasksData),
  });

  if (!response.ok) {
    throw new Error("Не удалось добавить задачу, попробуйте позже");
  }
  return response.json();
};
// получение задачи по id
export const getCardById = async (token, taskData) => {
    const response = await fetch(apiUrlOfOneTask, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(taskData)
    });
    if (!response.ok) {
      throw new Error("Не удалось найти задачу");
    }
    return response.json();
  };

// редактирование задачи
export const editCard = async (token, id,{ title, topic, status, description, date }) => {
    const response = await fetch(apiUrlOfOneTask + id, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
      title,
      topic,
      status,
      description,
      date,
    })
    });
    if (!response.ok) {
      throw new Error("Не удалось редактировать задачу");
    }
    return response.json();
  };


//удаление задачи
export const deleteCard = async (token, id) => {
    const response = await fetch(apiUrlOfOneTask + id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Не удалось найти задачу");
    }
    return response.json();
  };
