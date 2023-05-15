describe('observe', () => {
    beforeEach(()=>{  
    cy.visit('https://goal-dev.mdx.ac.uk');
    cy.get('#id_username').type('JanaMousa');
    cy.get('#id_password').type('jana@1@0123');
    cy.get(':nth-child(4) > div > .form-control').select('staff');
    cy.get('.btn').click();
    cy.get('.fas').should('exist');
  
    //open
    cy.get(':nth-child(2) > .row > .col-sm-4 > .nav > .nav-item > .nav-link').click();
    cy.get('.mr-auto > :nth-child(2) > .nav-link').click();
    
    //Goal Filter
    cy.get(':nth-child(1) > .custom-control-label > h5').click();

    //Group filter all
    cy.get('[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1)').click();

    })

    //1-Observe-topic1-with-all-group
  it('1-Observe-topic1-with-all-group', function ()  {
    cy.get(':nth-child(1) > .custom-control-label > h5').click();//click All Goal
    cy.get(':nth-child(3) > .custom-control-label > h5').click();//click topic 1
    cy.get('[style="height: 10vh"] > :nth-child(1) > .custom-control-label').click(); // click not observe
    cy.get('.align-items-center > :nth-child(3) > .btn').click();//click Apply filter
    cy.get(':nth-child(5) > .btn').click();//click observe
  })
   

   
    //2-observe-topic1+2-with-all-group
    it('2-observe-topic1+2-with-all-group',function(){
    cy.get(':nth-child(7) > .custom-control-label > h5').click();//click topic 2
    cy.get('.align-items-center > :nth-child(3) > .btn').click();//click apply filter
    cy.get(':nth-child(5) > .btn').click();//click observe
  })

    //3-observe-topic1+2+3-with-all-group
    it('3-observe-topic1+2+3-with-all-group',function(){
    cy.get(':nth-child(10) > .custom-control-label > h5').click();//click topic 3
    cy.get('.align-items-center > :nth-child(3) > .btn').click();//click apply filter
    cy.get(':nth-child(5) > .btn').click();//click observe
  })

    //4-observe-topic1-without_group3
    it('4-observe-topic1-without_group3',function(){
    cy.get(':nth-child(7) > .custom-control-label > h5').click();//click topic 2
    cy.get(':nth-child(10) > .custom-control-label > h5').click();//click topic 3
    cy.get(':nth-child(5) > .custom-control > .custom-control-label').click();//click group 3
    cy.get(':nth-child(5) > .btn').click();//click observe
  })


    //5-observe-topic2-without-group3
    it('5-observe-topic2-without-group3',function(){
    cy.get(':nth-child(7) > .custom-control-label > h5').click();//click topic 2
    cy.get(':nth-child(3) > .custom-control-label > h5').click();//click topic 1
    cy.get(':nth-child(5) > .btn').click();//click observe
  })

    //6-observe-topic3-without-group3-and-qa
    it('6-observe-topic3-without-group3-and-qa',function(){
    cy.get(':nth-child(10) > .custom-control-label > h5').click();//click topic 3
    cy.get(':nth-child(7) > .custom-control-label > h5').click();//click topic 2
    cy.get('[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(6) > .custom-control > .custom-control-label').click();//click group qa
    cy.get(':nth-child(5) > .btn').click();//click observe
  })


    //7-observe-topic1+2-without-group3-and-qa
    it('7-observe-topic1+2-without-group3-and-qa',function(){
    cy.get(':nth-child(10) > .custom-control-label > h5').click();//click topic 3
    cy.get(':nth-child(7) > .custom-control-label > h5').click();//click topic 2
    cy.get(':nth-child(3) > .custom-control-label > h5').click();//click topic 1
    cy.get(':nth-child(5) > .btn').click();//click observe
  })

    //8-observe-topic1+3-without-group3-and-qa
    it('8-observe-topic1+3-without-group3-and-qa',function(){
    cy.get(':nth-child(7) > .custom-control-label > h5').click();//click topic 2
    cy.get(':nth-child(10) > .custom-control-label > h5').click();//click  topic 3
    cy.get(':nth-child(5) > .btn').click();//click observe
  })

    //9-observe-topic2+3-without-group3-and-qa
    it('9-observe-topic2+3-without-group3-and-qa',function(){
    cy.get(':nth-child(3) > .custom-control-label > h5').click();//click topic 1
    cy.get(':nth-child(7) > .custom-control-label > h5').click();//click topic 2
    cy.get(':nth-child(5) > .btn').click();//click observe 
  })

   //10-observe-topic3-without-group3
   it('10-observe-topic3-without-group3',function(){
   cy.get('[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(6) > .custom-control > .custom-control-label').click();//click group qa
   cy.get(':nth-child(7) > .custom-control-label > h5').click();//click topic 2
   cy.get(':nth-child(5) > .btn').click();//click observe
  })

   //11-observe-topic1+2+3-without-group2+3
   it('11-observe-topic1+2+3-without-group2+3',function(){
   cy.get(':nth-child(7) > .custom-control-label > h5').click();//click topic 2
   cy.get(':nth-child(3) > .custom-control-label > h5').click();//click topic 1
   cy.get('[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(4) > .custom-control > .custom-control-label').click();//click group 2
   cy.get(':nth-child(5) > .btn').click();//click observe
  })

   //12-observe-topic1+2+3-without-group2+3+qa
   it('12-observe-topic1+2+3-without-group2+3+qa',function(){
   cy.get('[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(6) > .custom-control > .custom-control-label').click();//click group qa
   cy.get(':nth-child(5) > .btn').click();//click observe
  })

   //13-observe-topic1-without-group2+3+qa
   it('13-observe-topic1-without-group2+3+qa',function(){
   cy.get(':nth-child(10) > .custom-control-label > h5').click();//click topic 3
   cy.get(':nth-child(7) > .custom-control-label > h5').click();//click topic 2
   cy.get(':nth-child(5) > .btn').click();//click observe
  })

   //14-observe-topic1+2-without-group2+3+qa
   it('14-observe-topic1+2-without-group2+3+qa',function(){
   cy.get(':nth-child(7) > .custom-control-label > h5').click();//click topic2
   cy.get(':nth-child(5) > .btn').click();//click observe
  })

   //15-observe-topic2+3-without-group2+3+qa
   it('15-observe-topic2+3-without-group2+3+qa',function(){
   cy.get(':nth-child(10) > .custom-control-label > h5').click();//click topic 3
   cy.get(':nth-child(5) > .btn').click();//click observe 
  })

  });




