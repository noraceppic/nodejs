const {exec}=require("child_process");
const{stderrr}= require("process");
 exec('npm --version',(error,stdout,stderr)=>{
    console.log(`npm version ${stdout.trim()}`);
 })
 exec('node -v',(error,stdout,stderr)=>{
 console.log(`la verssion de note est ${stdout.trim()}`)
 });

 