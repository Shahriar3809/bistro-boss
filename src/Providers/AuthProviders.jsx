import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";


export const AuthContext = createContext(null)
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic();
    const googleProvider = new GoogleAuthProvider();
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

     const googleLogin = () => {
       setLoading(true);
       return signInWithPopup(auth, googleProvider);
     };


    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // const googleLogin = () => {
        
    // }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser=> {
            setUser(currentUser)
            if(currentUser) {
                // get token and store
                const userInfo = {email: currentUser.email}
                axiosPublic.post("/jwt", userInfo)
                .then(res=> {
                    if(res.data.token) {
                        localStorage.setItem("access-token", res.data.token);
                    }
                })
            } else {
                // remove Token
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        })
        return ()=> {
            return unsubscribe();
        }
    },[axiosPublic])



    const authInfo = {
      user,
      loading,
      setLoading,
      setUser,
      createUser,
      logIn,
      logOut,
      googleLogin,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


AuthProviders.propTypes = {
  children: PropTypes.any,

};
export default AuthProviders;