import React from 'react'
import Carousel from '../Carousel'
import { wines } from '../../../../utils/data/chat'
import { Avatar } from '../../../ui/avatar'
import WineCard from './WineCard'

const WineList = ({ message }) => {
  return (
    <div className="px-4 mb-2">
      <div className="relative flex gap-3 p-2">
        <Avatar className="size-8">
          <img
            className="w-full h-full"
            alt="Halleck Avatar"
            src="/image-308.png"
          />
        </Avatar>

        <div className="flex flex-col justify-start items-center gap-4">
          {message?.message && <div className="py-2 px-2.5 rounded-lg bg-msg border border-gray-300 font-sans text-primary text-sm tracking-[0] leading-[18px]">
            <span className="font-semibold">
              {message?.message}
            </span>
          </div>}
          <div className="flex items-center">
            <Carousel slides={wines} SlideComponent={WineCard}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WineList