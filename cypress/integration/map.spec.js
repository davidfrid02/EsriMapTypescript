describe("Form test", () => {
    it("Get map div", () => {
      cy.visit("/index.html");
      cy.get("#viewDiv");
      
    });

    it("Check Sketch - Polygon button", () => {
      cy.visit("/index.html");
      cy.get(".esri-icon-edit").click();
      cy.get(".esri-icon-polygon").click()
      cy.get("canvas").click(300, 300);
      cy.get("canvas").click(400, 450);
      cy.get("canvas").click(340, 400);
      cy.get("canvas").click(340, 400);
    });

    it("Fail!", () => {
      cy.visit("/index2.html");
      cy.get("#viewDiv"); 
    });


  });