import type { NextPage } from 'next'
import Image from 'next/image'
import { Header } from '../components/Header'
import styles from '../styles/Home.module.scss'
import IntroImage from '../../public/illustration-intro.png';
import Computer from '../../public/icon-access-anywhere.svg';
import Security from '../../public/icon-security.svg';
import Collaboration from '../../public/icon-collaboration.svg';
import Files from '../../public/icon-any-file.svg';
import Curvy from '../../public/bg-curvy-mobile.svg';
import StayProductive from '../../public/illustration-stay-productive.png';
import FirstProfile from '../../public/profile-1.jpg';
import SecondProfile from '../../public/profile-2.jpg';
import ThirdProfile from '../../public/profile-3.jpg';
import { Button } from '../components/Button';
import { FeaturesItem } from '../components/FeaturesItem';
import { Contents } from '../utils/features';
import { Anchor } from '../components/Anchor';
import { Quotes } from '../components/Quotes';
import { QuotesContent } from '../utils/quotes';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <section className={styles.intro}>
          <div className={styles.wrapperCurvy}>
            <Image src={Curvy} alt=""/>
          </div>
          <div className={styles.wrapperIllustration}>
            <Image src={IntroImage} alt=""/>
          </div>                                               
      </section>
      <main className={styles.main}>
        <div className={styles.containerGetStarted}>
          <strong>
            All your files in one secure
            location, accessible anywhere.
          </strong>
          <p>
            Fyla stores all your most important
            files in one secure location. Access
            them whenever you need, share and collaborate
            with friends, family and co-workers.
          </p>
          <div className={styles.wrapperButton}>
            <Button title="Get ready"/>
          </div>
        </div>
        <div className={styles.containerFeatures}>
          <FeaturesItem 
            title="Access your files, anywhere"
            content={Contents.first}
            image={Computer}          
          />
          <FeaturesItem 
            title="Security you can trust"
            content={Contents.second}
            image={Security}          
          />          
          <FeaturesItem 
            title="Real-time collaboration"
            content={Contents.third}
            image={Collaboration}          
          />
          <FeaturesItem 
            title="Store any type of file"
            content={Contents.fourth}
            image={Files}          
          />
        </div>
        <div className={styles.containerProductive}>
            <div>
              <Image src={StayProductive} alt=""/>
            </div>
            <strong>
              Stay productive, wherever you are
            </strong>
            <p>
              Never let location be an issue when accesing
              your files. Fylo has you covered for all of
              your life storage needs.                            
            </p>
            <p>
              Securely share files and folders with friends,
              family and colleagues for live collaboration.
              No email attachments required.
            </p>                        
        </div>
        <div className={styles.wrapperAnchor}>
          <Anchor href="/" title="See how Fylo works"/>
        </div>
        <div className={styles.containerQuotes}>
          <Quotes 
            content={QuotesContent.first}
            name="Satish Patel"
            image={FirstProfile}
            role="Founder & CEO, Huddle"
          />
          <Quotes 
            content={QuotesContent.first}
            name="Satish Patel"
            image={SecondProfile}
            role="Founder & CEO, Huddle"
          />
          <Quotes 
            content={QuotesContent.first}
            name="Satish Patel"
            image={ThirdProfile}
            role="Founder & CEO, Huddle"
          />
        </div>
      </main>
    </div>
  )
}

export default Home
