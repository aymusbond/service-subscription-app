import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const app = initializeApp(
    {
        apiKey: "AIzaSyAh4JFLOg2G0WJjkm45wRKYYg3OvH-QCk4",
        authDomain: "richpanel-632b2.firebaseapp.com",
        projectId: "richpanel-632b2",
        storageBucket: "richpanel-632b2.appspot.com",
        messagingSenderId: "996655494248",
        appId: "1:996655494248:web:9737623a8422972a75f7dd",
        measurementId: "G-0M5D71G067"
      }
);

export const auth = getAuth(app);
export default app;