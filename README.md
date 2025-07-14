# Репозиторий фронтенд-части проекта "VELOBIKE IOT"

## Структура репозитория

#### GIT
##### Фронтенд
https://github.com/zelimdemilh/quiz

##### Сервер
https://github.com/zelimdemilh/quiz-server

### Так как проект простой, все изменения делаются в main
- [main](https://github.com/zelimdemilh/quiz/main)
---
## Структура проекта

Весь код расположен в папке src, а остальные файлы на корневом уровне являются конфигурациями для инструментов, которые используются для разработки и т.д.

- `src/`: Исходный код проекта
    - Архитектура [FSD](https://feature-sliced.design/ru/docs)
    - API расположен в src/shared/api. Структура такая, как будто это микросервисы.
---
## Стек технологий

[Node.js 18](https://nodejs.org/)

##### Инструменты разработки

- Build: [npm-scripts](https://docs.npmjs.com/misc/scripts)
- Frontend Tooling: [Vite](https://vitejs.dev/)

##### Frontend Libraries

- Language: [TypeScript](https://www.typescriptlang.org/)
- JS framework: [ReactJS](https://reactjs.org/)
- JS library: [React Router](https://reactrouter.com/en/main)
- UI library: [Ant Design](https://ant.design/components/overview/)
- JS State management:
- - [Redux](https://redux.js.org)
- - [Redux Toolkit](https://redux-toolkit.js.org/)
- CSS framework: [Tailwind CSS](https://tailwindcss.com/docs)
----

## Npm scripts

Install packages:

```
npm i
```

Список доступных команд:
- **`dev`**: "npm run dev" запускает разработку frontend на https://localhost:8080/
- **`build`**: "npm run build" запускает сборку frontend
- **`lint`**: "npm run lint" запускает eslint для файлов (js,jsx, ts, tsx)
- **`preview`**: "npm run preview" запускает сборку из папки "/build"
- **`clean`**: "npm run clean" очищает папку "/build"



