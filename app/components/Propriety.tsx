'use client'

import { BiBed } from "react-icons/bi";
import { AiOutlineCar } from "react-icons/ai";
import { MdOutlineShower } from "react-icons/md";
import { Property } from "../models/property.model";
import Link from 'next/link'

type Props = {
  propriety: Property;
}

const Propriety = ({ propriety }: Props) => {

  const cardImage = `bg-center bg-no-repeat bg-cover w-full h-[260px] rounded-tr-[14px] rounded-tl-[14px] relative`

  const filteredTreeDifferentials = () => {
    const newDifferentials = []

    for (let i = 0; i < 3; i++) {
      newDifferentials.push(propriety.differentials[i])
    }
    return newDifferentials
  }

  return (
    <div className="w-full flex flex-col rounded-[14px] shadow-2xl">
      <div
        className={cardImage}
        style={{ backgroundImage: `url('${propriety.cardImage}')` }}>
        <div className="shadow-lg bg-white py-1 px-2 leading-3 text-slate-900 flex items-center gap-3 rounded-md" style={{ position: "absolute", bottom: "25px", right: "50%", transform: "translate(50%, 50%)" }}>
          <div className="flex items-center gap-1">
            <BiBed />
            <span className="text-[14px]">{propriety.countRooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <AiOutlineCar />
            <span className="text-[14px]">{propriety.garages}</span>
          </div>
          <div className="flex items-center gap-1">
            <MdOutlineShower />
            <span className="text-[14px]">{propriety.countBathrooms}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6">
        <div className="flex flex-col font-display items-center">
          <h1 className="font-bold leading-7 text-[16px]">{propriety.road}</h1>
          <h2 className="font-medium leading-5">{propriety.city} - {propriety.stateAbbreviation}</h2>
          <small className="font-bold leading-5 text-lg text-[14px]">{propriety.neighborhood}</small>
        </div>

        <div className="w-full flex justify-center pl-2">
          <ul className="list-disc flex flex-col gap-2">
            {filteredTreeDifferentials().map((differential) => (
              <li className="text-[#5d615f]" key={differential.id}>
                <div className="text-black font-md">
                  {differential.title}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex w-full justify-center items-center mt-4">
          <Link className="w-full" href={`/property/${propriety.id}`}>
            <button className="shadow-md rounded-md transition text-slate-900 duration-150 hover:opacity-90 bg-primary py-2 w-full font-bold text-[18px]">Ver mais</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Propriety