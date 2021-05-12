export default function DilemmaDetail({ dilemma }) {
  return (
    <section key={dilemma.id} className="w-full my-4">
      <h2>{dilemma.title}</h2>
      <div className="mx-4">
        <img className="my-2" src={dilemma.image}></img>
      </div>
      <p className="mx-4 my-4 border border-black">{dilemma.text}
      </p>
      <div className="flex flex-col">
        <button className="mx-4 my-2 text-left border border-black">{dilemma.response_0}</button>
        <button className="mx-4 my-2 border border-black ">{dilemma.response_1}</button>
      </div>
    </section>
  );
}