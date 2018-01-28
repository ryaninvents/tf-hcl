import React from 'react'

export default function Footer() {
  return (
    <div className="flex-min footer">
      <ul className="nav container">
        <li className="nav-item">
          <span className="nav-link align-baseline">
            &copy; {new Date().getFullYear()} Ryan Kennedy
          </span>
        </li>
        <li className="nav-item">
          <a
            className="nav-link align-baseline"
            href="https://github.com/r24y/tf-hcl"
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  )
}
