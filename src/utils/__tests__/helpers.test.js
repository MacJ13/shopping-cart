import { describe, test } from "vitest";
import { paginate } from "../helpers";
import { expect } from "chai";

describe("paginate helper function", () => {
  let arr;

  test("returns array", () => {
    arr = paginate(1, 1);
    const length = arr.length;
    expect(Array.isArray(arr)).toBeTruthy();
    expect(arr[0]).toBe(1);
    expect(length).toBe(1);
  });

  test("returns array with current page equals 2 and last page is 5", () => {
    arr = paginate(2, 5);
    const length = arr.length;
    expect(Array.isArray(arr)).toBeTruthy();
    expect(length).toBe(5);
    expect(arr[0]).toBe(1);
    expect(arr[length - 1]).toBe(5);
  });

  test("returns array with current page equals 2 and last page is 7", () => {
    arr = paginate(2, 7);

    const length = arr.length;
    const secondElement = arr[1];
    const secondLastElement = arr[length - 2];
    expect(arr.includes("...")).toBeTruthy();
    expect(length).toBe(7);
    expect(secondElement).not.toBe("...");
    expect(secondElement).toBe(2);
    expect(secondLastElement).toBe("...");
    expect(arr.includes(6)).toBeFalsy();
    expect(arr.includes(5)).toBeTruthy();
    expect(arr.includes(2)).toBeTruthy();
  });

  test("returns array with current page equals 5 and last page is 9", () => {
    arr = paginate(5, 9);

    expect(arr.includes("...")).toBeFalsy();
    expect(arr.includes(6)).toBeTruthy();
    expect(arr.includes(5)).toBeTruthy();
    expect(arr.includes(2)).toBeTruthy();
    expect(arr.includes(8)).toBeTruthy();
    expect(arr.length).toBe(9);
  });

  test("returns array with current page equals 1 and last page is 4", () => {
    arr = paginate(1, 4);

    expect(arr.includes("...")).toBeFalsy();
    expect(arr.includes(1)).toBeTruthy();
    expect(arr.includes(2)).toBeTruthy();
    expect(arr.includes(3)).toBeTruthy();
    expect(arr.includes(4)).toBeTruthy();
    expect(arr.length).toBe(4);
  });

  test("return array with current page equals 9 and last page is 10", () => {
    arr = paginate(9, 10);
    const length = arr.length;
    const secondElement = arr[1];
    const secondLastElement = arr[length - 2];
    expect(arr.includes("...")).toBeTruthy();
    expect(secondElement).toBe("...");
    expect(secondLastElement).not.toBe("...");
    expect(secondLastElement).toBe(9);
    expect(arr.includes(6)).toBeTruthy();
    expect(arr.includes(5)).toBeFalsy();
    expect(arr.includes(2)).toBeFalsy();
    // console.log(s);
  });

  test("return array with current page 8 and last page is 15", () => {
    arr = paginate(8, 15);
    const length = arr.length;
    const secondElement = arr[1];
    const secondLastElement = arr[length - 2];

    expect(arr[0]).toBe(1);
    expect(arr[length - 1]).toBe(15);
    expect(arr.includes("...")).toBeTruthy();
    expect(secondElement).toBe("...");
    expect(secondLastElement).toBe("...");
    expect(length).toBe(11);
    expect(arr.includes(5)).toBeTruthy();
    expect(arr.includes(2)).toBeFalsy();
    expect(arr.includes(11)).toBeTruthy();
    expect(arr.includes(12)).toBeFalsy();
  });
});
