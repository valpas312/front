describe("Login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("Deberia mostrar un mensaje de error con credenciales invalidas", () => {
    cy.fixture("users.json").then((user) => {
      cy.get("input[name=dni]").type(user.invalidUser.dni);
      cy.get("input[name=contraseña]").type(user.invalidUser.contraseña);
      cy.get("button[type=submit]").click();

    
      cy.contains("Error al iniciar sesión").should("be.visible");
    });
  });

  it("Deberia iniciar sesion con credenciales validas", () => {
    cy.fixture("users.json").then((user) => {
      cy.get("input[name=dni]").type(user.validUser.dni);
      cy.get("input[name=contraseña]").type(user.validUser.contraseña);
      cy.get("button[type=submit]").click();

      cy.url().should("include", "/");
      cy.contains("Bienvenido").should("be.visible");
    });
  });
});
