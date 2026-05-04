export default function NotificationCard({ data, onClick, isRead }) {
    return (
        <div
            onClick={onClick}
            style={{
                border: "1px solid #ccc",
                margin: "10px",
                padding: "10px",
                background: isRead ? "#eee" : "#fff",
                cursor: "pointer"
            }}
        >
            <h4>{data.Type}</h4>
            <p>{data.Message}</p>
            <small>{data.Timestamp}</small>
        </div>
    );
}