import styles from '@/styles/Home.module.css';
import { LoginForm } from '@/components/Forms/Login';
import { homeServerSideProps } from '@/util/next/getServerSideProps/home';

export default function Home() {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
}

export const getServerSideProps = homeServerSideProps;
