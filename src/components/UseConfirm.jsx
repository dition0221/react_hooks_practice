// 사용자가 무언가를 하기 전에 확인하는 것

const useConfirm = (message = "", onConfirm, onCancel) => {
  // 필수
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  // 옵션
  if (onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

export default function App() {
  const deleteWorld = () => console.log("Deleting the world...");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure ?", deleteWorld, abort);
  return (
    <div>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
}
