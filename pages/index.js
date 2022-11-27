import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import styles from "../styles/Home.module.css"
import {useSession} from "next-auth/react"


export default function Home() {

  const{data:session}=useSession()

  return (
    <div className={styles.container}>
      <Head>
        <title>Home page</title>
      </Head>
     {session?User({session}):Guest()}
    </div>
  )
}
//Guest user
 function Guest(){
  return(
    <main className="container max-auto text-center py-20">
      <h3 className="text-3xl font-bold">
        Guest Homepage
      </h3>
      <div className='flex justify-center'>
        <Link href="/login" legacyBehavior>
          <a className='mt-10 px-10 py-1 rounded-full bg-indigo-500 text-yellow-50'>Sign in</a>
          </Link>
      </div>
      
    </main>
  )
 }

 //authorize user

 function User({session}){
  return(
    <main className="container max-auto text-center py-20">
    <h3 className="text-3xl font-bold">
      Authorize user Homepage
    </h3>
    <div className="detials">
      <h5>{session.user.name}</h5>
      <h5>{session.user.email}</h5>
    </div>
    <div className="flex justify-center">
      <button className="mt-5 px-10 py-1 rounded-full bg-indigo-400 text-yellow-50">Sing out</button>

    </div>
    <div className='flex justify-center'>
      <Link href="/profile" legacyBehavior>
        <a className='mt-10 px-10 py-1 rounded-full bg-indigo-500 text-yellow-50'>Profile Page</a>
        </Link>
    </div>
    
  </main>
  )
 }