import { useState } from "react"
import { ArrowBigLeft, ArrowBigRight } from "lucide-react"
import React from "react"

type ImageSliderProps = {
    imageUrls: string[]
}

function ImageSlider({imageUrls}:ImageSliderProps){
    const [imageIndex, setImageIndex] = useState(0)

    return <div>
        <img src={imageUrls[imageIndex]} />
        <button><ArrowBigLeft/></button>
        <button><ArrowBigRight/></button>
    </div>
}

export default ImageSlider