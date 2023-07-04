import { rest } from "msw";
import {
  microMock,
  microMockwithId,
  microsHorrorMock,
  microsMock,
  paginationMock,
  tokenMock,
} from "./mocks";
import {
  deletedModal,
  notCreatedModal,
  notDeletedModal,
} from "../modals/modals";

const apiURL = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.post(`${apiURL}/user/login`, (_request, response, context) => {
    return response(context.status(200), context.json({ token: tokenMock }));
  }),
  rest.get(`${apiURL}/micros`, (_request, response, context) => {
    return response(
      context.status(200),
      context.json({
        microstories: microsMock,
        totalMicrostories: microsMock.length,
      })
    );
  }),
  rest.delete(`${apiURL}/micros/:microId`, (_request, response, context) => {
    return response(
      context.status(200),
      context.json({ message: deletedModal.message })
    );
  }),

  rest.post(`${apiURL}/micros/create`, (_request, response, context) => {
    return response(context.status(201), context.json({ micro: microMock }));
  }),

  rest.get(`${apiURL}/micros/:microId`, (_request, response, context) => {
    return response(
      context.status(200),
      context.json({ microById: microMockwithId })
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

  rest.get(`${apiURL}/micros/:microId`, (_request, response, context) => {
    return response(
      context.status(404),
      context.json({ errror: notDeletedModal.message })
    );
  }),

  rest.delete(`${apiURL}/micros/:microId`, (_request, response, context) => {
    return response(
      context.status(404),
      context.json({
        error: notDeletedModal.message,
      })
    );
  }),

  rest.post(`${apiURL}/micros/create`, (_request, response, context) => {
    return response(
      context.status(404),
      context.json({ message: notCreatedModal.message })
    );
  }),
];

export const variantsHandlers = [
  rest.get(`${apiURL}/micros`, (request, response, context) => {
    const searchParams = request.url.searchParams;
    searchParams.set("skip", "0");
    searchParams.set("limit", "5");

    return response(
      context.status(200),
      context.json({
        microstories: paginationMock,
        totalMicros: paginationMock.length,
      })
    );
  }),
];

export const filterHandlers = [
  rest.get(`${apiURL}/micros`, (request, response, context) => {
    const searchParams = request.url.searchParams;
    searchParams.set("skip", "0");
    searchParams.set("limit", "5");
    searchParams.set("filter", "genre");
    searchParams.set("filterValue", "Horror");

    return response(
      context.status(200),
      context.json({
        microstories: microsHorrorMock,
        totalRoutes: microsHorrorMock.length,
      })
    );
  }),
];
