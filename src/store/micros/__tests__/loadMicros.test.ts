import { microsMock } from "../../../mocks/mocks";
import { MicroStateStructure, MicroStructure } from "../../types";
import { loadMicrosActionCreator, microsReducer } from "../microsSlice";

describe("Given a loadMicros reducer", () => {
  describe("When it receives a current empty Micro state and a list of micros as payload ", () => {
    test("Then it should return that new list of micros", () => {
      const currentMicros: MicroStructure[] = [];

      const emptyMicroState: MicroStateStructure = {
        microstories: currentMicros,
      };

      const loadMicrosAction = loadMicrosActionCreator(microsMock);

      const expectedNewMicroState: MicroStateStructure = {
        ...emptyMicroState,
        microstories: microsMock,
      };

      const newMicrosState: MicroStateStructure = microsReducer(
        emptyMicroState,
        loadMicrosAction
      );

      expect(expectedNewMicroState).toStrictEqual(newMicrosState);
    });
  });
});
