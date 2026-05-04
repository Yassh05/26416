import { useEffect, useState } from "react";
import { fetchNotifications } from "../api";
import { getPriority } from "../Utils/priority";
import NotificationCard from "../components/NotificationCard";
import { Log } from "../logging_middleware/logger";

export default function Home() {
    const [notifications, setNotifications] = useState([]);
    const [top, setTop] = useState([]);
    const [read, setRead] = useState(new Set());

    const token = localStorage.getItem("access_token");

useEffect(() => {
    const load = async () => {
        try {
            const token = localStorage.getItem("access_token");

            const data = await fetchNotifications(token);

            console.log("DATA:", data); // 🔥 IMPORTANT

            setNotifications(data);

            // TOP notifications
            const sorted = [...data].sort(
                (a, b) => getPriority(b) - getPriority(a)
            );

            setTop(sorted.slice(0, 10));

        } catch (e) {
            console.error(e);
        }
    };

    load();
}, []);

    const markRead = (id) => {
        setRead(prev => new Set(prev).add(id));
        Log("debug", "component", "Notification clicked");
    };

    return (
        <div>
            <h2>Top Notifications</h2>
            {top.map(n => (
                <NotificationCard
                    key={n.ID}
                    data={n}
                    isRead={read.has(n.ID)}
                    onClick={() => markRead(n.ID)}
                />
            ))}

            <h2>All Notifications</h2>
            {notifications.map(n => (
                <NotificationCard
                    key={n.ID}
                    data={n}
                    isRead={read.has(n.ID)}
                    onClick={() => markRead(n.ID)}
                />
            ))}
        </div>
    );
}