import 'antd/dist/antd.css';
import '../styles/globals.scss';
import Layout from '../components/layouts';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
