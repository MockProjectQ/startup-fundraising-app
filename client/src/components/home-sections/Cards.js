import React from 'react';
import {useState} from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Button } from '../button/Button';

function Cards() {
    
  return (
    <div className='cards'>
      <h1>Recommended for You!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
          <ul className='cards__items'>
            <CardItem
              src='/'
              label='₹ 10,00,000'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut maximus diam.'
              path='/'
            />
            <CardItem
              src='/'
              label='₹ 10,00,000'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut maximus diam.'
              path='/'
            />
            <CardItem
              src='/'
              label='₹ 10,00,000'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut maximus diam.'
              path='/'
            />
          </ul>
        </div>
      </div>
      <center><Button  buttonStyle='btn--viewall' onClick='/'>View All</Button></center>
    </div>
  );
}

export default Cards;