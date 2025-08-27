import React from 'react'

function Cards({
    src,
    title,
    desc,
}) {
  return (
    <div className="shadow-md rounded-lg overflow-hidden w-150 h-50 !p-2 flex backdrop-blur-2xl bg-#ddd2fa/50 justify-end">
      <img src={src} alt={title} className=" object-cover !mb-5 h-full" />
      <div className="">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="!mt-5 text-gray-600">{desc}</p>
      </div>
    </div>
  )
}

export default Cards