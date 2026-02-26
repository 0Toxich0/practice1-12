document.addEventListener('DOMContentLoaded', function() {
    const title = document.createElement('h1');
    title.textContent = 'Список пользователей';

    const list = document.createElement('ul');
    list.id = 'userList';

    const names = ['Анна', 'Борис', 'Виктор'];
    names.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        list.appendChild(li);
    });

    const button = document.createElement('button');
    button.textContent = 'Добавить пользователя';
    button.id = 'addUserBtn';

    document.body.appendChild(title);
    document.body.appendChild(list);
    document.body.appendChild(button);

    button.addEventListener('click', function() {
        const newLi = document.createElement('li');
        newLi.textContent = 'Новый пользователь';
        list.appendChild(newLi);
    });
});