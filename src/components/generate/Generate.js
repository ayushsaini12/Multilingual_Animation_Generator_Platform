// import React, { useState } from 'react';
import { UisStar } from '@iconscout/react-unicons-solid'
import "./generate.css"

export function Generate() {
    return(
        <div className='outer'>
            <UisStar size="20" color="#bd73e8"/>
            <p className='headingGenerate'>Generate Story Video</p>
            <p className='lastGenerate'>Write Your Story in English or Hindi or Punjabi</p>

            <textarea rows={10} cols={80} required placeholder='Write Your Story Here' ></textarea>


        </div>
    )
    
}