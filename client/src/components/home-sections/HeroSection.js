import React from 'react'
import './HeroSection.css';
import '../../App.css'
export default function HeroSection() {
    return (
        
        <>
        <div className='home-container'>

            <div className='left-flex'>
                <h1 className='achieve-together'>ACHIEVE TOGETHER</h1>
                <p className='intro-para'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec ut maximus diam. Suspendisse sed massa accumsan diam
                    faucibus feugiat nec eu mauris. Aenean at leo non nibh tristique
                    congue nec et orci. Sed nunc sapien, sodales id risus quis, posuere
                    efficitur justo. Sed eget laoreet sapien.
                </p>
            </div>

            <div className='right-flex'>

            </div>

        </div>
        <div className='hero-container'>
                <video className='video-startup' src='/videos/startup.mp4' autoPlay loop muted />     
        </div>
        
        </>
    )
}