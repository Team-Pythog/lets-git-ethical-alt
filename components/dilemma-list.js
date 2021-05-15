import DilemmaDetail from './dilemma-detail'

export default function DilemmaList({ dilemmas }) {
  return (
    <body className="w-5/6 m-auto my-4 bg-blue-300 rounded-md ">
      <div>
        {dilemmas.map((dilemma, i) => {
          console.log(dilemma);
          return (<DilemmaDetail dilemma={dilemma} />)


        })}
      </div>
    </body>
  )
}