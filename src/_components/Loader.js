import React from 'react'

function Loader() {
    return (
        <div class="preloader-wrap">
            <div class="preloader" style={{backgroundImage:"url(/assets/images/preloader.gif)"}}>
            </div>
            <div class="overlay"></div>
        </div>
    )
}

export default Loader