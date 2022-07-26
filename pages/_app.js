import 'antd/dist/antd.css';
import '../styles/globals.scss';
import Layout from '../src/components/layouts';
import { useEffect, useState } from 'react';
import { getCurrentUser, listenUserState } from '../src/services/auth';
import { useRouter } from 'next/router';
import { useListen } from '../src/hooks/useListen';

function MyApp({ Component, pageProps }) {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = listenUserState((user) => {
      if (user) {
        setIsLogin(true);
        router.push('/');
      } else {
        setIsLogin(false);
        router.push('/login');
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
