import React from 'react'

type Props = {
  imageBackground: string
}

const BackgroundImageHeroSection = ({ imageBackground }: Props) => {
  return (
    <div
      className="absolute inset-0 bg-cover bg-center z-0"
      style={{
        backgroundImage: `url('${imageBackground}')`,
        backgroundPosition: "center 30%",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent"></div>
    </div>
  )
}

export default BackgroundImageHeroSection
