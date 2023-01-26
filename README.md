006 - Movie App (folder)
|
|----readme.md  
SOLUTION
├── public
│ └── index.html
├── src
│ ├── auth
│ │ └── firebase.js
│ ├── components
│ │ ├── MovieCard.jsx
│ │ └── Navbar.jsx
│ │ └── Review.jsx
│ │ └── VideoSection.jsx
│ ├── context
│ │ └── AuthContextProvider.jsx
│ ├── helpers
│ │ └── ToastNotify.js
│ ├── pages
│ │ ├── Login.jsx
│ │ ├── Register.jsx
│ │ ├── Main.jsx
│ │ └── MovieDetail.jsx
│ ├── router
│ │ └── AppRouter.jsx
│ │ └── PrivateRouter.jsx
│ ├── App.js
│ ├── index.css
│ ├── index.js
│  
├── package.json
├── .env
└── yarn.lock
Projede Kullanılan Teknolojiler

-HTML
-CSS
-JAVASCRİPT
-REACT
-CONTEXT API
-Firebase
-Bootstrap

Firebase ile Authendication İşlemleri İçin Kullanılan Kod Blogları

````jsx
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration at project settings part
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);



Use this method to `Sign up new users` :

```jsx
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
  })
  .catch((error) => {
    console.log(error);
  });
````

- Go to https://console.firebase.google.com => Authentication => sign-in-method => `enable Email/password`
- Use this method to `Sign in existing users` :

```jsx
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
  })
  .catch((error) => {
    console.log(error);
  });
```

- Use this method to `Set an authentication state observer and get user data` :

```jsx
import { getAuth, onAuthStateChanged } from "firebase/auth";

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
  } else {
    // User is signed out
  }
});
```

- Use this method to `Sign Out` :

```jsx
import { getAuth, signOut } from "firebase/auth";

signOut(auth)
  .then(() => {
    // Sign-out successful.
  })
  .catch((error) => {
    // An error happened.
  });
```

- Use this method to `Send a password reset email` :

```jsx
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
  })
  .catch((error) => {
    const errorMessage = error.message;
    // ..
  });
```

                                               TMDB FİLM API nin kullanılan endpointleri

`https://www.themoviedb.org/documentation/api` adresine kaydolun ve API anahtarını alın.
-Veri almak için `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`,
-film aramak için `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`,
-film ayrıntılarını almak için `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}` kullanın
-video anahtarı kullanımını alın `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}
-Kategorisine göre film getirmek için `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=`;

                                    Kullanılan Kütüphanaler

-axios
-bootstrap
-react-router-dom@6.3
-react-toastify

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
