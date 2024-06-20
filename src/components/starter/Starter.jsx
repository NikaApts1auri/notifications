export default function Starter({ notifications, setNotifications }) {
  const markAllAsRead = () => {
    const updateNotifications = notifications.map((notification) => {
      return {
        ...notification,
        isRead: true,
      };
    });
    setNotifications(updateNotifications);
  };
  //Derived state
  const counter = notifications.filter(
    (notification) => !notification.isRead
  ).length;

  return (
    <section>
      <h2>Notifications {counter}</h2>
      <p onClick={markAllAsRead} style={{ cursor: "pointer" }}>
        Mark all as read
      </p>
    </section>
  );
}
