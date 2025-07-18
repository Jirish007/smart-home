// src/components/Footer.jsx
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Smart Home Services. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
