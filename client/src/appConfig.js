let backendHost;

const hostname = window && window.location && window.location.hostname;

if (hostname === "localhost") {
  backendHost = "http://localhost:5500";
} else {
  backendHost = "https://boardapi.zueon.link";
}

export const API_BASE_URL = `${backendHost}`;
