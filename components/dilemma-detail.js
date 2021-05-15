export default function DilemmaDetail({ dilemma }) {
  return (
    <body className="my-6 bg-blue-300 ">
      <section key={dilemma.id} className="p-4 text-white bg-blue-900 rounded-lg ">
        <div className="grid grid-flow-col grid-cols-2 gap-4">
          <div className="grid col-start-1 mx-2">
            <h2 className="p-2 text-lg text-white rounded-lg">{dilemma.title}</h2>
            <img className="w-11/12 my-2 border border-white rounded-lg" src={dilemma.image}></img>    
          </div>
          <div className="grid col-end-3 p-2">
            <p className="p-3 mx-4 my-4 bg-blue-400 border border-white rounded-lg">{dilemma.text}
            </p>
            <div className="">
              <button className="p-2 mx-4 my-2 text-left bg-red-400 border border-white rounded-lg">{dilemma.response_0}</button>
              <button className="p-2 mx-4 my-2 text-left bg-red-400 border border-white rounded-lg ">{dilemma.response_1}</button>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}