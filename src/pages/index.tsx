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
import CurvyDesktop from '../../public/bg-curvy-desktop.svg';
import Logo from '../../public/logo.svg';
import Email from '../../public/icon-email.svg';
import Location from '../../public/icon-location.svg';
import Phone from '../../public/icon-phone.svg';
import { BsFacebook } from 'react-icons/bs';
import { FiTwitter, FiInstagram } from 'react-icons/fi';
import { Button } from '../components/Button';
import { FeaturesItem } from '../components/FeaturesItem';
import { Contents } from '../utils/features';
import { Anchor } from '../components/Anchor';
import { Quotes } from '../components/Quotes';
import { QuotesContent } from '../utils/quotes';
import { Card } from '../components/Card';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <section className={styles.intro}>
          <div className={styles.wrapperCurvy}>
            <Image src={Curvy} alt=""/>            
          </div>
          <div className={styles.wrapperCurvyDesktop}>
            <Image src={CurvyDesktop} alt="curvyDesktop"/>
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
            <div className={styles.wrapperText}>
              <strong>
                Stay productive,<br/> wherever you are
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
              <div className={styles.wrapperAnchorDesktop}>
                <Anchor href="/" title="See how Fylo works"/>
              </div>
            </div>                        
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
        <div className={styles.wrapperEmail}>
          <Card />          
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.wrapperLogoDesktop}>
          <Image src={Logo} alt="logo" />
        </div>        
        <div className={styles.containerContact}>          
            <div className={styles.wrapperLogo}>
              <Image src={Logo} alt="logo"/>
            </div>            
            <div>
              <div className={styles.wrapperContactIcons}>
                <Image src={Location} alt=""/>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor metus diam, nec hendrerit tellus dictum et.
                Phasellus tempor non risus volutpat lacinia. 
              </p>
            </div>
            <div>
              <div className={styles.wrapperPhoneDesktop}>
                <div className={styles.wrapperPhone}>
                  <Image src={Phone} alt="" />
                </div>
                <p className={styles.phoneText}>
                  +1-543-123-4567 
                </p>
              </div>
            </div>
            <div className={styles.wrapperEmailDesktop}>
              <div>
                <div className={styles.wrapperContactIcons}>
                  <Image src={Email} alt=""/>
                </div>
                <p>
                  example@fylo.com
                </p>
              </div>
            </div>
            <div className={styles.containerLinks}>
              <section className={styles.content}>
                <a>AboutUs</a>
                <a>Jobs</a>
                <a>Press</a>
                <a>Blog</a>
              </section>
              <section className={styles.content}>
                <br />
                <a>Contact Us</a>
                <a>Terms</a>
                <a>Privacy</a>
              </section>
            </div>
            <div className={styles.containerSocialMedia}>
              <BsFacebook color="#FFFFFF" />
              <FiTwitter color="#FFFFFF" />
              <FiInstagram color="#FFFFFF" />
            </div>                                        
        </div>
        <div className={styles.containerLinks}>          
            <a>AboutUs</a>
            <a>Jobs</a>
            <a>Press</a>
            <a>Blog</a>          
            <br />
            <a>Contact Us</a>
            <a>Terms</a>
            <a>Privacy</a>          
        </div>
        <div className={styles.containerSocialMedia}>
          <BsFacebook color="#FFFFFF" />
          <FiTwitter color="#FFFFFF" />
          <FiInstagram color="#FFFFFF" />
        </div>
      </footer>
    </div>
  )
}

export default Home
