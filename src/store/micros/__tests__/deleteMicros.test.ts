import { microsMockList } from "../../../mocks/mocks";
import { MicroStateStructure } from "../../types";
import { deleteMicroActionCreator, microsReducer } from "../microsSlice";

describe("Given a deleteMicros reducer", () => {
  describe("When it has a list of micros as a current state and it receives a valid micro id", () => {
    test("Then it should return a new list without the micro linked to the id", () => {
      const currentMicroState: MicroStateStructure = {
        microstories: microsMockList,
        totalMicrostories: microsMockList.length,
        currentMicro: {
          id: "",
          title: "",
          dateOfCreation: "",
          genre: "",
          isPublic: true,
          image: "",
          story: "",
          author: "",
        },
      };

      microsMockList.shift();

      const expectedNewMicroState = {
        ...currentMicroState,
        microstories: microsMockList,
      };

      const newMicroState = microsReducer(
        currentMicroState,
        deleteMicroActionCreator({ microId: "elfin" })
      );

      expect(newMicroState).toStrictEqual(expectedNewMicroState);
    });
  });
});
