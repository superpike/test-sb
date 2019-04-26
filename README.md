## Комментарии

1. В папке server находится бек на ноде для тестирования приложения (node index)

2. В дизайне реализовал несколько "фишек", не очень нужных, исключительно ради демонстрации

3. Экраны понял как страницы (обычно этот термин встречал в React Native, а тут просто React), третий экран реализовал модальным окном.

4. Не использовал ни разу reselect и redux-form, поэтому разбирался с их особенностями.

5. Не придумал, где здесь может понадобиться reselect (в своих проектах этот пакет не использовал, изучал по ходу написания), динамических списков у нас нет.

6. Валидацию сделал, обработку ошибок нет, можно сделать через внесение в redux и подписку на эти изменения в компоненте.

## Задача

Необходимо реализовать spa приложение состоящее из 3 экранов (список фондов, детальная информация по фонду, форма зачисления средст в фонд).
1) Экран списка фондов состоит из плиток, содержащих краткую информацию о фонде. Данные берутся из get запроса '/api/funds/'. При клике на элемент списка осуществляется
переход на страницу детальной информации.
2) Экран детальной информации содержит развернутое описание фонда. Данные берутся из get запроса '/api/funds/{id}'. На экране присутствует кнопка осуществляющяя
переход на форму пополнения фонда.
3) Экран с формой пополнения фонда содержит 2 поля (email - адрес почты, amount - сумма пополнения). Каждый фонд может иметь минимальную и максимальную сумму пополнения.
Email должен валидироваться. После успешного ответа необходимо перейти на страницу со списком фондов. Сценарий с неуспешным ответом мы не рассматриваем. Данные отправляются post
запросом '/api/funds/{id}'

При выполнении данного задания необходимо использовать react, reselect, redux, redux-form или final-form. Для управления side эффектами могут использоваться redux-thunk или redux-saga.
Дизайн для задания не предоставляется намеренно, реализайте интерфейс так, как считаете нужным, но с условием, что он должен быть адаптивным (форму не должно 'перекашивать',
плитки долдны быть призентабельны на все экранах). Использовать библиотеки типа bootstrap не стоит, тк мы хотим оценить познания кандидата в вёрстке.

Заглушки:

1) GET '/api/funds/'

[
    {
        "id": 1,
        "name": "Фонд 1",
        "description_short": "Кароткое описание фонда 1",
        "image": "url to image"
    }
]

2) GET '/api/funds/{id}'

{
    "id": {id},
    "name": "Фонд 1",
    "description_full": "Полное описание фонда 1",
    "amount_min": 1000,
    "amount_max": 10000
}

3) POST '/api/funds/{id}'

{
    "status": true
}

----------------------------------------------------------------------------------------------------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
