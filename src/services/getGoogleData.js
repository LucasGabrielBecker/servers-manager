const axios = require('axios')
 
const apikey = "AIzaSyDnswHn7CngFDf2wIZhFQWblpis5HRcZwc"
const spreedId = "1gMxAb0a6Yb1c95YtJJjKQgN8EDHhkT109ODDxTVBkmk"
 
 
async function getPlanData(){
   const request = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${spreedId}/values/a:h?key=${apikey}`)
   const lines = request.data.values
   let hosts = []
   lines.map(item => {

      hosts.push({ hostname : item[0],
       localidade : item[1],
       virtual : item[2],
       memoria : item[3],
       disco : item[4],
       so : item[5],
       soVersion : item[6],
       application: item[7]
      })

   })

   hosts.shift()
  
   return hosts
}
 
export default getPlanData;