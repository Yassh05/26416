import axios from "axios";

export const fetchNotifications = async (token) => {
    const res = await axios.get(
        "/evaluation-service/notifications",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return res.data.notifications;
};