import { useRef, useState } from "react";

const Diaryitem = ({
  onRemove,
  onEdit,
  id,
  author,
  content,
  emotion,
  created_date,
}) => {
  const [localContent, setLocalContent] = useState(content);
  const [edit, setEdit] = useState();
  const localContentInput = useRef();

  const toggleedit = () => {
    setEdit(!edit);
  };

  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }
    if (window.confirm("수정을 완료하시겠습니까?")) {
      onEdit(id, localContent);
      toggleedit();
    }
  };

  const handleQuitEdit = () => {
    setEdit(false);
    setLocalContent(content);
  };

  return (
    <div className="Diaryitem">
      <div className="info">
        |{" "}
        <span>
          작성자 : {author} 점수 : {emotion} |
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">
        {edit ? (
          <textarea
            ref={localContentInput}
            value={localContent}
            onChange={(e) => {
              setLocalContent(e.target.value);
            }}
          />
        ) : (
          <>{content}</>
        )}
      </div>
      {edit ? (
        <>
          <button onClick={handleQuitEdit}>취소</button>
          <button onClick={handleEdit}>완료</button>
        </>
      ) : (
        <>
          <button onClick={toggleedit}>수정</button>
          <button onClick={handleRemove}>삭제</button>
        </>
      )}
    </div>
  );
};

export default Diaryitem;
