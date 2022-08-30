import React from 'react';

export default function Header() {
  const html = document.querySelector('html');
  const handleToggleDarkMode = () => {
    const hasDarkClass = html!.classList.contains('dark');
    console.log('hasDarkClass', hasDarkClass);
    hasDarkClass ? html!.classList.remove('dark') : html!.classList.add('dark');
  };

  return (
    <header className="absolute top-0 left-0 right-0 grid justify-end">
      <div
        className="gg-dark-mode cursor-pointer m-1 md:m-4"
        title="Toggle Dark Mode"
        onClick={handleToggleDarkMode}
      ></div>
    </header>
  );
}
