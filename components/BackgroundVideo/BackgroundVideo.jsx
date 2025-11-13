import React from 'react';

function BackgroundVideo({ videoSrc, overlayColor, children, className }) {
    return (
        <div
            className={`position-relative overflow-hidden w-100 ${className}`}
            style={{ height: '100vh' }} // Ensure the container takes up the full viewport height
        >
            <video
                className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                src={process.env.NEXT_PUBLIC_CLOUDINARY_VIDEO_BASE_URL + videoSrc}
                autoPlay
                loop
                muted
                style={{ objectFit: 'cover', zIndex: -1 }} // Ensure the video is behind the overlay
            />
            {overlayColor && (
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        backgroundColor: overlayColor,
                        mixBlendMode: 'multiply',
                        zIndex: 0 // Ensure the overlay is above the video
                    }}
                />
            )}
            <div className="position-relative z-index-1">
                {children} {/* Content will appear on top of the video */}
            </div>
        </div>
    );
}

export default BackgroundVideo;


































// "use client";

// import React from "react";

// const BackgroundVideo = ({ videoSrc, overlayColor, children, className }) => {
//   return (
//     <div
//       className={`relative overflow-hidden w-full ${className}`}
//       style={{ height: "100vh" }} // Full viewport height
//     >
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src={process.env.NEXT_PUBLIC_CLOUDINARY_VIDEO_BASE_URL + videoSrc}
//         autoPlay
//         loop
//         muted
//         style={{ objectFit: "cover", zIndex: -1 }} // Video behind overlay
//       />
//       {overlayColor && (
//         <div
//           className="absolute top-0 left-0 w-full h-full"
//           style={{
//             backgroundColor: overlayColor,
//             mixBlendMode: "multiply",
//             zIndex: 0, // Overlay above video
//           }}
//         />
//       )}
//       <div className="relative z-10">{children}</div> {/* Content on top */}
//     </div>
//   );
// };

// export default BackgroundVideo;