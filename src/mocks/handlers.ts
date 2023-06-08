import { rest } from "msw";
import { microsMock, tokenMock } from "./mocks";
import { deletedModal, notDeletedModal } from "../modals/modals";

const apiURL = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.post(`${apiURL}/user/login`, (_request, response, context) => {
    return response(context.status(200), context.json({ token: tokenMock }));
  }),
  rest.get(`${apiURL}/micros`, (_request, response, context) => {
    return response(
      context.status(200),
      context.json({ microstories: microsMock })
    );
  }),
  rest.delete(`${apiURL}/micros/:microId`, (_request, response, context) => {
    return response(
      context.status(200),
      context.json({ message: deletedModal.message })
    );
  }),
];

export const errorHandlers = [
  rest.post(`${apiURL}/user/login`, (_request, response, context) => {
    return response(context.status(401));
  }),
  rest.get(`${apiURL}/micros`, (_request, response, context) => {
    const invalidAuthorization = "Bearer unset";

    context.set(`Authorization`, invalidAuthorization);
    return response(context.status(401));
  }),

  rest.delete(`${apiURL}/micros/:microId`, (_request, response, context) => {
    return response(
      context.status(404),
      context.json({
        error: notDeletedModal.message,
      })
    );
  }),
];
