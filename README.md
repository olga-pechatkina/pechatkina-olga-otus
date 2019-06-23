# pechatkina-olga-otus

задания
1.
Написать функцию суммирования значений
Написать функцию sum, которая может быть исполнена любое количество раз с не `undefined` аргументом. 
Если она исполнена без аргументов, то возвращает значение суммы всех переданных до этого значений. 

sum(1)(2)(3)....(n)() === 1 + 2 + 3 + ... + n

в javascript/javascript-1

2.
Реализовать скрипт request для тестирования веб сервера
Создать локальный веб сервер `server`, отвечающий на запросы каждые 100ms

Создать скрипт `request`, принимающий на вход 
- количество запросов `N`
- тип запросов - параллельный или последовательный

Скрипт `request` должен отправлять `N` последовательных или параллельных `HTTP` запросов к локальному серверу `server`

в javascript/javascript-3

3.
tree - вывод списка файлов и папок файловой системы
Напишите `NodeJS` скрипт `tree` для вывода списка файлов и папок файловой системы. 
Результатом работы должен быть объект с массивами `{ files, folders }`.
Вызовы файловой системы должны быть асинхронными. 
Скрипт принимает входной параметр - путь до папки.
Добавить возможность выполнять этот скрипт через команду `npm run tree -- path`

Пример

```
foo/ 
├── bar/ 
│├── bar1.txt
│├── bar2.txt 
│└── baz/ 
├── f1.txt 
└── f2.txt
```

При вызове с путем `foo/` скрипт должен вернуть структуру:

```json
{
"files": [
"foo/f1.txt",
"foo/f2.txt",
"foo/bar/bar1.txt",
"foo/bar/bar2.txt"
],
"dirs": [
"foo",
"foo/bar",
"foo/bar/baz"
]
}
```

в папке javascript-5

4.
Работа с потоками в NodeJS
Написать приложение, демонстрирующее работу с потоками в `NodeJS`: 
- Readable, генерирующий случайные числа, 
- Transformable, добавляющий случайное число к первому и 
- Writable, выводящий данные в консоль.

Данные должны “течь” readable -> transformable -> writable
Используйте highWaterMark для ограничения внутреннего буффера.

в javascript-6

5.
создать сервер на Express, работа с MongoDB

в javascript-9

6.
getPath - поиск уникального селектора
Написать алгоритм и функцию `getPath()`, находяющую уникальный css-селектор для элемента в документе.
Уникальный селектор может быть использован `document.querySelector()` и возвращать исходный элемент. 
`document.querySelectorAll()`, вызванный с этим селектором, не должен находить никаких элементов, кроме исходного.

```javascript
$0 // HTMLElement
getPath($0) // => "..."
```
в javascript-10

7. Custom Elements Tree
С помощью Custom Elements создать приложение для показа дерева с помощью компонентов my-tree и my-leaf. Компоненты должны получать данные о структуре поддерева от родительского элемента. Используйте Shadow DOM при отрисовке компонент.

Пример структуры

{
"id": 1,
"items": [{
"id": 2,
"items": [{ "id": 3 }]
}]
}

в javascript-13
