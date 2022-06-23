describe('testnx', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('test220609-nx-welcome').should('exist');
  });
});