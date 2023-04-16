'use client';

import { useEffect, useState } from 'react';
import { useGlobalContext } from './Context/store';
import styles from './page.module.css';

export default function Home() {
  const { name, setName } = useGlobalContext();

  const [all, setAll] = useState([
    { firstName: 'Tim' },
    { firstName: 'Kyle' },
    { firstName: 'Michael' }
  ])

  return (
    <div className={styles.container}>
      <p className='text-rose-700'>{name ? name : "name go apper here"}</p>
      <p className='text-red-600'>List:</p>
      {all.map((e, i) => <p className='cursor-pointer' onClick={() => setName(e.firstName)} key={i}>{e.firstName}</p>)}
    </div>
  )
}
