import { useSession } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Body from '../components/Body'
import Dashboard from '../components/Dashboard'
import Loader from '../components/Loader'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter()

  const {status,data:session}=useSession({
    required:true,
    onUnauthenticated(){
      router.push('/auth/signin')
    }
  })

  if(status==='loading'){
    return <Loader/>
  }

  console.log(session)

  return (
    <div className={styles.container}>
     <Head>
       <title>Spotify DashBoard</title>
       <meta name='description' content='trending songs'  />
     </Head>

     <Dashboard/>
   
    </div>
  )
}

