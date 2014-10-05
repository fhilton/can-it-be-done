describe("when project starts on 1/1/2014, has 200 hrs of work, has 2 resources working 6 hrs a day", function() {
    beforeEach(function() {

    });

    it("should return 1/23/2014", function() {
        var sch = Schedule('1/1/2014', 200, 2, 6);
        expect(sch).toBe('1/23/2014');
    });

});

/**
 * Created by fhilton on 10/4/14.
 */describe("when project starts on Monday 10/6/14, has 30 hrs of work, has 1 resource working 6 hrs a day", function() {
    beforeEach(function() {

    });

    it("should return 10/10/2014", function() {
        var sch = Schedule('10/6/2014', 30, 1, 6);
        expect(sch).toBe('10/10/2014');
    });
});/**
 * Created by fhilton on 10/4/14.
 */
