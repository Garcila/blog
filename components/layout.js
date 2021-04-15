import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Up In The Clouds';
export const siteTitle = 'Up In The Clouds';

export default function Layout({children, home}) {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='German Arcila Personal Blog' />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src='/images/air_mountain.png'
              className={utilStyles.borderCircle}
              height={194}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <Link href='/'>
            <a>
              <Image
                priority
                src='/images/air_mountain.png'
                className={utilStyles.borderCircle}
                height={194}
                width={144}
                alt={name}
              />
            </a>
          </Link>
        )}
      </header>
      <div className={styles.container}>
        <main>{children}</main>
      </div>
      {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </>
  );
}
