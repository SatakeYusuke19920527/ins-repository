import Layout from '../components/layout';
import liff from '@line/liff';
import styles from '../styles/Login.module.css';
const Line = () => {
  const lineLogin = () => {
    console.log('🚀 ~ file: login.tsx ~ line 7 ~ lineLogin ~ lineLogin start');
    liff
      .init({ liffId: process.env.REACT_APP_LIFF_ID as string }) // LIFF IDをセットする
      .then(() => {
        if (!liff.isLoggedIn()) {
          liff.login({}); // ログインしていなければ最初にログインする
        } else if (liff.isInClient()) {
          // LIFFので動いているのであれば
          liff
            .sendMessages([
              {
                // メッセージを送信する
                type: 'text',
                text: "You've successfully sent a message! Hooray!",
              },
            ])
            .then(() => {
              window.alert('Message sent');
            })
            .catch((error: any) => {
              window.alert('Error sending message: ' + error);
            });
        }
      });
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
