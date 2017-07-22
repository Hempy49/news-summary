(function () {
    var headline = new Headline();
    it("tests headline takes text", function () {
      assert.isTrue(headline.text === "Here's your headline");
    });
})();
