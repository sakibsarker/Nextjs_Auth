import Head from 'next/head'
import React, { useState } from 'react'
import Layout from '../layout/layout'
import styles from "../styles/From.module.css"
import { HiFingerPrint,HiAtSymbol } from "react-icons/hi";
import Link from 'next/link'
const register = () => {
  const[show,setShow]=useState({password:false,cpassword:false})
  return (
    <Layout>
      <Head>
        <title>register</title>
      </Head>
      <section className="w-3/3 max-auto flex flex-col gap-10">
          <div>
            <h2 className="text-gray-800 text-2xl font-bold py-4">Explore</h2>
            <p className="text-gray-100 w-3/4 mx-auto">Loren</p>
          </div>
          <form className="flex flex-col gap-5">
            <div className={styles.input_group}>
              <input
              type="Username"
              name="Username"
              placeholder="Username"
              className={styles.input_text}
              />

            </div>
            <div className={styles.input_group}>
              <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input_text}
              />

            </div>
            <div className={styles.input_group}>
              <input
              className={styles.input_text}
              type={`${show.password?"text":"password"}`}
              name="password"
              placeholder="password"
              />
              <span className='icon flex items-center px-4' onClick={()=>setShow({...show,password:!show.password})}>
                <HiFingerPrint size={25}/>
              </span>

            </div>
            <div className={styles.input_group}>
              <input
              className={styles.input_text}
              type={`${show.cpassword?"text":"password"}`}
              name="Confirm password"
              placeholder="Confirm password"
              />
              <span className='icon flex items-center px-4' onClick={()=>setShow({...show,cpassword:!show.cpassword})}>
                <HiFingerPrint size={25}/>
              </span>

            </div>
            {/* login button */}
            <div className="input-button">
              <button className={styles.button} type="submit">
                Login
              </button>
            </div>
            <p className="text-center text-gray-100"> 
            you have already account?
            <Link href="/login" className="text-green" legacyBehavior><a className="ml-3 text-blue-500">Sign in</a></Link>
            </p>
          </form>
        </section>
    </Layout>
  )
}

export default register