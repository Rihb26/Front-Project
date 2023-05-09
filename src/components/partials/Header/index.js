import React, { useEffect, useState, useContext } from 'react';
import styles from './index.module.scss';
import Button from '@/components/UI/Button/';
import { useRouter } from 'next/router';
import UserContext from '@/context/UserContext';


const index = () => {
  const [active, setActive] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', isActive);
    return () => {
      window.removeEventListener('scroll', isActive);
    };
  }, []);

  const router = useRouter();
  const { user, isLogged, logout } = useContext(UserContext);

  return (
    <div
      className={
        active ? `${styles.wrapper} ${styles.active}` : `${styles.wrapper}`
      }
    >
      <div className={styles.container}>
        <div className={styles.logo}>
          <span onClick={() => router.push('/')} className={styles.text}>
            Freelancer 
          </span>
          <span className={styles.dot}>.</span>
        </div>
        <div className={styles.links}>
          <span></span>
          <span></span>
          <span></span>
          {isLogged ? (
            <>
              <span
                className={styles.profil}
                onClick={() => router.push('/account/profil')}
              >
                {' '}
                {user && user.firstName}
              </span>
              <Button
                type="submit"
                title="Deconnexion"
                className="btn__primary"
                handleClick={() => logout()}
              />
              {user && user.isAdmin ? (
                <Button
                  type="submit"
                  title="Admin"
                  className="btn__primary"
                  handleClick={() => router.push('/admin')}
                />
              ) : null}
            </>
          ) : (
            <>
              <Button
                type="submit"
                title="Connexion"
                className="btn__primary"
                handleClick={() => router.push('/auth/login')}
              />
              <Button
                type="submit"
                title="S'inscrire Company"
                className="btn__primary"
                handleClick={() => router.push('/auth/register/entreprise')}
              />
              <Button
                type="submit"
                title="S'inscrire Frelancer"
                className="btn__primary"
                handleClick={() => router.push('/auth/register/freelance')}
              />
            </>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default index;
