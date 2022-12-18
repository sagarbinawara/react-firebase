import {initializeApp} from "firebase/app"
import   {getAuth} from "firebase/auth"

// const app = firebase.initializeApp({
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGEING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID
// })
// export const auth = app.auth()
// export default app
const firebaseConfig = {
    apiKey:"AIzaSyCxZhnvuUdQ5D1mww29RsUnIA5WCmXwl6Y",
    authDomain:"auth-production-2439e.firebaseapp.com",
    projectId:"auth-production-2439e",
    storageBucket:"auth-production-2439e.appspot.com",
    messagingSenderId:"975989668182",
    appId:"1:975989668182:web:8c89884154e018632b3ef7",
}
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {app, auth}