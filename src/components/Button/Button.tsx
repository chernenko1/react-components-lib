import React from 'react'
import "./Button.scss";

export interface ICLButtonProps {
  children: React.ReactNode,
  disabled: boolean,
  size: 'little' | 'normal',
  mode: 'fill' | 'no-fill',
  icon: React.ReactNode
}

export default function Button({children, disabled, size = 'normal', mode = 'fill', icon}:ICLButtonProps) {
  return (
      <button className={`${'btn'} ${size} ${mode}`} disabled={disabled}>
        {icon}
        {children}
      </button>
  )
}
