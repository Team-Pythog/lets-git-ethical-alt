export default function DilemmaDetail({ dilemma }) {
  return (
    <body className="p-4 bg-red-400">
      <section key={dilemma.id} className="p-4 mx-4 bg-green-400 rounded-lg">
        <div className="grid grid-flow-col grid-cols-2 gap-4">
          <div className="grid col-start-1">
            <h2 className="text-lg">{dilemma.title}</h2>
            <img className="my-2 border border-white rounded-lg" src={dilemma.image}></img>    
          </div>
          <div className="grid col-end-3 p-2">
            <p className="mx-4 my-4 bg-blue-300 border border-white">{dilemma.text}
            </p>
            <div className="">
              <button className="p-2 mx-4 my-2 text-left bg-red-300 border border-white">{dilemma.response_0}</button>
              <button className="p-2 mx-4 my-2 text-left bg-red-300 border border-white ">{dilemma.response_1}</button>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}