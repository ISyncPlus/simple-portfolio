import React from "react";
type props = {
    children: React.ReactNode,
    className?: string
}


export default function Project({ children, className }: props) {
    const base: string = ' backdrop-blur-sm rounded-lg bg-[#393E4680] p-6'
  return (
    <div className={`${base} ${className}`}>
        { children }
    </div>
  );
}