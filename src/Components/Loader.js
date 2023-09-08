import React from 'react'

function Loader() {
  return (
    <div className="loader">
        <svg class="loader1" fill="#FFF" height="80" viewBox="0 0 55 80" width="55" xmlns="http://www.w3.org/2000/svg">
      <g transform="matrix(1 0 0 -1 0 80)">
        <rect height="20" rx="3" width="10"></rect>
        <rect height="80" rx="3" width="10" x="15"></rect>
        <rect height="50" rx="3" width="10" x="30"></rect>
        <rect height="30" rx="3" width="10" x="45"></rect>
      </g>
    </svg>
        </div>
  )
}

export default Loader
