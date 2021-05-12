import DilemmaDetail from './dilemma'

export default function DilemmaList({ dilemmas }) {
  return (
    <div id = "balls">
      {dilemmas.map((dilemma, i) => {
        console.log(dilemma);
        return (<DilemmaDetail dilemma={dilemma} />)
        
        
      })}
    </div>
  )
}