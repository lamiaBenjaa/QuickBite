import React from 'react'
import './AppDownload.css'
import apple from './../../images/apple.jpeg'
import android from './../../images/android.jpeg'

export default function AppDownload() {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download <br /> QuickBite App</p>
      <div className="app-download-platforms">
        <img src={apple} alt="" />
        <img src={android} alt="" />
      </div>
    </div>
  )
}
