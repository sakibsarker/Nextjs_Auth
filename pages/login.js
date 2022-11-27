import React, { useState } from 'react'


import Head from 'next/head'
import Layout from '../layout/layout'
import Link from 'next/link'
import styles from "../styles/From.module.css"
import { HiFingerPrint,HiAtSymbol } from "react-icons/hi";
import {signIn,signOut} from "next-auth/react"

const login = () => {
  const[show,setShow]=useState(false)

  //google hendler function

  async function handleGoogleSignin(){
    signIn('google',{callbackUrl:"http://localhost:3000"})
  }
  
  

  return (
    <Layout>
        <Head>
            <title>Login</title>
        </Head>
        <section className="w-3/3 max-auto flex flex-col gap-10">
          <div>
            <h2 className="text-gray-800 text-2xl font-bold py-4">Explore</h2>
            <p className="text-gray-100 w-3/4 mx-auto">Loren</p>
          </div>
          <form className="flex flex-col gap-5">
            <div className={styles.input_group}>
              <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input_text}
              />
              <span className='icon flex items-center px-4' >
                <HiAtSymbol size={25}/>
              </span>
            </div>
            <div className={styles.input_group}>
              <input
              className={styles.input_text}
              type={`${show?"text":"password"}`}
              name="password"
              placeholder="password"
              />
              <span className='icon flex items-center px-4' onClick={()=>setShow(!show)}>
                <HiFingerPrint size={25}/>
              </span>

            </div>
            {/* login button */}
            <div className="input-button">
              <button className={styles.button} type="submit">
                Login
              </button>
            </div>
            <div className="input-button">
              <button onClick={()=>{handleGoogleSignin}} type="submit" className={styles.button_custom}>
                Sign in with Google
              </button>
              
            </div>
            <div className="input-button">
              <button type="submit" className={styles.button_custom}>
                Sign in with Github
              </button>
            </div>
            <p className="text-center text-gray-100"> 
            dont' have an acccount yet?<Link href="/register" legacyBehavior><a className="ml-3 text-blue-500">Sign Up</a></Link>
            </p>
          </form>
        </section>
    </Layout>
  )
}

export default login