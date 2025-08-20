import React, { useEffect, useState } from 'react';
import classes from './GoTopButton.module.css'; 
import { FaChevronUp } from "react-icons/fa";
const GoTopButton = () => {
    const [showGoTop, setShowGoTop] = useState(false);


    const handleVisibleButton = () => {
        setShowGoTop(window.pageYOffset > 200); 
    };

    const handleScrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    useEffect(() => {
        window.addEventListener('scroll', handleVisibleButton);

        
        return () => {
            window.removeEventListener('scroll', handleVisibleButton);
        };
    }, []);

    return (
        <div className={showGoTop ? '' : classes.goTopHidden} onClick={handleScrollUp}>
            <button type="button" className={classes.goTop}>
              <FaChevronUp className={classes.goTopIcon}/>
                {/* <span className={classes.goTopIcon}>52</span> */}
            </button>
        </div>
    );
};

export default GoTopButton;
