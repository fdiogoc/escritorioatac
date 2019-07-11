import React from 'react'
import './Footer.css'

export default () => (
  <div>

    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} Todos direitos reservados. By Diogo.
        </span>
        <span>Template <a href="https://github.com/thriveweb/yellowcake"> Yellowcake </a></span>
      </div>
    </footer>
  </div>
)
