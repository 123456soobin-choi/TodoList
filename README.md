# 🔖 TodoList

## - v1.0.0
https://user-images.githubusercontent.com/107169675/206399357-9e222790-4197-4ae6-9cda-291fc7348997.mp4

## - v2.0.0
https://user-images.githubusercontent.com/107169675/206399527-8d271569-c65e-4b2d-b72d-673b086fd134.mp4

## ► TodoList 구경하기 ✈️ <br>
https://todo-list-one-delta.vercel.app/

## 📌 주요 기능
- Create Todo
- Read Todos, Todo
- Update Todo
- Delete Todo
- Save Todo
: LocalStorage

## ✏️ 기술 스택
### v1.0.0 <br>
<img src="https://img.shields.io/badge/react-61dafb?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/styledcomponents-db7093?style=for-the-badge&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"> <br>
### v2.0.0 <br>
<img src="https://img.shields.io/badge/redux-764abc?style=for-the-badge&logo=redux&logoColor=white"> <img src="https://img.shields.io/badge/react-61dafb?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/styledcomponents-db7093?style=for-the-badge&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"> <br>

## 🗂️ 컴포넌트 구성
### v1.0.0 <br>
```
├── src
│   ├── components
│   │   ├── Form.jsx
│   │   ├── Header.jsx
│   │   ├── Layout.jsx
│   │   ├── List.jsx
│   │   └── Todo.jsx
│   ├── pages
│   │   └── TodoList.jsx
```

### v2.0.0 <br>
```
├── src
│   ├── assets
│   ├── components
│   │   ├── common
│   │   │   ├── Button.jsx
│   │   │   └── Input.jsx
│   │   ├── Empty.jsx
│   │   ├── Form.jsx
│   │   ├── Header.jsx
│   │   ├── Layout.jsx
│   │   ├── Todo.jsx
│   │   └── TodoList.jsx
│   ├── pages
│   │   ├── Details.jsx
│   │   └── Home.jsx
│   ├── redux
│   │   ├── config
│   │   │   └── configStore.js
│   │   └── modules
│   │       └── todos.js
│   ├── shared
│   │   └── Router.js
```
### assets
- todo 완료/미완료 상태에 따라 다르게 보여줄 이미지 파일들과 React, Redux logo가 있다.

### components
#### ► common
- Button : Form, Todo, Details 컴포넌트들에 공통으로 적용한 button 컴포넌트.
- Input : 텍스트 타입 input 컴포넌트. Input이 focus된 경우와 value를 가지고 있는 경우 이벤트 적용.
#### &
- Empty : todo list가 없으면 보여줄 컴포넌트.
- Form : todo title과 content를 입력하는 input과 추가하기 button이 있는 컴포넌트.
- Header : Project title과 React, Redux logo가 있는 컴포넌트.
- Layout : 전체 화면 구성을 보여주는 컴포넌트.
- Todo : todo의 title, content와 delete, toggle(취소/완료) button이 있는 컴포넌트. 
- TodoList : working() done() 영역으로 나누어 todo list를 보여주는 컴포넌트.

### pages
- Details : todo의 상세 내용을 볼 수 있는 컴포넌트.
- Home : 전체 메인 페이지에 해당하는 컴포넌트.

### redux
#### ► config
- configStore : 중앙 state 관리소인 Store를 만드는 설정 코드들이 있는 컴포넌트.
#### ► modules
- todo : todo list에 필요한 state들을 모은 모듈 컴포넌트.
### shared
- Router : Route들을 설정하는 컴포넌트.

