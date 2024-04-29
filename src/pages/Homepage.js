import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/Search";
import Picture from "../components/Picture";

function Homepage() {
  let [input, setInput] = useState("");
  let [data, setData] = useState(null);
  let [page, setPage] = useState(1);
  // 避免在沒按下 search 按鈕前，會因為 input 已輸入但沒按按鈕的情況下造成
  // More 內容造成新增時出錯
  let [currentSearch, setCurrentSearch] = useState("");
  const auth = "";
  const initalURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  let searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;

  const searchHandler = async (url) => {
    let result = await axios.get(url, {
      headers: {
        Authorization: auth,
      },
    });
    // 將 API 取得的資料存入 data
    setData(result.data.photos);
    setCurrentSearch(input);
  };

  const morePicture = async () => {
    let newURL;
    // useState 為非同步，不會立即更新頁面
    // 所以我們需要使用舊的 page 來加 1
    // 但還是需要使用 setPage 來更新函數外的 page 狀態
    setPage(page + 1);
    if (currentSearch === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${
        page + 1
      }`;
    }

    let result = await axios.get(newURL, {
      headers: {
        Authorization: auth,
      },
    });

    setData([...data, ...result.data.photos]);
  };

  // 頁面加載被渲染後就會執行一次，等同於網頁載入後會出現圖片
  useEffect(() => {
    searchHandler(initalURL);
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        searchHandler={() => {
          searchHandler(searchURL);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {
          // 檢查 data 是否為空，如果為空就不會執行 map 函數
          data &&
            data.map((data, index) => {
              return <Picture key={index} data={data} />;
            })
        }
      </div>
      <div className="morePicture">
        <button onClick={morePicture}>載入更多</button>
      </div>
    </div>
  );
}

export default Homepage;
