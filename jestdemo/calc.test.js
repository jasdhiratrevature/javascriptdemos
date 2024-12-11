const {add,sub}=require('./calculator')


test('adding 1 + 2 should return 3', () => {
    // arrange and act
    var result = add(1,2)
  
    // assert
    expect(result).toBe(3);
  });

  test('Sub 2-1  should return 1', () => {
    // arrange and act
    var result = sub(2,1)
  
    // assert
    expect(result).toBe(1);
  });