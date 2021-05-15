import DilemmaDetail from './dilemma-detail'

export default function DilemmaList({ dilemmas }) {
  return (
    <body className="h-screen m-auto my-4 bg-red-500 rounded-md ">
      <div>
        {dilemmas.map((dilemma, i) => {
          console.log(dilemma);
          return (<DilemmaDetail dilemma={dilemma} />)


        })}
      </div>
    </body>
  )
}