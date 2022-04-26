import './ZodiacCard.css'

export default function ZodiacCard({ name, dates }) {
  return (
    <div className="zodiac-card">
      <img alt={name} src={`/images/${name}`} />
      <span className="name">{name}</span>
      <span>{dates}</span>
    </div>
  )
}
