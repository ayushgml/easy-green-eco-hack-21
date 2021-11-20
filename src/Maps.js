import React from 'react'
import './Map.css'
import GoogleMapReact from 'google-map-react';

function Maps() {
    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 5
    };

    return (
        /*<div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDAqX0lMWxLWLjf_ZzA-ht5X9TBIO7JPj8" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
            </GoogleMapReact>
        </div>*/
        <div class="mapouter"><div class="gmap_canvas"><iframe width="1537" height="830" id="gmap_canvas" src="https://maps.google.com/maps?q=recycle%20centres%20in%20india&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><br/></div></div>
        // <div style={{ height: '100%', width: '100%' }}>
        //     <div class="mapouter">
        //         <div class="gmap_canvas">
        //             <iframe width="1080" height="1080" id="gmap_canvas" src="https://maps.google.com/maps?q=recycle%20centres%20in%20india&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
        //                 </iframe>
        //                 <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/">
        //                     divi discount
        //                     </a>
        //                 <br>
        //                 <style>.mapouter{position=relative,text-align=right,height:1080px;width:1080px;}</style>
        //                 <a href="https://www.embedgooglemap.net">google map html code</a>
        //                 </div>
        //         </div>
        // </div>
        // <div class="mapouter"><div class="gmap_canvas"><iframe width="3000" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=recycle%20centres%20in%20india&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><br/></div></div>
    )
}

export default Maps
