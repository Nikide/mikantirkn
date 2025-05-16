//Nikide 2024
//RKN idi nahui eto ne obhod bloka a tak proso skriptick
const http = require('https'); 
const fs = require('fs');
var data = "";

var scriptLocation = "/var/www/html/mal/rsc.txt"
var totalLocation = '/var/www/html/mal/total.txt'
var urls = ["https://raw.githubusercontent.com/touhidurrr/iplist-youtube/main/lists/cidr4.txt",
"https://raw.githubusercontent.com/GhostRooter0953/discord-voice-ips/refs/heads/master/main_domains/discord-main-ip-list",
 "https://raw.githubusercontent.com/GhostRooter0953/discord-voice-ips/refs/heads/master/voice_domains/discord-voice-ip-list",
  "https://gist.githubusercontent.com/iptvcld/0d975453ebbb8ba4912789eb15e8b65a/raw/fd8b4f9ffd805015e24c3a96ec2d9a6b4a4ca724/Google_IP_Addresses.txt"]

function genmik(data){
    let rsc = "/ip firewall address-list remove [/ip firewall address-list find list=AntiRKN]\ndelay 20000ms\n"
    let ipsarr = data.split("\n");
    console.log("Creating mikrotik address list with ",ipsarr.length," IPs")
    for (let i = 0; i < ipsarr.length; i++){
        if(!ipsarr[i] == ""){
        //console.log(ipsarr[i])
        rsc += " /ip firewall address-list add list=AntiRKN address="+ipsarr[i]+"\n"
        }
        if (i == ipsarr.length -1){
            fs.writeFile(scriptLocation, rsc, err => {
                if (err) {
                  console.error(err);
                } else {
                  console.log("Adress list done")
                }
              });
              var date = new Date()
              var text = "Последнее обновление "+date+" с "+ipsarr.length+" записями"
              fs.writeFile(totalLocation, text, err => {
                if (err) {
                  console.error(err);
                } else {
                  console.log("Total done")
                }
              });
        }
    }
}
function getips(arr,step){
    console.log("Starts step ",step + 1," with arr size ", arr.length)
    var req = http.request(arr[step],function(res){
        console.log(step + 1,":","Starts:"+arr[step])
        res.on("data",chunk=>{
            data += chunk
            console.log(step + 1,"Chunk merged")
          });
          res.on('end',()=>{
            console.log(step + 1,"All chunks merged")
            if (arr.length-1 != step){
                console.log(step + 1,"Next address")
                getips(arr,step+1)
               
            }else{
                genmik(data)
               
            }
          })
    });
    req.end()
}

getips(urls,0)
