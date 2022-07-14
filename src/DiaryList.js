import Diaryitem from "./Diaryitem";

const DiaryList = ({ onRemove, onEdit, diaryList }) => {
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <div>{diaryList.length}개의 일기가 있습니다</div>
      <div>
        {diaryList.map((it) => [
          <Diaryitem key={it.id} {...it} onDelete={onRemove} onEdit={onEdit} />,
        ])}
      </div>
    </div>
  );
};

export default DiaryList;
DiaryList.defaultProps = {
  diaryList: [],
};
