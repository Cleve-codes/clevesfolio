import React from 'react'

const SectionsSeparator = () => {
  return (
    <div aria-hidden="true" className="flex items-center justify-center h-full" >
        <svg className="svgdiv" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet">
          <path className="pathdiv" d="M250,0 Q250,250 250,500" />
        </svg>
      </div>
  )
}

export default SectionsSeparator