import { useState, useRef } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

// const dummyList = [
//   {
//     id: 1,
//     author: "강예훈",
//     content: "일기 1",
//     emotion: 5,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: "이민혁",
//     content: "일기 2",
//     emotion: 3,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: "양승필",
//     content: "일기 3",
//     emotion: 1,
//     created_date: new Date().getTime(),
//   },
// ];

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(1);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onRemove = (targetid) => {
    alert(`${targetid}번째 일기가 삭제되었습니다`);
    const newDiaryList = data.filter((it) => it.id !== targetid);
    setData(newDiaryList);
    dataId.current += 1;
  };

  const onEdit = (targetid, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetid ? { ...it, content: newContent } : it
      )
    );
  };
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onDelete={onRemove} diaryList={data} onEdit={onEdit} />
    </div>
  );
}

export default App;
