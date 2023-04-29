import { ButtonLink } from '@/components/Button';
import { Container, Spacer, Wrapper } from '@/components/Layout';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <Wrapper>
        <h1 className={styles.title}>
          <span className={styles.mongodb}>NextBlog</span>
        </h1>
         <p className={styles.subtitle}>
         This app allows you to create a profile, sign in, create posts & comments
        </p>
        <Container justifyContent="center" className={styles.buttons}>
          <Container>
            <Link passHref href="/feed">
              <ButtonLink className={styles.button}>Explore Feed</ButtonLink>
            </Link>
          </Container>
          <Spacer axis="horizontal" size={1} />
        </Container>
    </Wrapper>
  );
};

export default Hero;
