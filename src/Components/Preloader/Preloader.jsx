// eslint-disable-next-line no-unused-vars
import React,{useEffect,useState} from "react";
import pre from '../../assets/pre.json';
import './Preloader.css'
import Lottie from 'lottie-react';
import App from '../../App';
export default function Preloader() {
        const [loading,setLoading]=useState(false);
        useEffect(()=>{
            setLoading(true);
            setTimeout(() =>{
                setLoading(false)
            },2000)
        },[])
    return (
        <div>
            {
                loading ?
                <div>
                <div className='pre'>
                    <div className="preloader"><Lottie animationData={pre}/></div>
                </div>
                </div>
                :
                //Rest Code
                    <App/>
            }

        </div>
    )
}
