import Chainable = Cypress.Chainable;

//get number1(): Chainable<JQuery<HTMLInputElement>>{
//return cy.get('#number1Field')
//},

export const prototypePage = {
  elements: {
    chooseBuild: () => cy.get("#selectBuild"),
    enterNumber1: () => cy.get("#number1Field"),
    enterNumber2: () => cy.get("#number2Field"),
    selectAddOperation: () => cy.get("#selectOperationDropdown").select(0),
    selectSubstractOperation: () =>
      cy.get("#selectOperationDropdown").select(1),
    selectMultiplyOperation: () => cy.get("#selectOperationDropdown").select(2),
    selectDivideOperation: () => cy.get("#selectOperationDropdown").select(3),
    selectConcatanateOperation: () =>
      cy.get("#selectOperationDropdown").select(4),

    clickCalculate: () => cy.get("#calculateButton"),
    answerField: () => cy.get("#numberAnswerField"),
    selectIntegerOnly: () => cy.get("#integerSelect"),
    clearButton: () => cy.get("#clearButton")
  },

  chooseBuild(buildNumber: number) {
    this.elements.chooseBuild().select(buildNumber);
  },

  add(number1: any, number2: any) {
    this.elements.enterNumber1().clear().type(number1),
      this.elements.enterNumber2().clear().type(number2),
      this.elements.selectAddOperation(),
      this.elements.clickCalculate().click(),
      cy.get("#numberAnswerField").should("contain.value", number1 + number2),
      this.elements.clearButton().click();
  },

  substract(number1: any, number2: any) {
    this.elements.enterNumber1().clear().type(number1),
      this.elements.enterNumber2().clear().type(number2),
      this.elements.selectSubstractOperation(),
      this.elements.clickCalculate().click(),
      cy.get("#numberAnswerField").should("contain.value", number1 - number2),
      this.elements.clearButton().click();
  },

  multiply(number1: any, number2: any) {
    this.elements.enterNumber1().clear().type(number1),
      this.elements.enterNumber2().clear().type(number2),
      this.elements.selectMultiplyOperation(),
      this.elements.clickCalculate().click(),
      cy.get("#numberAnswerField").should("contain.value", number1 * number2),
      this.elements.clearButton().click();
  },

  divide(number1: any, number2: any) {
    this.elements.enterNumber1().clear().type(number1),
      this.elements.enterNumber2().clear().type(number2),
      this.elements.selectDivideOperation(),
      this.elements.clickCalculate().click(),
      cy.get("#numberAnswerField").should("contain.value", number1 / number2),
      this.elements.clearButton().click();
  },

  concatanate(number1: any, number2: any) {
    this.elements.enterNumber1().should("exist").clear().type(number1),
      this.elements.enterNumber2().should("exist").clear().type(number2),
      this.elements.selectConcatanateOperation().should("exist"),
      this.elements.clickCalculate().should("exist").click(),
      cy.get("#numberAnswerField").should("contain.value", number1, number2),
      this.elements.clearButton().should("exist").click();
  },

  addEmptyNumberFields(number1: any, number2: any) {
    this.elements.enterNumber1().clear().type(number1),
      this.elements.enterNumber2().clear().type(number2),
      this.elements.selectAddOperation(),
      this.elements.clickCalculate().click(),
      cy.get("#numberAnswerField").should("contain", '0'),
      this.elements.clearButton().click();
  },

  divideEmptyNumberFields(number1: any, number2: any) {
    this.elements.enterNumber1().clear().type(number1),
      this.elements.enterNumber2().clear().type(number2),
      this.elements.selectDivideOperation(),
      this.elements.clickCalculate().click(),

      cy.get("#numberAnswerField").should("contain.text", '')
  },

  addCharNumberFields(number1: any, number2: any) {
    this.elements.enterNumber1().clear().type(number1),
      this.elements.enterNumber2().clear().type(number2),
      this.elements.selectAddOperation(),
      this.elements.clickCalculate().click(),      
      this.errorMessageNotNumber(),
      cy.get("#numberAnswerField").should("contain", ''),
      this.elements.clearButton().click()
  },

  substractCharNumberFields(number1: any, number2: any) {
    this.elements.enterNumber1().clear().type(number1),
      this.elements.enterNumber2().clear().type(number2),
      this.elements.selectSubstractOperation(),
      this.elements.clickCalculate().click(),
      this.errorMessageNotNumber(),
      cy.get("#numberAnswerField").should("contain", '')
      //this.elements.clearButton().click()
  },

  multiplyCharNumberFields(number1: any, number2: any) {
    this.elements.enterNumber1().clear().type(number1),
      this.elements.enterNumber2().clear().type(number2),
      this.elements.selectMultiplyOperation(),
      this.elements.clickCalculate().click(),
      this.errorMessageNotNumber(),
      cy.get("#numberAnswerField").should("contain", '')
      
  },

  divideCharNumberFields(number1: any, number2: any) {
    this.elements.enterNumber1().clear().type(number1),
      this.elements.enterNumber2().clear().type(number2),
      this.elements.selectDivideOperation(),
      this.elements.clickCalculate().click(),
      this.errorMessageNotNumber(),
      cy.get("#numberAnswerField").should("contain", '')
      //this.elements.clearButton().click();
  },

  selectIntegersOnly() {
    this.elements.selectIntegerOnly().click()
  },

  errorMessageDivide0(){
    cy.get('#errorMsgField').should("eq", "Divide by zero error!") //is visible
  },

  errorMessageNotNumber(){
    cy.get('#errorMsgField').contains("Number 1 is not a number").should("be.visible")
  }
}
