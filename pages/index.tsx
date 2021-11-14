import { useEffect } from 'react';
import type { NextPage } from 'next';
import Layout from '../components/layout';
import Card from '../components/card';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  // useEffect(() => {
  //   const unSub = auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       dispatch(
  //         login({
  //           uid: authUser.uid,
  //           photoURL: authUser.photoURL,
  //           displayName: authUser.displayName,
  //           email: authUser.email,
  //         })
  //       );
  //     } else {
  //       dispatch(logout());
  //     }
  //   });
  //   return () => {
  //     unSub();
  //   };
  // }, [dispatch]);
  return (
    <Layout>
      <h1 className={styles.title}>
        Welcome to <a href="https://proaca.tech/">ProAca.inc</a>
      </h1>
      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/index.js</code>
      </p>

      <div className={styles.grid}>
        <Card
          params={{
            route: '/login',
            title: 'firebase login',
            description: 'Firebase Login API.',
          }}
        />
        <Card
          params={{
            route: '/line',
            title: 'Line message',
            description: 'line messaging API.',
          }}
        />
        <Card
          params={{
            route: '/line',
            title: 'Line message',
            description: 'line messaging API.',
          }}
        />
        <Card
          params={{
            route: '/line',
            title: 'Line message',
            description: 'line messaging API.',
          }}
        />
      </div>
    </Layout>
  );
};

export default Home;
