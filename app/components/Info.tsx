import React from 'react'

const Info = () => {
  return (
    <div className='w-full h-full flex font-light'>
      <article className='w-full flex flex-row gap-[15vw]'>
        <h3 className='text-3xl font-thin text-gray-800'>
            2025 Theme
        </h3>
        <div className='tracking-wide'>
            <p className='indent-[15rem] text-4xl text-gray-900 tracking-wide'>For Nuit Blanche 2025, Translating the City interprets, transforms and decodes the urban experience through art. Inspired by the multilingual nature of cities, including Toronto, where over 200 languages are spoken, this theme considers the intersections of culture, language, identity and place. Translation is not simply the conversion of one language to another, but the connection and understanding it creates.
            </p>

            <div className='mt-[7rem] flex flex-row gap-[7rem] text-3xl'>
                <p className=''>Since its inception in 2006, Nuit Blanche Toronto has transformed the city into an immersive, all-night art experience. Artists from around the world reimagine public spaces, turning streets, parks, and buildings into canvases of contemporary expression.</p>

                <p className='mt-[10rem]'>The event celebrates diversity, accessibility, and the vibrant pulse of Toronto's neighborhoods. From large-scale installations to intimate performances, Nuit Blanche brings communities together through shared moments of wonder and reflection.</p>
            </div>
        </div>
      </article>
    </div>
  )
}

export default Info
