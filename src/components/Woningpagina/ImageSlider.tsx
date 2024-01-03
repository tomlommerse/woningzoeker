import { useState } from "react"
import { ArrowBigLeft, ArrowBigRight } from "lucide-react"
import React from "react"
import "../../styles/slider.css" 

type ImageSliderProps = {
    imageUrls: string[]
}

// slider functie
function ImageSlider({imageUrls}:ImageSliderProps){
    const [imageIndex, setImageIndex] = useState(0)

    // functie om naar de volgende foto te gaan
    function showNextImage(){
        setImageIndex(index => {
            if (index === imageUrls.length - 1) return 0
            return index + 1
        })

    }

    // functie om terug te gaan naar de vorige foto
    function showPrevImage(){
        setImageIndex(index => {
            if (index === 0) return imageUrls.length - 1
            return index - 1
        })
        
    }
    return (
    <div style={{width: "100%", height: "300px", position: "relative"}}>
        <div style={{width: "100%", height: "300px", display: "flex", overflow: "hidden"}}>
            {/* Het pakken van een foto en de lengte van een foto naar links of naar rechts gaan wanneer er op een knop wordt geklikt */}
            {imageUrls.map(url => (
            <img key={url} src={url} 
            className="img-silder-img" style={{translate: `${-100 * imageIndex}%`}} />
            ))}
        </div>
        {/* Slider knop links */}
        <button onClick={showPrevImage} className="img-slider-btn" style={{left: 0}}>
            <ArrowBigLeft/>
        </button>
        {/* Slider knop Rechts */}
        <button onClick={showNextImage} className="img-slider-btn" style={{right: 0}}>
            <ArrowBigRight/>
        </button>
    </div>
    )
}

export default ImageSlider