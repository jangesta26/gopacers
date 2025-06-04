import React from 'react'
import { Button } from '@/components/ui/button';
import Heart from '@/svg/Heart';
import Share from '@/svg/Share';
import { PhotoGalleryProps } from '@/types/photo-gallery';
import Image from 'next/image';
import { MdPhotoLibrary } from "react-icons/md";

const buttonTabsItem = [
    {
        name:'All'
    },
    {
        name:'Marathon'
    },
    {
        name:'Trail'
    },
    {
        name:'5K/10K'
    },
    {
        name:'Ultra'
    },
]

const PhotoGallerySection = ({
    title,
    description,
    galleryImages
}:{
    title:string
    description:string
    galleryImages:PhotoGalleryProps[]
}) => {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                    {description}
                </p>
                </div>

                <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
                    {buttonTabsItem.map((Item,index) => 
                    <Button
                        key={index}
                        variant="outline"
                        className="whitespace-nowrap dark:text-white"
                    >
                        {Item.name}
                    </Button>
                    )}

                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">
                {galleryImages.map((image, index) => {
                const spanRows = [1, 4, 6].includes(index) ? "row-span-2" : "";

                return (
                    <div
                    key={image.id}
                    className={`relative group overflow-hidden rounded-lg ${spanRows}`}
                    >
                    <Image
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover object-top transition-transform group-hover:scale-105"
                        width={300}
                        height={300}
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                        <h3 className="text-white font-bold">{image.title}</h3>
                        <p className="text-gray-300 text-sm">{image.category}</p>

                        <div className="flex justify-between items-center mt-4">
                        <div className="flex space-x-2">
                            <Button
                            variant="ghost"
                            size="icon"
                            className="text-white h-8 w-8 !rounded-button whitespace-nowrap"
                            >
                            <Heart />
                            </Button>
                            <Button
                            variant="ghost"
                            size="icon"
                            className="text-white h-8 w-8 !rounded-button whitespace-nowrap"
                            >
                            <Share />
                            </Button>
                        </div>
                        <Button
                            size="sm"
                            variant="outline"
                            className=" cursor-pointer border-white hover:bg-white/20 whitespace-nowrap dark:hover:bg-primary/20"
                        >
                            View Full
                        </Button>
                        </div>
                    </div>
                    </div>
                );
                })}
            </div>

            <div className="mt-8 text-center">
                <Button
                variant="outline"
                className="!rounded-button whitespace-nowrap"
                >
                View All Photos
                <MdPhotoLibrary />
                </Button>
            </div>
        </div>
    </section>
  )
}

export default PhotoGallerySection
