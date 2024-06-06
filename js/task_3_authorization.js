alert("Задання номер 3");

const ADMIN_PASSWORD = "jqueryismyjam";

let massege;

let ask_password = prompt("Введіть пароль");

if (ask_password === null) {
  massege = "Операцію скасовано!";
} else if (ask_password.toLowerCase() === ADMIN_PASSWORD) {
  massege = "Ласкаво просимо!";
} else {
  massege = "Доступ заборонено, невірний пароль!";
}

alert(massege);

// Альтернативні перевірки

let ask_password_2 = prompt("Альтернативна перевірка валідності");

if (ask_password_2 === null) {
  massege = "Операцію скасовано!";
} else if (ask_password_2.toLowerCase() === ADMIN_PASSWORD) {
  massege = "Ласкаво просимо!";
} else {
  massege = "Доступ заборонено, невірний пароль!";
}

alert(massege);

let ask_password_3 = prompt("Альтернативна перевірка валідності");

if (ask_password_3 === null) {
  massege = "Операцію скасовано!";
} else if (ask_password_3.toLowerCase() === ADMIN_PASSWORD) {
  massege = "Ласкаво просимо!";
} else {
  massege = "Доступ заборонено, невірний пароль!";
}

alert(massege);
