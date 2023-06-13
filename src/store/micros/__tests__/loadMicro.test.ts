import { microMock, microsMockList } from "../../../mocks/mocks";
import { MicroStateStructure } from "../../types";
import { loadMicroActionCreator, microsReducer } from "../microsSlice";

describe("Given a loadMicro reducer", () => {
  describe("When it has an empty initial state and receives a micro", () => {
    test("Then it should return that micro", () => {
      const expectedMicro = microMock;

      const initialMicroState: MicroStateStructure = {
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

      const expectedNewState: MicroStateStructure = {
        microstories: microsMockList,
        totalMicrostories: microsMockList.length,
        currentMicro: expectedMicro,
      };

      const newMicroState = microsReducer(
        initialMicroState,
        loadMicroActionCreator(microMock)
      );

      expect(newMicroState).toStrictEqual(expectedNewState);
    });
  });
});
