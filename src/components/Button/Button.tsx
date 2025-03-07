import React from 'react'
import "./Button.css";

export interface ICLButtonProps {
  label:string
}

export default function Button({label}:ICLButtonProps) {
  return (
    <button>{label}</button>
  )
}
