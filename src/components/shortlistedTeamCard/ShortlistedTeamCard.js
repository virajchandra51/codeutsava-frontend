import React from 'react'
import { useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion'

import './ShortlistedTeamCard.css'
import cross from '../../assets/images/cross.png'

const ShortlistedTeamCard = ({name,leader,member1,member2,member3,member4,member5}) => {

  const [modal, setModal] = useState(false);
  const [team, setTeam] = useState([]);

  const getTeam = (name,leader,member1,member2,member3,member4,member5) => {
    let temp = [name,leader,member1,member2,member3,member4,member5]
    setTeam(item => [1, ...temp])
    return setModal(true)
  }

  document.body.style.overflow = !modal ? 'visible' : 'hidden';

  return (
    <div>
      <div className="codeutsava__section8-card">
          <div className='codeutsava__section8-card-name' onClick={() => getTeam(name,leader,member1,member2,member3,member4,member5)}>{name}</div>
      </div>

      {/* modal */}

      <AnimatePresence>
        {
          modal && 
          <motion.div 
            initial={{ scaleX:0, scaleY:0.01 }}
            animate={{ scaleX: [0, 1, 1], scaleY: [0.005, 0.005, 1],}}
            transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1],}}
            exit={{scaleX: [1, 1, 0], scaleY: [1, 0.005, 0.005] }}
            className="codeutsava__section8-problemModal-body">
              <img className="problemModal-close" src={cross} onClick={() => setModal(false)}/>
              <h1>{name}</h1>
              <p style={{fontWeight:"600"}}>{leader}</p>
              <p>{member1}</p>
              <p>{member2}</p>
              <p>{member3}</p>
              <p>{member4}</p>
              <p>{member5}</p>
          </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}

export default ShortlistedTeamCard