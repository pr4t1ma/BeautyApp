import "./App.css";
const items = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

function App() {
  return (
    <>
      <div className="header flex gap-20 items-center justify-center border-2">
        <div className="logo p-0 m-0 leading-0 ">beauty App</div>
        <ul className="flex gap-12 p-0 m-0 items-center justify-center">
          {items.map((item) => {
            return (
              <li>
                <a href="">{item.label}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
