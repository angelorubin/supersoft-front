import reducer, { getVaccines } from "./vaccineSlice";

describe("vaccine reducer", () => {
	it("should return the initial state", () => {
		expect(reducer(undefined, {})).toEqual({
			data: [],
			status: "idle",
		});
	});

	it("should", () => {
		expect();
	});

	/**

  it('should handle increment', () => {
    const actual = counterReducer(initialState, increment());
    expect(actual.value).toEqual(4);
  });

  it('should handle decrement', () => {
    const actual = counterReducer(initialState, decrement());
    expect(actual.value).toEqual(2);
  });

  it('should handle incrementByAmount', () => {
    const actual = counterReducer(initialState, incrementByAmount(2));
    expect(actual.value).toEqual(5);
  });
  */
});
