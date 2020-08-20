import Splay from "./splay";

test('create a Splay from an empty collection', () => {
    let splay = new Splay([]);
    expect(splay.toString()).toStrictEqual('');
});
test('create a Splay from an array of numbers', () => {
    /*
					-->(19)
				-->(18)
			-->(17)
				-->(16)
		-->(15)
			-->(14)
					-->(13)
				-->(12)
	-->(11)
-->(10)
	-->(9)
		-->(8)
				-->(7)
			-->(6)
						-->(5)
					-->(4)
				-->(3)
						-->(2)
					-->(1)
						-->(0)*/
    let splay = new Splay([13, 2, 16, 12, 0, 19, 5, 4, 1, 18, 14, 7, 3, 17, 6, 15, 8, 9, 11, 10]);
    expect(splay.toString()).toStrictEqual("\t\t\t\t\t-->(19)\n\t\t\t\t-->(18)\n\t\t\t-->(17)\n\t\t\t\t-->(16)\n\t\t-->(15)\n\t\t\t-->(14)\n\t\t\t\t\t-->(13)\n\t\t\t\t-->(12)\n\t-->(11)\n-->(10)\n\t-->(9)\n\t\t-->(8)\n\t\t\t\t-->(7)\n\t\t\t-->(6)\n\t\t\t\t\t\t-->(5)\n\t\t\t\t\t-->(4)\n\t\t\t\t-->(3)\n\t\t\t\t\t\t-->(2)\n\t\t\t\t\t-->(1)\n\t\t\t\t\t\t-->(0)");
});
test('create a Splay from an array of words', () => {
    let splay = new Splay(['erick', 'sophia', 'marion']);
    expect(splay.toString()).toStrictEqual("\t-->(sophia)\n-->(marion)\n\t-->(erick)");
});
test('test find method', () => {
    let splay = new Splay(['erick', 'sophia', 'marion']);
    expect(splay.find('erick').value).toStrictEqual('erick');
});
test('test remove method', () => {
    let splay = new Splay(['erick', 'sophia', 'marion']);
    // remove from the begining
    expect(splay.remove('erick').value).toStrictEqual('erick');
    expect(splay.remove('sophia').value).toStrictEqual('sophia');
    expect(splay.remove('marion').value).toStrictEqual('marion');
    expect(splay.toString()).toStrictEqual("");
});