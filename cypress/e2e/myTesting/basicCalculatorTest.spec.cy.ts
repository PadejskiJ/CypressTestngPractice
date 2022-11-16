import { prototypePage } from "./PrototypePage";

beforeEach(() => {
  cy.visit("https://testsheepnz.github.io/BasicCalculator.html#main-body");
  prototypePage.chooseBuild(0);
});

describe("basic calculator test - happy flow", () => {
  it("verify add operation", () => {
    prototypePage.add(3, 2), prototypePage.selectIntegersOnly();
  });

  it("verify substract operation", () => {
    prototypePage.substract(3, 2);
  });

  it("verify multiply operation", () => {
    prototypePage.multiply(3, 2), prototypePage.selectIntegersOnly();
  });

  it("verify divide operation", () => {
    prototypePage.divide(3, 2);
  });

  it("verify concatanate operation", () => {
    prototypePage.concatanate(3, 2);
  });
});

describe("basic calculator test with two negative numbers", () => {
  it("verify add operation", () => {
    prototypePage.add(-3, -2), prototypePage.selectIntegersOnly();
  });

  it("verify substract operation", () => {
    prototypePage.substract(-3, -2);
  });

  it("verify multiply operation", () => {
    prototypePage.multiply(-3, -2), prototypePage.selectIntegersOnly();
  });

  it("verify divide operation", () => {
    prototypePage.divide(-3, -2);
  });

  it("verify concatanate operation", () => {
    prototypePage.concatanate(-3, -2);
  });
});

describe("basic calculator test with two decimal numbers", () => {
  it("verify add operation", () => {
    prototypePage.add(2.2, 2.1);
  });

  it("verify substract operation", () => {
    prototypePage.substract(2.2, 2.1);
  });

  it("verify multiply operation", () => {
    prototypePage.multiply(2.2, 2.1);
  });
  it("verify divide operation", () => {
    prototypePage.divide(2.2, 2.1);
  });

  it("verify concatanate operation", () => {
    prototypePage.concatanate(2.2, 2.1);
  });
});

describe("basic calculator test with empty number fields", () => {
  it("verify add operation", () => {
    prototypePage.addEmptyNumberFields(" ", " ");
  });

  it("verify substract operation", () => {
    prototypePage.substract(" ", " ");
  });

  it("verify multiply operation", () => {
    prototypePage.multiply(" ", " ");
  });
  it("verify divide operation", () => {
    prototypePage.divideEmptyNumberFields(" ", " ");
  });

  it("verify concatanate operation", () => {
    prototypePage.concatanate(" ", " ");
  });
});

describe("basic calculator test with a negative and positive number", () => {
  it("verify add operation", () => {
    prototypePage.add(-3, 2), prototypePage.selectIntegersOnly();
  });

  it("verify substract operation", () => {
    prototypePage.substract(-3, 2);
  });

  it("verify multiply operation", () => {
    prototypePage.multiply(-3, 2), prototypePage.selectIntegersOnly();
  });

  it("verify divide operation", () => {
    prototypePage.divide(-3, 2);
  });

  it("verify concatanate operation", () => {
    prototypePage.concatanate(-3, 2);
  });
});

describe("basic calculator test with char instead of number", () => {
  it("verify add operation", () => {
    prototypePage.addCharNumberFields("r", "r")
   
  });

  it("verify substract operation", () => {
    prototypePage.substractCharNumberFields("r", "r")
  });

  it("verify multiply operation", () => {
    prototypePage.multiplyCharNumberFields("r", "r")
  });

  it("verify divide operation", () => {
    prototypePage.divideCharNumberFields("r", "r")
  });

  it("verify concatanate operation", () => {
    prototypePage.concatanate("r", "r")
    
  });
});

describe("basic calculator test with two max lenght numbers", () => {
  it("verify add operation", () => {
    prototypePage.add(2222222222, 2222222222),
      prototypePage.selectIntegersOnly();
  });

  it("verify substract operation", () => {
    prototypePage.substract(2222222222, 2222222222);
  });

  it("verify multiply operation", () => {
    prototypePage.multiply(2222222222, 2222222222),
      prototypePage.selectIntegersOnly();
  });

  it("verify divide operation", () => {
    prototypePage.divide(2222222222, 2222222222);
  });

  it("verify concatanate operation", () => {
    prototypePage.concatanate(2222222222, 2222222222);
  });
});