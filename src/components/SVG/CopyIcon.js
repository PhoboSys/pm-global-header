import React from 'react'

const CopyIcon = () => {
  return (
    <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <g>
      <g>
        <rect x="445.217" y="100.174" width="33.391" height="33.391"/>
      </g>
    </g>
    <g>
      <g>
        <path d="M478.609,133.565v33.391h-66.783v-66.783h33.391V66.783H333.913V0H33.391H0v445.217h178.087V512H512V133.565H478.609z
          M178.087,411.826H33.391V33.391h267.13v33.391h-89.043h-33.391V411.826z M478.609,478.609h-267.13V100.174h89.043h33.391h44.522
          v100.174h100.174V478.609z" />
      </g>
    </g>
    </svg>
  )
}

CopyIcon.propTypes = {}

export default React.memo(CopyIcon)