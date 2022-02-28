import { getProviders, signIn, useSession } from 'next-auth/react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Loader from '../../components/Loader';


const signin = ({providers}) => {

    const {data:session,status}=useSession()
    const router = useRouter()

   

      useEffect(()=>{

        if(session){
            router.push('/')

        }

      },[session])

      if(session) return <Loader/>

     

  return (
    <div className='flex flex-col items-center h-screen pt-40 gap-y-8'>
        <Head>
       <title>Spotify Login</title>
       <meta name='description' content='trending songs'  />
     
     </Head>
     <Image
        src="https://rb.gy/y9mwtb"
        height={250}
        width={600}
        objectFit="contain"
        className="animate-pulse"
      />

      {Object.values(providers).map((provider)=>(
          <div key={provider.name}>
          <button className='text-white py-4 px-6 rounded-full bg-[#1db954] transition duration-300
           ease-out border border-transparent uppercase
            font-bold text-xs md:text-base tracking-wider hover:scale-105 
            hover:bg-[#0db146]' onClick={()=>signIn(provider.id)}>Sign In with {provider.name}  </button>

          </div>
      ))}

    </div>
  );
}

export default signin;


export const getServerSideProps=async()=>{

    const providers = await getProviders()
    return {
        props:{
            providers
        }
    }
}
