import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import rocket from "../../../../public/rocket.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight,faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const GameCard = ({name,date,image,id,gameName}) => {
  const modifiedName= name.replace(/ /g, "_");

  return (
  <div className="game_card">
    <div className="game_card_sub">
      <div className="gc_sub">
        <div className="thumbnail">
<Link className='game_img' href={`/games/${id}-${modifiedName}`} ><Image src={`/games/${gameName}.png`} alt='game_image ' fill/>  </Link>
<div className="time">
  <span><FontAwesomeIcon icon={faCalendarDays} /></span>
  <span>{date}</span>
</div>
        </div>
        <div className="card_body">
          <div className="blog_title">
<h4>{name}</h4>
          </div>
          <div className="blogbtn btn">
License Game <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default GameCard
