import DisjointSet from "./disjoint_set";

test('create a DisjointSet from an empty contructor', () => {
    let ds = new DisjointSet();
    expect(ds.toString()).toStrictEqual('');
});
test('create a DisjointSet find ancestor of unseen item', () => {
    let ds = new DisjointSet();
    expect(ds.find('erick')).toStrictEqual("erick");
});
test('test create relation erick -> sophia', () => {
    let ds = new DisjointSet();
    ds.union('erick', 'sophia');
    expect(ds.find('erick')).toStrictEqual(ds.find('sophia'));
});
test('test nested relations, sophia -> isabella + erick -> sophia', () => {
    let ds = new DisjointSet(['erick', 'sophia', 'marion']);
    ds.union('sophia', 'isabella');
    ds.union('erick', 'sophia');
    // erick must relate to isabella
    expect(ds.find('erick')).toStrictEqual(ds.find('isabella'));
});
test('test nested relations, sophia -> isabella + erick -> sophia, kim -> sophia', () => {
    let ds = new DisjointSet(['erick', 'sophia', 'marion']);
    ds.union('sophia', 'isabella');
    ds.union('erick', 'sophia');
    ds.union('kim', 'sophia');
    // kim must relate to isabella
    expect(ds.find('kim')).toStrictEqual(ds.find('isabella'));
});
test('test nested relations, sophia -> isabella + erick -> sophia, kim -> sophia', () => {
    let ds = new DisjointSet(['erick', 'sophia', 'marion']);
    ds.union('sophia', 'isabella');
    ds.union('erick', 'sophia');
    ds.union('kim', 'sophia');
    ds.union('onur', 'francesco');
    // kim must not relate to onur
    expect(ds.find('kim') == ds.find('onur')).toBeFalsy();
});