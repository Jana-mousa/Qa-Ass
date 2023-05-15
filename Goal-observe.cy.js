describe('observe', () => {
  it('1-goals-page-All-Goals,Group-filter-all,Level-filters-all', function () {
    cy.visit('https://goal-dev.mdx.ac.uk');
    cy.get('#id_username').type('JanaMousa');
    cy.get('#id_password').type('jana@1@0123');
    cy.get(':nth-child(4) > div > .form-control').select('staff');
    cy.get('.btn').click();
    cy.get('.fas').should('exist');
    //open
    cy.get(':nth-child(2) > .row > .col-sm-4 > .nav > .nav-item > .nav-link').click();
    //Goal page
    cy.get('.mr-auto > :nth-child(2) > .nav-link').click();
    
    //Goal Filter
    cy.get(':nth-child(1) > .custom-control-label > h5').click();
    
    //Group filter all
    cy.get(
      '[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1)'
    ).click();
    //cy.get('.align-items-center > :nth-child(3) > .btn').click();

    //1-Observe-topic1-with-all-group 
    cy.get(':nth-child(1) > .custom-control-label > h5').click();
    cy.get(':nth-child(3) > .custom-control-label > h5').click();
    cy.get('[style="height: 10vh"] > :nth-child(1) > .custom-control-label').click();
    cy.get('.align-items-center > :nth-child(3) > .btn').click();
    cy.get(':nth-child(5) > .btn').click();
   
    //2-observe-topic1+2-with-all-group
    cy.get(':nth-child(7) > .custom-control-label > h5').click();
    cy.get('.align-items-center > :nth-child(3) > .btn').click();
    cy.get(':nth-child(5) > .btn').click();


    //3-observe-topic1+2+3-with-all-group
    cy.get(':nth-child(10) > .custom-control-label > h5').click();
    cy.get('.align-items-center > :nth-child(3) > .btn').click();
    cy.get(':nth-child(5) > .btn').click();

    //4-observe-topic1-without_group3
    cy.get(':nth-child(7) > .custom-control-label > h5').click();
    cy.get(':nth-child(10) > .custom-control-label > h5').click();
    cy.get(':nth-child(5) > .custom-control > .custom-control-label').click();
    cy.get(':nth-child(5) > .btn').click();


    //5-observe-topic2-without-group3
    cy.get(':nth-child(7) > .custom-control-label > h5').click();
    cy.get(':nth-child(3) > .custom-control-label > h5').click();
    cy.get(':nth-child(5) > .btn').click();

    //6-observe-topic3-without-group3-and-qa
    cy.get(':nth-child(10) > .custom-control-label > h5').click();
    cy.get(':nth-child(7) > .custom-control-label > h5').click();
    cy.get('[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(6) > .custom-control > .custom-control-label').click();
    cy.get(':nth-child(5) > .btn').click();



    //7-observe-topic1+2-without-group3-and-qa
    cy.get(':nth-child(10) > .custom-control-label > h5').click();
    cy.get(':nth-child(7) > .custom-control-label > h5').click();
    cy.get(':nth-child(3) > .custom-control-label > h5').click();
    cy.get(':nth-child(5) > .btn').click();


    //8-observe-topic1+3-without-group3-and-qa
    cy.get(':nth-child(7) > .custom-control-label > h5').click();
    cy.get(':nth-child(10) > .custom-control-label > h5').click();
    cy.get(':nth-child(5) > .btn').click();


    //9-observe-topic2+3-without-group3-and-qa
    cy.get(':nth-child(3) > .custom-control-label > h5').click();
    cy.get(':nth-child(7) > .custom-control-label > h5').click();
    cy.get(':nth-child(5) > .btn').click();


   //10-observe-topic3-without-group3
   cy.get('[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(6) > .custom-control > .custom-control-label').click();
   cy.get(':nth-child(7) > .custom-control-label > h5').click();
   cy.get(':nth-child(5) > .btn').click();

   //11-observe-topic1+2+3-without-group2+3
   cy.get(':nth-child(7) > .custom-control-label > h5').click();
   cy.get(':nth-child(3) > .custom-control-label > h5').click();
   cy.get('[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(4) > .custom-control > .custom-control-label').click();
   cy.get(':nth-child(5) > .btn').click();


   //12-observe-topic1+2+3-without-group2+3+qa
   cy.get('[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(6) > .custom-control > .custom-control-label').click();
   cy.get(':nth-child(5) > .btn').click();
 

   //13-observe-topic1-without-group2+3+qa
   cy.get(':nth-child(10) > .custom-control-label > h5').click();
   cy.get(':nth-child(7) > .custom-control-label > h5').click();
   cy.get(':nth-child(5) > .btn').click();

   //14-observe-topic1+2-without-group2+3+qa
   cy.get(':nth-child(7) > .custom-control-label > h5').click();
   cy.get(':nth-child(5) > .btn').click();

   //15-observe-topic2+3-without-group2+3+qa
   cy.get(':nth-child(10) > .custom-control-label > h5').click();
   cy.get(':nth-child(5) > .btn').click();



    
    
  });});




