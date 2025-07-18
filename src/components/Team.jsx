// src/components/Team.jsx
import React from 'react'
import team1 from '../assets/alex.webp'
import team2 from '../assets/elmer.webp'

const team = [
  { name: "Liam Carter", role: "Founder & CEO", img: team1 },
  { name: "Dev Patel", role: "Lead Engineer", img: team2 }
]

export default function Team() {
  return (
    <section id="team" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Meet Our Team</h2>
        <div className="row justify-content-center">
          {team.map((member, idx) => (
            <div className="col-md-4 text-center mb-4" key={idx}>
              <img src={member.img} className="rounded-circle mb-3" alt={member.name} width="150" height="150" loading="lazy" />
              <h5>{member.name}</h5>
              <p className="text-muted">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
