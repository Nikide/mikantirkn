# mikantirkn
Generate Mikrotik script that adds YouTube and Discord IP's to firewall address list

# А как?

Взять rsc.txt и сделать скрипт в микротике и запустить. Он добавит все IP в address list с именим AntiRKN

app.js - nodeJS скрипт который использует актуальные списки IP и генерирует актуальный список

Использованы:

https://raw.githubusercontent.com/touhidurrr/iplist-youtube/main/lists/cidr4.txt
https://raw.githubusercontent.com/GhostRooter0953/discord-voice-ips/refs/heads/master/main_domains/discord-main-ip-list
https://raw.githubusercontent.com/GhostRooter0953/discord-voice-ips/refs/heads/master/voice_domains/discord-voice-ip-list
https://gist.githubusercontent.com/iptvcld/0d975453ebbb8ba4912789eb15e8b65a/raw/fd8b4f9ffd805015e24c3a96ec2d9a6b4a4ca724/Google_IP_Addresses.txt
