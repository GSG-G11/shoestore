import React from 'react'
import FooterLeft from './FooterLeft/FooterLeft'
import './CombinedFooter.css'
import FooterRight from     './FooterRight/FooterRight'



function CombinedFooter() {
  return (
    <div className='CombinedFooter'>
          <FooterLeft />
            <FooterRight />
      </div>
  )
}

export default CombinedFooter
