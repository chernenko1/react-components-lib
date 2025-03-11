import React from 'react'
import "./Button.scss";

export interface ICLButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode,
  disabled: boolean,
  size: 'little' | 'normal' | 'big'
  mode: 'fill' | 'no-fill' | 'none',
  shape: 'base' | 'rounded'
}

export default function Button({children, disabled, size, mode, shape, ...attributes}:ICLButtonProps) {
  

  return (
      <button className={`${'btn'} ${size} ${mode} ${shape}`} disabled={disabled} {...attributes}>
        {children}
      </button>
  )
}
