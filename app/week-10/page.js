"use client"

import Link from "next/link"
import { useUserAuth } from "./_utils/auth-context"

export default function LandingPage(){

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    
    async function handleSignIn(){
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    async function handleSignOut(){
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    }

    let linkStyle = "underline text-cyan-800 hover:text-cyan-600 flex justify-center p-2";

    return(
        <main className="bg-blue-200 p-3">
            <div className="flex justify-center">
                <header>
                    <h1 className="text-3xl font-bold">Shopping List</h1>
                </header>
            </div>
            { user ? (
                <div>
                    <p className="flex justify-center p-2">Welcome {user.displayName} ({user.email})!</p>
                    <Link href="/week-10/shopping-list" className={linkStyle}>Go To The Shopping List</Link>
                    <div className="flex justify-center">
                        <button 
                        type="button"
                        className="bg-blue-400 hover:bg-blue-700 text-white rounded py-2 px-4 mt-5"
                        onClick={handleSignOut}
                        >Sign Out</button>
                    </div>
                </div>
            ) : (
                <div>
                    <p className="flex justify-center">Please sign in to continue.</p>
                    <div className="flex justify-center">
                        <button 
                        type="button"
                        className="bg-blue-400 hover:bg-blue-700 text-white rounded py-2 px-4 mt-5"
                        onClick={handleSignIn}
                        >Sign In</button>
                    </div>
                </div>
            )}
        </main>
    )
}