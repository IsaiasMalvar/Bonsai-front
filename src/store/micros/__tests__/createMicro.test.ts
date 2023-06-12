import { microMock, microsMockList } from "../../../mocks/mocks";
import { MicroStateStructure } from "../../types";
import { createMicroActionCreator, microsReducer } from "../microsSlice";

describe("Given a createMicro reducer", () => {
  describe("When there is a list of micros in its current state and it receives one", () => {
    test("Then it should add that micro to the list", () => {
      const newMicro = microMock;

      const currentMicrosState: MicroStateStructure = {
        microstories: microsMockList,
        totalMicrostories: microsMockList.length,
      };

      const newMicroState = microsReducer(
        currentMicrosState,
        createMicroActionCreator(newMicro)
      );

      expect(newMicroState.microstories.length).toBe(
        currentMicrosState.microstories.length + 1
      );
    });
  });
});
