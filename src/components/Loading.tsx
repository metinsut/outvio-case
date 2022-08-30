import React from 'react';

interface Props {
  isLoading: boolean;
}

export default function Loading({ isLoading }: Props) {
  return (
    <div
      className={
        'fixed inset-0 h-screen w-screen transition-opacity duration-300 ease-in grid items-center justify-items-center bg-slate-900/50 ' +
        (isLoading ? 'opacity-100 z-10' : 'opacity-0 -z-10')
      }
    >
      <div className="lds-dual-ring"></div>
    </div>
  );
}
