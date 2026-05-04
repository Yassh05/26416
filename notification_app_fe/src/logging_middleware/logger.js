import axios from "axios";

const BASE_URL = "http://20.207.122.201/evaluation-service/logs";

export const Log = async (level, pkg, message) => {
    try {
        const token = localStorage.getItem("");

        await axios.post(
            BASE_URL,
            {
                stack: "frontend",
                level: "info",
                package: "component",
                message: "App loaded"
            },
            {
                headers: {
                    Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ5YXNoLjI2NDE2QGdnbmluZGlhLmRyb25hY2hhcnlhLmluZm8iLCJleHAiOjE3Nzc4NzUxOTMsImlhdCI6MTc3Nzg3NDI5MywiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjJlN2M2N2Y0LTYxMTktNDI3Yy04MGEzLThkNDhmNjRlZDhhNCIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6Inlhc2ggc2hhcm1hIiwic3ViIjoiN2Y1YWE1NmQtOWNlNy00MzAxLWJlYWMtNzM5NGVkZDdkNTJlIn0sImVtYWlsIjoieWFzaC4yNjQxNkBnZ25pbmRpYS5kcm9uYWNoYXJ5YS5pbmZvIiwibmFtZSI6Inlhc2ggc2hhcm1hIiwicm9sbE5vIjoiMjY0MTYiLCJhY2Nlc3NDb2RlIjoidWtzZFdUIiwiY2xpZW50SUQiOiI3ZjVhYTU2ZC05Y2U3LTQzMDEtYmVhYy03Mzk0ZWRkN2Q1MmUiLCJjbGllbnRTZWNyZXQiOiJRVlFIakRhR25nc3FVVVBzIn0.NAvAcNLpf3fPI1zGIzelfKM5iKLfobjXXvVyE2R2qWU"}`
                }
            }
        );
    } catch (err) {
        console.error("Logging failed", err);
    }
};