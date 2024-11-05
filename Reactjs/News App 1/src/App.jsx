import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("Loading...");

  async function fetchData() {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=tesla&apiKey=ccc18bda333a4730a183dabe6f80872e"
    );
    const result = await response.json();
    let p = result.articles.map((a, index) => {
      let title = a.title ? a.title.substring(0, 60) : "Card title";
      title = a.title+'...';
      let description = a.description
        ? a.description.substring(0, 100
        )
        : "Card description";
        description = a.description+'...';
      return (
        <div key={index} className="flex flex-wrap">
          <div className="px-10 pt-10">
            <div className="max-w-sm rounded-[20px] overflow-hidden shadow-lg">
              <a target="blank" href={a.url}>
              <img 
                className="w-full h-[192px]"
                src={
                  a.urlToImage ||
                  "https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                }
                alt="News"
              />
              </a>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  <a href={a.url} target="blank" className="hover:underline">
                  {title}
                  </a>
                </div>
                <p className="text-gray-700 text-base">
                  {description}
                </p>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    setValue(p);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-wrap">{value}</div>
    </>
  );
}

export default App;
