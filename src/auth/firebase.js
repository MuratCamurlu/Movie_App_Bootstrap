import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from "../helpers/ToastNotify";

//https://firebase.google.com/docs/auth/web/start adresinden ana şablonu aldım.Adım adım aşşağıaki bölümlerde anlatacağım.

//https://console.firebase.google.com/=>project overwiew ın içinde  project setting kısmında firebaseConfig içeriğini aldım.Bu içeriği .env dosyasının içine attım..env dosyasınından verilerimi  process.env yardımı ile aşşağıdaki gibi aldım..env dosyamı da gitignore yükledim.

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};
//Bunun gibi bir uygulama geliştirirken de bazı bilgileri değişkenlerde gizlenmek zorunda kalabiliriz.
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const createUser = async (email, password, navigate, displayName) => {
  //yeni bir kullanıcı oluşturuken kullanılan firebase metodu.Register sayfasında kullandım.
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    //kullanıcı profilini güncellemek için kullanılan firebase metodu.
    //https://firebase.google.com/docs/auth/web/manage-users
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    // console.log(newUser);
    navigate("/");
    toastSuccessNotify("Registered successfully!");
  } catch (error) {
    toastErrorNotify(error.message);
  }
};

export const signIn = async (email, password, navigate) => {
  //kayıtlı bir kullanıcı bilgileri ile mi girildi diye kontrol ettiğim firebase metodu.
  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/");
    toastSuccessNotify("Logged in successfully!");
  } catch (error) {
    toastErrorNotify(error.message);
  }
};

export const userObserver = (setCurrentUser) => {
  //kullanıcının login logout olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu.
  onAuthStateChanged(auth, (user) => {
    if (user) {
      //signIn
      // console.log(user);
      const { email, displayName } = user;
      setCurrentUser({ email, displayName });
    } else {
      //signOut
      setCurrentUser(false);
    }
  });
};

export const logOut = () => {
  // https://firebase.google.com/docs/auth/web/password-auth sayfasında .
  signOut(auth);
  toastSuccessNotify("Logged out successfully!");
};

export const forgotPassword = (email) => {
  // Email yoluyla şifre sıfırlama için kullanılan firebase metodu
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      toastWarnNotify("Please check your mail box!");
    })
    .catch((err) => {
      toastErrorNotify(err.message);
    });
};

export const signUpWithGoogle = (navigate) => {
  const provider = new GoogleAuthProvider();
  //açılır pencere ile giriş yapmak için kullanılan firebase metodu.
  signInWithPopup(auth, provider)
    .then((result) => {
      navigate("/");
    })
    .catch((error) => {
      toastErrorNotify(error.message);
    });
};
