const {sum,sub}=require('./calculator')

test('adding',()=>{
    // Arrange 
    n1=1;
    n2=2;
    // Act 
    var result=sum(n1,n2)
    // Assert
    expect(result).toBe(3);
});