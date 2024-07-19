const apiUrl = "https://wedev-api.sky.pro/api/kanban";
const apiUrlOfOneTask = "https://wedev-api.sky.pro/api/kanban/:id"

//получение всх задач
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
        "Content-Type": "application/json",
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
export const editCard = async (token, taskData) => {
    const response = await fetch(apiUrlOfOneTask, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        //id:""
      },
      body: JSON.stringify(taskData)
    });
    if (!response.ok) {
      throw new Error("Не удалось найти задачу");
    }
    return response.json();
  };


//удаление задачи
export const deleteCard = async (token, taskData) => {
    const response = await fetch(apiUrlOfOneTask, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        id:""
      },
      body: JSON.stringify(taskData)
    });
    if (!response.ok) {
      throw new Error("Не удалось найти задачу");
    }
    return response.json();
  };
