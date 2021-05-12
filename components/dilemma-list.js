import DilemmaDetail from './dilemma-detail'

export default function DilemmaList({ dilemmas }) {
  return (
    <div>
      {dilemmas.map((dilemma, i) => {
        console.log(dilemma);
        return (<DilemmaDetail dilemma={dilemma} />)


      })}
    </div>
  )
}