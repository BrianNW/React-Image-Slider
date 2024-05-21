import React, {usestate} from 'react';
import { BsChevronCompactLeft } from 'react-icons/bs';
import { BsChevronCompactRight} from 'react-icons/bs';

function App() {

  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
    },

    {
      url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    },
  ];

  return (
    // parent div container
    <div className='max-width-[1400px] h-[780px] w-full m-auto py-16 px-4 relative'>
      {/* banner container */}
      <div style={{backgroundImage: `url(${slides[0].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'> </div>
    
    {/* left arrow */}
    <div> 
      <BsChevronCompactLeft />

    </div>
    {/* right arrow */}
    <div> 
      <BsChevronCompactLeft />

    </div>
    </div>
  );
}

export default App;
