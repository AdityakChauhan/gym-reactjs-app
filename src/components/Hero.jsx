import React from 'react'

export default function Hero() {
    return (
        <>
            <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>
                <p className='priorHeading'>IT'S TIME TO GET</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Rippin<span className='text-red-500'>Lean</span></h1>
            </div>
            
                <p className='text-sm md:text-base font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <span className='text-red-500 font-medium'>Eum hic at deleniti!</span> Perferendis saepe mollitia
                animi reprehenderit <span className='text-red-500 font-medium'>quibusdam enim corrupti</span> Lorem, ipsum.
                blanditiis!</p>
                <button className='px-8 py-4 rounded-md border-3 border-solid border-red-500 bg-slate-950 redShadow duration-200'><p>Accept &amp; Begin</p></button>
            </div>
        </>
    )
}
