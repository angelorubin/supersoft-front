import axios from "axios";

export const http = axios.create({
	baseURL: "http://localhost:3001",
	timeout: 2000,
	headers: { "X-Custom-Header": "foobar" },
});
