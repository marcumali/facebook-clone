import React from 'react'

const ImageSlider: React.FC<Props> = ({ className }) => {

  const imageSlider = [
    {
      id: 1,
      src: "/images/contacts-slide-1.jpg",
      url: "https://koinonia.social"
    },
    {
      id: 2,
      src: "/images/contacts-slide-2.jpg",
      url: "http://enspirely.com/"
    },
    {
      id: 3,
      src: "/images/contacts-slide-3.jpg",
      url: "https://godveo.com"
    },
    {
      id: 4,
      src: "/images/contacts-slide-4.jpg",
      url: "http://holla.club"
    },
    {
      id: 5,
      src: "/images/contacts-slide-5.jpg",
      url: "http://womanity.social/"
    },
  ]

	return (
		<div className={ "d-none d-xl-block" + className }>
      <div className="w-250px h-100 position-relative">
        <div className="bg-white p-3 position-fixed w-100 h-100 top-0">
          <div className="h-54px"></div>
            Image Slider
        </div>
      </div>
    </div>
	)
}

interface Props{
  className?: string;
}

export default ImageSlider
