// src/SplashPage.jsx

import React from 'react';
import './SplashPage.css';

export const SplashPage = () => {
    const handleEnterClick = () => {
        window.location.href = '/'; // Change '/homepage' to your actual homepage route
    };

    return (
        <div className="splash-container">
            <div className="splash-content">
                <h1>Get ready to experience</h1>
                <h2>Summit Soundstage</h2>
                <button className="enter-button" onClick={handleEnterClick}>Enter</button>
            </div>
        </div>
    );
};

























// // src/SplashPage.jsx

// import React from 'react';
// import './SplashPage.css';

// export const SplashPage = () => {
//     return (
//         <div className="intro">
//             <div className="intro">
//                 <h1 className="logo-header">
//                 <span className="logo">Lo</span><span className="logo">go.</span>
//                 </h1>
//             </div>

//             <header>
//                 <h4>Logo.</h4>
//             </header>

//             <script src="app.jsx"></script>
//         </div>
//     );
// };



