export function Button(props) {
  return (
    <div className="flex justify-center items-center w-screen">
      <div className="flex bg-zinc-800 w-9/12 py-3 font-semibold text-white rounded-xl items-center justify-center gap-2 text-center">
        <img src={props.icon} className={props.icon} alt="" />
        <a href={props.link}>{props.content}</a>
      </div>
    </div>
  );
}
