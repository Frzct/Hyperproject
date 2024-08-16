// main gateway of the project it does thing such as, but not limited to:
/*
- being cool and cute and funny
- redirection
*/

// requires
const express = require("express")
const Pathway = require("path")


// requires end

const Application = express()
const PublicFile = Pathway.join(__dirname, "public")


Application.listen(3030, () => {
    console.log("run project it works and cool it just works")
})
