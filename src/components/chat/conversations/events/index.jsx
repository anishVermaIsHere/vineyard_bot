import { Avatar } from "../../../ui/avatar"
import Carousel from "../Carousel"
import EventCard from "./EventCard"

const Events = ({ message }) => {

  return (
    <div className="flex flex-wrap px-4 mb-2">
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
          <div className="">
            <Carousel slides={message.suggestions} SlideComponent={EventCard}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events