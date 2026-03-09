import "./App.css";
import ProductList from "./components/productList";
import Cart from "./components/cart";

function App() {
  return (
    <div className="container">
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;





// Создание приложения корзины товаров с использованием React и Redux

// 1.	Установка зависимостей

// Создайте новый проект с помощью vite.
// Перейдите в директорию проекта.
// Установите необходимые зависимости: npm install react-redux redux

// 2.	Структура проекта

// Организуйте структуру проекта следующим образом:

// /src
//   /components
//     Cart.jsx
//     CartItem.jsx
//     ProductList.jsx
//   /redux
//     actions.js
//     reducers.js
//     store.js
//   /styles
//     Cart.module.css
//     CartItem.module.css
//     ProductList.module.css
//   App.jsx
//   index.js

// 3.	Создание Redux Store

// Создайте файл `store.js` в папке `redux`:
// Импортируйте `createStore` из Redux.
// Импортируйте редьюсер из `reducers.js`.
// Создайте store, используя `createStore`.

// Создайте файл `reducers.js` в папке `redux`:
// Определите начальное состояние, содержащее список продуктов и корзину.
// Создайте редьюсер, который будет обрабатывать действия `ADD_TO_CART`, `REMOVE_FROM_CART` и `UPDATE_CART_QUANTITY`.

// Создайте файл `actions.js` в папке `redux`:
// Определите действия `addToCart`, `removeFromCart` и `updateCartQuantity`.
// Каждое действие возвращает объект с типом действия и полезной нагрузкой (payload).

// 4.	Создание компонентов

// Создайте `ProductList.jsx` в папке `components`:
// Импортируйте `connect` из `react-redux`.
// Получите доступ к списку продуктов из Redux store, используя `connect`.
// При нажатии кнопки "Add to Cart" отправляйте действие `addToCart`.

// Создайте `Cart.jsx` в папке `components`:
// Получите доступ к списку товаров в корзине из Redux store, используя `connect`.
// Рассчитайте общую стоимость товаров в корзине и отобразите её.
// Отобразите каждый товар в корзине, используя компонент `CartItem`.

// Создайте `CartItem.jsx` в папке `components`:
// Получите доступ к действиям `removeFromCart` и `updateCartQuantity` из Redux store, используя `connect`.
// Получите данные о товаре через пропсы.
// При изменении количества товара или нажатии кнопки "Remove" отправляйте соответствующие действия.

// 5.	Модульные стили

// Создайте файлы стилей для каждого компонента:
// `Cart.module.css`
// `CartItem.module.css`
// `ProductList.module.css`

// Определите стили для каждого компонента в соответствующих файлах CSS.

// Импортируйте стили в соответствующие компоненты, используя `import styles from '../styles/ComponentName.module.css';`.

// 6.	Главные файлы

// `App.jsx`:
// Импортируйте компоненты `ProductList` и `Cart`.
// Организуйте компоненты внутри контейнера и добавьте стили.

// `index.js`:
// Импортируйте `Provider` из `react-redux` и `store` из `redux/store`.
// Оберните компонент `App` в `Provider` и передайте `store` как пропс.

// 7.	Запуск приложения

// Запустите приложение, проверьте его работоспособность:
