import { rest } from "msw";
import { tokenMock } from "./mocks";

const apiURL = import.meta.env.VITE_API_URL;
export const handlers = [
  rest.post(`${apiURL}/user/login`, (_request, response, context) => {
    return response(context.status(200), context.json({ token: tokenMock }));
  }),
];
