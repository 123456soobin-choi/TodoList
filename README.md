# π TodoList

## - v1.0.0

![v1 0 0](https://user-images.githubusercontent.com/107169675/206620602-5613f694-f87d-448b-b29c-d4798b899d61.gif)

## - v2.0.0

![v2 0 0](https://user-images.githubusercontent.com/107169675/206620424-1a3b2368-66d9-47d2-bd2c-d515abc320b7.gif)

## βΊ TodoList κ΅¬κ²½νκΈ° βοΈ <br>
https://todo-list-one-delta.vercel.app/

## π μ£Όμ κΈ°λ₯
- Create Todo
- Read Todos, Todo
- Update Todo
- Delete Todo
- Save Todo
: LocalStorage

## βοΈ κΈ°μ  μ€ν
### v1.0.0 <br>
<img src="https://img.shields.io/badge/react-61dafb?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/styledcomponents-db7093?style=for-the-badge&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"> <br>
### v2.0.0 <br>
<img src="https://img.shields.io/badge/redux-764abc?style=for-the-badge&logo=redux&logoColor=white"> <img src="https://img.shields.io/badge/react-61dafb?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/styledcomponents-db7093?style=for-the-badge&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"> <br>

## ποΈ μ»΄ν¬λνΈ κ΅¬μ±
### v1.0.0 <br>
```
βββ src
β   βββ components
β   β   βββ Form.jsx
β   β   βββ Header.jsx
β   β   βββ Layout.jsx
β   β   βββ List.jsx
β   β   βββ Todo.jsx
β   βββ pages
β   β   βββ TodoList.jsx
```

### v2.0.0 <br>
```
βββ src
β   βββ assets
β   βββ components
β   β   βββ common
β   β   β   βββ Button.jsx
β   β   β   βββ Input.jsx
β   β   βββ Empty.jsx
β   β   βββ Form.jsx
β   β   βββ Header.jsx
β   β   βββ Layout.jsx
β   β   βββ Todo.jsx
β   β   βββ TodoList.jsx
β   βββ pages
β   β   βββ Details.jsx
β   β   βββ Home.jsx
β   βββ redux
β   β   βββ config
β   β   β   βββ configStore.js
β   β   βββ modules
β   β       βββ todos.js
β   βββ shared
β   β   βββ Router.js
```
### π assets
- todo μλ£/λ―Έμλ£ μνμ λ°λΌ λ€λ₯΄κ² λ³΄μ¬μ€ μ΄λ―Έμ§ νμΌλ€κ³Ό React, Redux logoκ° μλ€.

### π components
#### βΊ common
- Button : Form, Todo, Details μ»΄ν¬λνΈλ€μ κ³΅ν΅μΌλ‘ μ μ©ν button μ»΄ν¬λνΈ.
- Input : νμ€νΈ νμ input μ»΄ν¬λνΈ. Inputμ΄ focusλ κ²½μ°μ valueλ₯Ό κ°μ§κ³  μλ κ²½μ° μ΄λ²€νΈ μ μ©.
#### &
- Empty : todo listκ° μμΌλ©΄ λ³΄μ¬μ€ μ»΄ν¬λνΈ.
- Form : todo titleκ³Ό contentλ₯Ό μλ ₯νλ inputκ³Ό μΆκ°νκΈ° buttonμ΄ μλ μ»΄ν¬λνΈ.
- Header : Project titleκ³Ό React, Redux logoκ° μλ μ»΄ν¬λνΈ.
- Layout : μ μ²΄ νλ©΄ κ΅¬μ±μ λ³΄μ¬μ£Όλ μ»΄ν¬λνΈ.
- Todo : todoμ title, contentμ delete, toggle(μ·¨μ/μλ£) buttonμ΄ μλ μ»΄ν¬λνΈ. 
- TodoList : working() done() μμ­μΌλ‘ λλμ΄ todo listλ₯Ό λ³΄μ¬μ£Όλ μ»΄ν¬λνΈ.

### π pages
- Details : todoμ μμΈ λ΄μ©μ λ³Ό μ μλ μ»΄ν¬λνΈ.
- Home : μ μ²΄ λ©μΈ νμ΄μ§μ ν΄λΉνλ μ»΄ν¬λνΈ.

### π redux
#### βΊ config
- configStore : μ€μ state κ΄λ¦¬μμΈ Storeλ₯Ό λ§λλ μ€μ  μ½λλ€μ΄ μλ μ»΄ν¬λνΈ.
#### βΊ modules
- todo : todo listμ νμν stateλ€μ λͺ¨μ λͺ¨λ μ»΄ν¬λνΈ.
### π shared
- Router : Routeλ€μ μ€μ νλ μ»΄ν¬λνΈ.

