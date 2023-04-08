import React from 'react'
import { useEffect, useState } from "react";
import { ArrowWhite } from "../../Assets";


const ScrollToTop = () => {
     // show text on hover
	const [showBTT, setShowBTT] = useState(false);
	const handleMouseOver = () => {
		setShowBTT(true);
	}
	const handleMouseOut = () => {
		setShowBTT(false);
	}

	// add scroll to top feature
	const [displayArrow, setDisplayArrow] = useState(false);

	const scrollUp = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	const listenToScroll = () => {
		if (
			document.body.scrollTop > 50 ||
			document.documentElement.scrollTop > 50
		) {
			setDisplayArrow(true);
		} else {
			setDisplayArrow(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", listenToScroll);
		return () => window.removeEventListener("scroll", listenToScroll);
	}, []);


  return (
    <div>
        {displayArrow && (
            <div className="flex gap-4 items-center p-4 fixed bottom-[40px] right-[15px] lg:right-[35px] z-10 bg-veryDimBlack shadow-scrollBtn rounded-full cursor-pointer" onClick={scrollUp} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <div className="text-white">
                    <img src={ArrowWhite} alt="arrow" className="w-[30px]"/>
                </div>
                <div className={`text-white ${showBTT ? "hidden md:block" : "hidden"}`}>
                    Back to Top
                </div>
            </div>
        )}
    </div>
  )
}
 
export default ScrollToTop;