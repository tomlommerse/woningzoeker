import { useState } from "react"
import { ArrowBigLeft, ArrowBigRight } from "lucide-react"
import React from "react"
import "../../styles/slider.css" 

type ImageSliderProps = {
    imageUrls: string[]
}

function ImageSlider({imageUrls}:ImageSliderProps){
    const [imageIndex, setImageIndex] = useState(0)

    function showNextImage(){
        setImageIndex(index => {
            if (index === imageUrls.length - 1) return 0
            return index + 1
        })

    }

    function showPrevImage(){
        setImageIndex(index => {
            if (index === 0) return imageUrls.length - 1
            return index - 1
        })
        
    }
    return <div style={{width: "100%", height: "300px", position: "relative"}}>
        <img src={imageUrls[imageIndex]} className="img-silder-img" />
        <button onClick={showPrevImage} className="img-slider-btn" style={{left: 0}}>
            <ArrowBigLeft/>
        </button>
        <button onClick={showNextImage} className="img-slider-btn" style={{right: 0}}>
            <ArrowBigRight/>
        </button>
    </div>
}

export default ImageSlider