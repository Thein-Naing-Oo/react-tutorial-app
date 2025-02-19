import React, { useState } from 'react';
import './Buddhism.css'

const Buddhism = () => {

    return (
        <div className='flag'>
            <div className='first-sector'></div>
            <div className='second-sector'></div>
            <div className='third-sector'></div>
            <div className='fourth-sector'></div>
            <div className='fifth-sector'></div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: 100, height: 80, background: '#0018A8' }}></div>
                <div style={{ width: 100, height: 80, background: '#FEDF00' }}></div>
                <div style={{ width: 100, height: 80, background: '#ED1B24' }}></div>
                <div style={{ width: 100, height: 80, background: '#FFFFFF' }}></div>
                <div style={{ width: 100, height: 80, background: '#FF9800' }}></div>
            </div>
        </div>
    );
};

const styles = {}

export default Buddhism;