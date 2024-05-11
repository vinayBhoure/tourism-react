import React, { Children, createContext, useContext, useEffect, useState } from 'react';
import {ID, account} from '../appwrite/appwriteConfig'
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export const useUserContext = () => {
    return useContext(UserContext);
}


export const UserContextProvider = ({children}) => {

    const [authUser, setAuthUser] = useState(null);
    const navigate = useNavigate();

    const loginUser = async (userInfo) => {
        try{
         const response = await account.createEmailPasswordSession(
            userInfo.email,
            userInfo.password
         )
         const accountInfo = await account.get()
         console.log('Session:', response);
         console.log('deatial', accountInfo);
         setAuthUser(accountInfo);
         navigate('/', {
            		replace: true
            	})
        }catch(error){
            console.error(error);
        }
    }
    const logoutUser = async() =>{
        const result = await account.deleteSession('current')
        setAuthUser(null)
    }
    const userStatus = async() => {
        try{
            const details = await account.get();
            setAuthUser(details)
        }
        catch(error){
            console.log(error)
        }
    }
    const signupUser = async(userInfo) => {
        try{
          const user = await account.create(
            ID.unique(),
            userInfo.email,
            userInfo.password,
            userInfo.name
          )

          const response = await account.createEmailPasswordSession(
            userInfo.email,
            userInfo.password
         )
         const accountInfo = await account.get()
         console.log('Session:', response);
         console.log('deatial', accountInfo);
         setAuthUser(accountInfo);
         navigate('/', {
            		replace: true
            	})

        }catch(error){
            console.error(error);
        }
    }

    const context = {
        authUser,
        loginUser,
        logoutUser,
        userStatus,
        signupUser
    }

    useEffect( ()=>{
        userStatus();
    },[])
    return (
        <UserContext.Provider value={context}>
            {children}
        </UserContext.Provider>
    )
}