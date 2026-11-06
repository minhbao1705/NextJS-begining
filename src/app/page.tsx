
// import Image from 'next/image'
// import styles from './page.module.css'
import Link from 'next/link';
import x from '@/styles/app.module.css';
import y from '@/styles/hoidanit.module.css';
// import Container from 'react-bootstrap/esm/Container';
// import AppTable from '@/components/app.table';
// import { useEffect } from 'react';
// import useSWR from 'swr';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HomePage',
  description: 'Description bla bla',
}
export default function Home() {

  // const fetcher = async (url: string) => fetch(url).then((res) => res.json());
  
  // const {data, error, isLoading} = useSWR("http://localhost:8000/blogs", 
  // fetcher, {
  // revalidateIfStale: false,
  // revalidateOnFocus: false,
  // revalidateOnReconnect: false
  // });

  // console.log(">>> check data: ", data)

  // // useEffect(() => {
  // //   const fetchData = async() =>{
  // //     const res = await fetch("http://localhost:8000/blogs")
  // //     const data = await res.json()
  // //     console.log(">>> check data: ", data)
  // //   }
  // //   fetchData()
  // // }, [])

  // if (!isLoading){
  //   return <div>Loading...</div>
  // }

  return (
    <div>
      <ul>
        <li className={x['red']}>
          <Link href="/facebook">
          <span className={y['red']}>Facebook</span>
          </Link>
        </li>
        <li style={{ margin: '20px 0' }}>
          <Link href="/youtube"> Youtube </Link>
        </li>
        <li>
          <Link href="/tiktok">TikTok</Link>
        </li>
          {/* <AppTable 
            blogs={data?.sort((a: any, b: any) => b.id - a.id)}
          /> */}
      </ul>
    </div>
  )
}
