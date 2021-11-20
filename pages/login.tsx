import Layout from '../components/layout';

import styles from '../styles/Login.module.css';
const Line = () => {
  const lineLogin = () => {
    console.log('🚀 ~ file: login.tsx ~ line 7 ~ lineLogin ~ lineLogin start');
  };

  return (
    <Layout>
      <button onClick={lineLogin} className={styles.button}>
        LINE loign
      </button>
    </Layout>
  );
};

export default Line;
