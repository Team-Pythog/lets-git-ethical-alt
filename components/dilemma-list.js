import Dilemma from './dilemma'

export default function DilemmaList({ dilemmas }) {
  return (
    <div>
      <ul>
        {dilemmas.map((dilemma, i) => {
          <Dilemma data={dilemma} />
        })}
      </ul>
    </div>
  )
}