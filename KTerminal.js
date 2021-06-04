const appscripts = require('./scripts/system/structure/BuildSystem')
const {OK} = require("./scripts/system/typevalues/Signals");





terminos = new appscripts.Terminal()


if (terminos.build() === OK)
{
    terminos.bProc()
}