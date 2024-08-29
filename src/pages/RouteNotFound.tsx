
type Props = {}

export default function RouteNotFound({}: Props) {
  return (
    <div
      className="w-screen min-h-[calc(100vh-64px)] flex bg-black items-center justify-center"
      style={{
        backgroundImage: "url(https://http.cat/404)",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
    </div>
  )
}