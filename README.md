# MERN-favorites
Simple web page about your favourite items

### MERN - Mongo Express React Node

#### Used technologies

```
Webpack, ESLint, Prettier
Javascript, ES6,7,8
React, hooks, useContext
Styled Components
Node, Express, Mongo, Mangoose
Jest, Enzhyme
StoryBook
```

# Install guide
```sh
$ cd  client
$ npm install
$ npm start
```

# Project structure
```sh
.
├── client
│   ├── .storybook
|   |   ├── addons.js
|   |   └── config.js
│   ├── build
|   |   └── ...
│   ├── node_modules
|   |   └── ...
│   ├── src
|   |   ├── assets
|   |   |   └── ...
│   │   ├── components
│   │   │   └── favItems
│   │   │   |   ├─── FavItemCard
│   │   │   │   |     └── __stories__
|   |   |   |   |         └── favItemCard.stories.js
│   │   │   │   |     ├── FavItemCard.js
│   │   │   │   |     ├── FavItemCardStyled.js
│   │   │   │   |     └── localization.js
│   │   │   |   |─── FavItemForm
│   │   │   │   |     ├── FavItemForm.js
│   │   │   │   |     ├── FavItemFormStyled.js
│   │   │   │   |     └── localization.js
│   │   │   |   |─── FavItemList
│   │   │   │   |     ├── FavItemList.js
│   │   │   │   |     ├── FavItemListStyled.js
│   │   │   │   |     └── localization.js
│   │   │   |   |─── FavItemStat
│   │   │   │   |     ├── FavItemStat.js
│   │   │   │   |     ├── FavItemStatStyled.js
│   │   │   │   |     └── localization.js
│   │   │   |   └──── FavItemSearch
│   │   │   │         ├── FavItemSearch.js
│   │   │   │         ├── FavItemSearchStyled.js
│   │   │   │         └── localization.js
│   │   │   ├── layouts
│   │   │   |   ├─── Footer
│   │   │   │   |     └── __stories__
|   |   |   |   |         └── Footer.stories.js
│   │   │   │   |     ├── Footer.js
│   │   │   │   |     ├── FooterStyled.js
│   │   │   │   |     └── localization.js
│   │   │   |   └──── Navbar
│   │   │   │         ├── localization.js
│   │   │   │         ├── Navbar.js
│   │   │   │         └── NavbarStyled.js
│   │   │   ├── Messages
│   │   │   │         └── __stories__
|   |   |   |             └── Messages.stories.js
│   │   │   │         ├── Messages.js
│   │   │   │         └── MessagesStyled.js
│   │   │   ├── Modal
│   │   │   │         └── __stories__
|   |   |   |             └── Modal.stories.js
│   │   │   │         ├── Modal.js
│   │   │   │         └── ModalStyled.js
│   │   │   ├── pages
│   │   │   |   ├─── Home
│   │   │   │   |     ├── Home.js
│   │   │   │   |     └── HomeStyled.js
│   │   │   |   |─── Login
│   │   │   │   |     ├── localization.js
│   │   │   │   |     ├── Login.js
│   │   │   │   |     └── LoginStyled.js
│   │   │   |   |─── PageNotFound
│   │   │   │   |     └── __stories__
|   |   |   |   |         └── PageNotFound.stories.js
│   │   │   │   |     ├── localization.js
│   │   │   │   |     ├── PageNotFound.js
│   │   │   │   |     └── PageNotFoundStyled.js
│   │   │   |   |─── Profile
│   │   │   │   |     ├── localization.js
│   │   │   │   |     ├── Profile.js
│   │   │   │   |     └── ProfileStyled.js
│   │   │   |   |─── ProfileForm
│   │   │   │   |     ├── FileUpload.js
│   │   │   │   |     ├── FileUploadStyled.js
│   │   │   │   |     ├── localization.js
│   │   │   │   |     ├── ProfileForm.js
│   │   │   │   |     └── ProfileFormStyled.js
│   │   │   |   |─── Register
│   │   │   │   |     ├── localization.js
│   │   │   │   |     ├── Register.js
│   │   │   │   |     └── RegisterStyled.js
│   │   │   |   └─── Welcome
│   │   │   │         └── __stories__
|   |   |   |             └── Welcome.stories.js
│   │   │   │         ├── localization.js
│   │   │   │         ├── Welcome.js
│   │   │   │         └── WelcomeStyled.js
│   │   │   └── Progress
│   │   │   │         └── __stories__
|   |   |   |             └── Progress.stories.js
│   │   │   │         ├── Progress.js
│   │   │   │         └── ProgressStyled.js
│   │   │   └── routing
│   │   │             └── PrivateRoutes.js
│   │   ├── constants
│   │   │      ├── common.js
│   │   │      ├── errors.js
│   │   │      ├── events.js
│   │   │      ├── favItem.js
│   │   │      ├── fileUpload.js
│   │   │      ├── form.js
│   │   │      ├── headers.js
│   │   │      ├── index.js
│   │   │      ├── languages.js
│   │   │      ├── link.js
│   │   │      ├── modal.js
│   │   │      ├── reactTooltipStyled.js
│   │   │      └── url.js
│   │   ├── context
│   │   │   └── authContext
│   │   │   │       ├── authContext.js
│   │   │   │       ├── authReducer.js
│   │   │   │       └── AuthState.js
│   │   │   └── favItemContext
│   │   │   │       ├── favItemContext.js
│   │   │   │       ├── favItemReducer.js
│   │   │   │       └── favItemState.js
│   │   │   └── profileContext
│   │   │           ├── profileContext.js
│   │   │           ├── profileReducer.js
│   │   │           └── profileState.js
│   │   ├── styles
│   │   │   └── theme.js
│   │   ├── translations
│   │   │   ├── en.json
│   │   │   └── hy.json
│   │   ├── utils
│   │   │   ├── colorPicker.js
│   │   │   └── setAuthToken.js
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── favicon.ico
│   │   ├── index.css
│   │   ├── index.html
│   │   ├── index.js
│   |   └── Routes.js
│   ├── .babelrc
│   ├── .editorconfig
│   ├── .eslintignore
│   ├── .eslintrc
│   ├── .gitignore
│   ├── .prettierignore
│   ├── .prettierrc
│   ├── package.json
│   ├── package-lock.json
│   └── webpack.config.js
├── server
|   ├── middleware
|   |   └── auth.js
|   ├── models
|   │   ├── favItem.js
|   │   ├── Profile.js
|   │   └── User.js
|   ├── mongoConfig
|   |   └── mongoDB.js
|   ├── node_modules
|   |   └── ...
|   ├── routes
|   │   ├── auth.js
|   │   ├── favItem.js
|   │   ├── profile.js
|   │   ├── register.js
|   │   └── upload.js
|   ├── .gitignore
|   ├── app.js
|   ├── package.json
|   └── package-lock.json
├── UML_diagrams
|       ├── Models.pdf
|       ├── REST.pdf
|       └── Project_Structura.pdf
├── README.md
```