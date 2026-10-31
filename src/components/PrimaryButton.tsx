import type{ButtonHTMLAttributes,ReactNode}from'react';
export function PrimaryButton({children,className='',...p}:ButtonHTMLAttributes<HTMLButtonElement>&{children:ReactNode}){return <button className={`btn ${className}`} {...p}>{children}</button>}
