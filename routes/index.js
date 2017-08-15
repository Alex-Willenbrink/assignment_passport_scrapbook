const router = require("express").Router();

router.get("/", (req, res) => {
	if (req.user) {
		res.redirect("/landing");
	}

	res.render("index");
});

module.exports = router;
