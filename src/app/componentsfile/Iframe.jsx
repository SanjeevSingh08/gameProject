"use client"
import React,{useState} from 'react'

const Iframe = ({name}) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleIframeLoad = () => {
      setIsLoading(false);
    };
  return (
    <div className='relative'>
        {isLoading && (
          <div className="loading-spinner">
          
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
          </div>
        )}
        <div className="gamepreview_wrapper">
          <iframe
            className={`gamepreview ${isLoading ? "hidden" : ""}`}
            title="Game"
            width="100%"
            src={`https://gameshosted.vercel.app/${name}`}
            allowFullScreen
            onLoad={handleIframeLoad}
          ></iframe>
          </div>
        </div>
  )
}

export default Iframe
