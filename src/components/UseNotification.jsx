// 브라우저 알람 기능

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotification = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotification;
};

export default function App() {
  const triggerNotification = useNotification("Can I steal your kimchi?", {
    body: "I love kimchi",
  });
  return (
    <div>
      <button onClick={triggerNotification}>hi</button>
    </div>
  );
}
