import { microsMockList } from "../../mocks/mocks";
import { MicroStateStructure } from "../types";
import { deleteMicroActionReducer, microsReducer } from "./microsSlice";

describe("Given a deleteMicros reducer", () => {
  describe("When it has a list of micros as a current state and it receives a valid micro id", () => {
    test("Then it should return a new list without the micro linked to the id", () => {
      const currentMicroState: MicroStateStructure = {
        microstories: microsMockList,
      };

      microsMockList.shift();

      const expectedNewMicroState = {
        ...currentMicroState,
        microstories: microsMockList,
      };

      const newMicroState = microsReducer(
        currentMicroState,
        deleteMicroActionReducer({ microId: "elfin" })
      );

      expect(newMicroState).toStrictEqual(expectedNewMicroState);
    });
  });
});
