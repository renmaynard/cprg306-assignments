'use client'

import { useEffect } from "react";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";
 
export default function Page(){
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    
    async function handleSignIn(){
        await gitHubSignIn();
    }

    async function handleSignOut(){
        await firebaseSignOut();
    }

    useEffect(
        () =>{
        },
        [user]
    )
    
    return(
        <main>
            <h1>Welcome</h1>
            {user== null ?
            <button onClick={handleSignIn}>Log In</button>:
            <div>
            <h3>{user?.displayName}</h3>
            <Link href='week10/shopping-list'>Shopping List</Link><br></br>
            <button onClick={handleSignOut}>Log Out</button>
            </div>
            }
        </main>
    );
}