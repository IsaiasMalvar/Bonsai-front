import { rest } from "msw";
import { tokenMock } from "./mocks";

export const handlers = [
  rest.post("/login", (_request, response, context) => {
    return response(context.status(200), context.json({ token: tokenMock }));
  }),
];
