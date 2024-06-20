import { useState } from "react";
import "./App.css";
import data from "./data.json";
import Notification from "./components/notifications/Notification";
import Starter from "./components/starter/Starter";

export default function App() {
  const [notifications, setNotifications] = useState(data);

  return (
    <>
      <Starter
        notifications={notifications}
        setNotifications={setNotifications}
      />
      <main>
        {notifications.map((notification) => {
          return (
            <Notification
              key={notification.id}
              notification={notification}
              notifications={notifications}
              setNotifications={setNotifications}
            />
          );
        })}
        ;
      </main>
    </>
  );
}
