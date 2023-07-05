import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedAnim = () => {
    const typingRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                '^2000 Hello World',
                '^3000 Bye Bye'
            ],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 3000,
            loop: true,
            showCursor: true
        };

        const typingInstance = new Typed(typingRef.current, options);

        return () => {
            typingInstance.destroy();
        };
    }, []);

  return (
    <div className='text-[120px] text-white'>
        <span ref={typingRef}/>
    </div>
  )
}

export default TypedAnim;