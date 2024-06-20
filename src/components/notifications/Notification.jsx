import "./notification.css";
export default function Notification({
  notification,
  notifications,
  setNotifications,
}) {
  // შევქმენით ფუნქცია რომლის მიზანია დამაპოს ნოთიფიკაციები და შეცვალოს ის ელემენტი რომლის აიდიც იდენტურია ანუ რომელზეც ხდება კლიკი , ხოლო ამ ფუნქციას ვიძახებ ქვევით ონკლიკ სთეითზე

  const read = (id) => {
    const updateNotifications = notifications.map((notification) => {
      if (notification.id === id) {
        return {
          ...notification,
          // ვცვლით დატას
          isRead: true,
        };
      }
      // ეს რეთარნი საჭიროა მასივის დანარჩენი ელემენტებისთვის რათა ანდეფაინდი არ გამოაკონსოლოს
      return notification;
    });
    setNotifications(updateNotifications);
  };
  return (
    <div
      className="notification"
      style={!notification.isRead ? { backgroundColor: "#f7fafd" } : {}}
      // აროუ ფუნქცია იმიტო დაგვჭირდა რომ არგუმენტს ვატანდით და სხვანაირად არ გამოვიდოდა მხოლოდ ფუნქციის გამოძახებით
      onClick={() => read(notification.id)}
    >
      <img src={notification.profilePic} />
      <span>{notification.username}</span>
      <span>{notification.action}</span>
      {notification.post ? <span> {notification.post} </span> : null}
      {notification.groupName ? <span> {notification.groupName}</span> : null}
      {notification.userPicture ? <img src={notification.userPicture} /> : null}
      {notification.text ? <span> {notification.text}</span> : null}

      {!notification.isRead ? <div className="circle"> </div> : null}
    </div>
  );
}
