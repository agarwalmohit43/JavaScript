describe("getUsers", function() {
    it('get users from github',async function () {
        let users = await getUsers(['iliakan', 'remy', 'no.such.users']);
        assert.equal(users[0].login, 'iliakan');
        assert.equal(users[1].login, 'remy');
        assert.equal(users[2], null);
    });
    it('get agarwalmohit43',async function () {
        let users = await getUsers(['agarwalmohit43']);
        assert.equal(users[0].login, 'agarwalmohit43');
    });

});