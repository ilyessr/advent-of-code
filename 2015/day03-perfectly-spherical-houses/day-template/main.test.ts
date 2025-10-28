import { countHouses, countHousesWithRoboSanta } from "./main";

describe("Santa's gift delivery", () => {
  it("> delivers presents to 2 houses", () => {
    expect(countHouses(">")).toBe(2);
  });

  it("^>v< delivers presents to 4 houses", () => {
    expect(countHouses("^>v<")).toBe(4);
  });

  it("^v^v^v^v^v delivers presents to 2 houses", () => {
    expect(countHouses("^v^v^v^v^v")).toBe(2);
  });

  describe("Robo-Santa Deliveries", () => {
    it("^v delivers to 3 houses", () => {
      expect(countHousesWithRoboSanta("^v")).toBe(3);
    });

    it("^>v< delivers to 3 houses", () => {
      expect(countHousesWithRoboSanta("^>v<")).toBe(3);
    });

    it("^v^v^v^v^v delivers to 11 houses", () => {
      expect(countHousesWithRoboSanta("^v^v^v^v^v")).toBe(11);
    });
  });
});
