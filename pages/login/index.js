import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from "react";
import Layout from '@/components/layouts/Layout';
import { Row } from 'react-bootstrap';
import DummyUser from '@/public/images/dummy_user.png'
import Quote from '@/public/images/quote.png'

export default function Courses() {
  const [phone, setPhone] = useState('+880');
  
  return (
    <>
      <Head>
        <title>Progobees | Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <div className='login_container mt-4'>
        <Row>
        <div className='col-6 user_review'>
          <div className="card coding_course_card">
            <div className="card-body">
            <Image className='img-fluid' src={Quote} />
              <p className="ms-3 card-text">
              The customisable courses at Codingal give my child a real advantage: academically, socially, and in technology. Highly recommended!
              </p>
              <Row>
                <div className='col-4 ms-4 pe-0'>
                <Image className='img-fluid' src={DummyUser} width={128} height={128} />
                </div>
                <div className='col-7 user_details ps-0'>
                  <p className='user_name'>Wakfu Udding
                    <br/>
                    <span style={{fontWeight: 400}}>Parent</span>
                  </p>
                </div>
              </Row>
            </div>
          </div>

        </div>
        <div className='col-6 login_form'>
          <h3>Let&apos;s Get Started</h3>
          <input type='tel' className='form-control' name='phone' placeholder='Your Phone Number' max={14} value={phone} onChange={(e)=>{
            setPhone(e.target.value);
          }} />
        </div>
        </Row>
      </div>
      </Layout>
    </>
  )
}
