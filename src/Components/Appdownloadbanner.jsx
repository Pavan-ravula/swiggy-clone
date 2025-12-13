import React,{forwardRef} from 'react';
import Home from './Home';


const Appdownloadbanner = forwardRef((props,ref) => {
    return (
        <div className='appbanner' ref={ref}>
            <img src='/App_download_banner.avif'/>
        </div>
    )
});

export default Appdownloadbanner;
