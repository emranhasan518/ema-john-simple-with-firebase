import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeAuthentication = () =>{
    const app = initializeApp(firebaseConfig);
}

export default initializeAuthentication;


/* 
step-1: steps for authentication  
initial setup
1. firebase: create project
2. create web app
3. get configaration
4. initialize firebase 
5. enable auth method

.......................

step-2: setup componant
1. Create Log in Route Component
2. Create register Route Component
3. Crate ROute for log in

------------------------

step-3: set auth system
1. set up sign in method
2. set up signOut method\
3. user state
4. special observer
5. return nessecery meth and states from useFirebase

---------------------------

step 4: create auth context hook (useAuth)
1. create a auth context
2. create context provider
3. set context provider context value
4. use auth provider
5. create useAuth hook

----------------------------

step 5: create private route
1. create private route
2. set private route 

----------------------------

step-6: redirect after login
1. after login redirect user to their desiar destination
*/