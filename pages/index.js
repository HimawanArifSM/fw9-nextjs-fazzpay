import {  Navbar, Container} from 'react-bootstrap'
// import {Image, Link} from 'next'
import Head from 'next/head' 
import Link from "next/link"
import Image from 'next/image'


// import '../styles/style.css'
// import phone1 from '../assets/images/png-phone.png'
// import partnerBrand from '../assets/images/group-24.png'
// import phone2 from '../assets/images/png-phone2.png'
// import user1 from '../assets/images/1.png'
// import user2 from '../assets/images/2.png'
// import user3 from '../assets/images/Rectangle 25.png'
import { FiDownload, FiLock, FiPhone } from 'react-icons/fi'
// import { useSelector } from 'react-redux'


export default function index() {
  return (
    <>
    {/* <section> */}
      <header className='lp-header'>
        <Navbar>
          <Container className='d-flex justify-content-between'>
              <div>
                <h1>J-Money</h1>
              </div>
              <div className='d-flex gap-2'>
                <Link  href="/login"><a className='blue-button text-decoration-none'>login</a></Link>
                <Link  href="/register"><a className='white-button text-decoration-none'>Sign Up</a></Link>
              </div>
            </Container>
        </Navbar>
        <section>
          <div className="flex-btwn ">
              <div className='flex-col pad-r200'>
                  <h1>
                      <span className='font-700'>Awesome App For Saving </span><span className='main-clr font-700'>Time.</span>
                  </h1>
                  <p className="font-400">We bring you a mobile app for banking problems that
                      oftenly wasting much of your times.</p>
                  <div>
                    {/* <a href="/register.html"> */}
                      <Link  href="/register"><a className='blue-button text-decoration-none'>Try It Free</a></Link>
                      {/* </a> */}
                  </div>
              </div>
              <div className='flex-col'>
                  <Image width={439} height={846} src='/images/png-phone.png' alt="pict"/>
              </div>
          </div>
        </section>
      </header>
      <section>
        <div className='bg-main pad-main'>
          <div className='text-ctr pad-sec-1'>
              <h1>About the Application.</h1>
              <p >We have some great features from the application and it&apos;s totally free to use by all users around the world.</p>
          </div>
          <div className="flex-btwn pad-sec-1">
              <div className='text-ctr pad-sec-1 d-flex flex-column gap-4 align-items-center'>
                  <div  className='bg-round align-items-center d-flex justify-content-center'>
                  <FiPhone size={40} color='blue'/>
                  </div>
                  <h2>24/7 Support</h2>
                  <p>We have 24/7 contact support so you can contact us whenever you want and we will respond it.</p>
              </div>
              <div className='text-ctr pad-sec-1 d-flex flex-column gap-4 align-items-center'>
                  <div className='bg-round align-items-center d-flex justify-content-center'>
                    <FiLock size={40} color='blue'/>
                  </div>
                  <h2>Data Privacy</h2>
                  <p>We make sure your data is safe in our database and we will encrypt any data you submitted to us.</p>
              </div>
              <div className='text-ctr pad-sec-1 d-flex flex-column gap-4 align-items-center'>
                  <div className='bg-round align-items-center d-flex justify-content-center'>
                    <FiDownload size={40} color='blue'/>
                  </div>
                  <h2>Easy Download</h2>
                  <p>Zwallet is 100% totally free to use it&apos;s now available on Google Play Store and App Store.</p>
              </div>
          </div>
        </div>
      </section>
      <section>
        <div className='flex-btwn pad-main'>
          <div className='flex-col'>
              <h1>100+ <span >Trusted</span> Partners.</h1>
              <p>We have reached global level and have 100+brand partners around the globe.</p>
          </div>
          <div className='flex-col'>
              <Image  width={560} height={270}  src='/images/group-24.png' alt="pict"/>
          </div>
        </div>
      </section>
      <section>
        <div className='bg-main flex-btwn pad-main'>
          <div className='flex-col'>
              <Image  width={450} height={856} src='/images/png-phone2.png' alt="pict"/>
          </div>
          <div className='flex-col'>
              <div className='margin-btm'>
                  <h1>All The <span className='main-clr'>Great</span> Zwallet Features.</h1>
              </div>
              <div className='bg-white margin-btm'>
                  <h3>1. Small Fee</h3>
                  <p>We only charge 5% of every success transaction done in Zwallet app.</p>
              </div>
              <div className='bg-white margin-btm'>
                  <h3>2. Data Secured</h3>
                  <p>All your data is secured properly in our system and it&apos;s encrypted.</p>
              </div>
              <div className='bg-white'>
                  <h3>3. User Friendly</h3>
                  <p>Zwallet come up with modern and sleek design and not complicated.</p>
              </div>
          </div>
        </div>
      </section>
      <section>
        <div className='text-ctr pad-main'>
          <div className='text-ctr pad-sec-1'>
              <h1>What Users are Saying.</h1>
              <p >We have some great features from the application and it&apos;s totally free to use by all users around the world.</p>
          </div>
          <div className="flex-btwn pad-sec-1">
              <div className='text-ctr pad-sec-1'>
                  <Image width={60} height={60}  src='/images/1.png' alt="pict"/>
                  <h2>Sherina Chaw</h2>
                  <p>“I use this app since 2 years ago and this is the best app that I&apos;ve ever use in my entire life”</p>
              </div>
              <div className='text-ctr pad-sec-1'>
                  <Image  width={60} height={60} src='/images/2.png' alt="pict"/>
                  <h2>Jessica Mera</h2>
                  <p>“I use Zwallet to manage all financial needs. It&apos;s super easy to use and it&apos;s 100% free app”</p>
              </div>
              <div className='text-ctr pad-sec-1'>
                  <Image  width={60} height={60} src='/images/Rectangle25.png' alt="pict"/>
                  <h2>Robert Chandler</h2>
                  <p>“Since I&apos;m using this app, I&apos;m not going to move to another similar app. Thank you Zwallet!”</p>
              </div>
          </div>
        </div>
      </section>
      <section>
        <div className='bg-main pad-main flex-col'>
          <h1>Zwallet</h1>
          <p>Simplify financial needs and saving much time in banking needs with one single app.</p>
          <hr/>
          <div className='flex-btwn'>
              <p>2020 Zwallet. All right reserved.</p>
              <div >            
                  <p>+62 5637 8882 9901</p>
                  <p>contact@zwallet.com</p>
              </div>
          </div>
        </div>
      </section>
    {/* </section> */}
    
    </>
  )
}