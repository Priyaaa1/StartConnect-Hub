import React from 'react'
import './Title.css'
import { useSelector } from 'react-redux';

const Title = ({subTitle, title}) => {
  const theme = useSelector((state) => state.theme.value) ? "dark" : "light";
  return (
    <div className={`title ${theme}`}>
        <p>{subTitle}</p>
        <h2>{title}</h2>
    </div>
  )
}

export default Title