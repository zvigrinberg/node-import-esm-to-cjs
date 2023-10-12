
async function loadExhort()
{
// dynamic import is the only way to import ESM module into commonJS module
       const { default: exhort } = await import('@RHEcosystemAppEng/exhort-javascript-api');
       return exhort
}
const runExhort = (manifestPath) => {
   return new Promise(async ( resolve, reject) => {
       try {
           let stackAnalysisReport = await (await loadExhort()).stackAnalysis(manifestPath,false)
           resolve(stackAnalysisReport)

       } catch (error)
       {
           reject(error)
       }
   });
};

runExhort("./package.json").then(resp => console.log(JSON.stringify(resp,null,4)))



