const company = {
    name: 'GP',
    ceo : {id:1,name:'ajmol',food:'rice'},
    employee : {
        work : 'web development',
        framework:'react',
        tech: {
            first:'html',
            second:'css',
            third:'javascript'
        }
    }
}
console.log(company.employee.tech.third);   
console.log(company.employee.backend?.tech.third);


