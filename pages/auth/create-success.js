import React, { useState } from 'react'
import {Button, Form} from 'react-bootstrap'
import {FiMail} from 'react-icons/fi'
import * as Yup from 'yup'
import { Formik } from 'formik'
import Link from "next/link";
import Image from 'next/image';


function Createsuccess() {
  return (
    <section>
      <div className='d-flex flex-row'>
        <div className="col-md-7 auth-intro auth-form-wrapper display-none">
          <div>
            <h1>Zwallet</h1>
          </div>
          <div className="d-flex align-items-center flex-column">
            <div>
              <Image width={439} height={846} src='/images/png-phone.png' alt="pict"/>
            </div>
            <div>
              <h1>App that Covering Banking Needs.</h1>
              <p1>Zwallet is an application that focussing in banking needs for all users
                in the world. Always updated and always following world trends.
                5000+ users registered in Zwallet everyday with worldwide
                users coverage.</p1>
            </div>
          </div>
        </div>
        <div className="col-5 auth-form-wrapper ">
            <div className="d-flex gap-5 flex-column">
                <Image width={50} height={50} src='/images/success.png' alt="pict"/>
                <h3>Your PIN Was Successfully Created
                </h3>
                <p>Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!                 
                </p>
                <div className="d-grid">
                    <Link href='/login' class="btn btn-primary">Login Now</Link>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Createsuccess