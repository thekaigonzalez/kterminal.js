// builds the basic system application.
const os = require('os')
const OKV = require('../../../scripts/system/typevalues/Signals')
const { exec } = require("child_process");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports.Terminal = class Terminal
{
    build()
    {
        //exec("ls -la", (error, stdout, stderr) => {
        //     if (error) {
        //         console.log(`error: ${error.message}`);
        //         return;
        //     }
        //     if (stderr) {
        //         console.log(`stderr: ${stderr}`);
        //         return;
        //     }
        //     console.log(`stdout: ${stdout}`);
        // });

        //https://nodejs.org/api/process.html#process_process_platform
        //The process.platform property returns a string identifying the operating system platform on which the Node.js process is running.
        //
        // Currently possible values are:
        //
        //     'aix'
        //     'darwin'
        //     'freebsd'
        //     'linux'
        //     'openbsd'
        //     'sunos'
        //     'win32'
        //
        // console.log(`This platform is ${process.platform}`);

        //checks the platform for a correct clearance command
        //saves time lol
        if (process.platform === "win32")
        {
            exec('cls', ((error, stdout, stderr) => {
                if (error)
                {
                    console.log("internal system process failed")
                }
                else if (stderr)
                {
                    console.log("err: " + stderr)
                }
            }))
        }
        else if (process.platform === "linux") {
            exec('clear', ((error, stdout, stderr) => {
                if (error)
                {
                    console.log("internal system process failed")
                }
                else if (stderr)
                {
                    console.log("err: " + stderr)
                }
            }))
        }
        return OKV.OK;
    }
    bProc()
    {

        var recursiveAsyncReadLine = function () {
            rl.question('jsbash ~$ ', function (cm) {
                let argv = cm.split(/ +/)
                let answer = argv.shift()
                if (answer === 'exit') //we need some base case, for recursion
                    return rl.close(); //closing RL and returning from function.
                else
                    require('../../apps/fs/' + answer + ".js").main()

                recursiveAsyncReadLine(); //Calling this function again to ask new question
            });

        };
        recursiveAsyncReadLine(); //Calling this function again to ask new question

    }
}