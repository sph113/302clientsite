import requests, json
from cs50 import SQL
db = SQL ( "sqlite:///data.db" )
def orderstoupdate():
    orders = []
    link = "http://xnobe.synology.me:1234/status"
    url = requests.get(link)
    text = url.text
    data = json.loads(text)
    iterdata = iter(data)
    next(iterdata)
    for i in iterdata:
        number = i
        realnumber = number.replace('status', '')
        link2 = "http://xnobe.synology.me:1234/status/" + realnumber
        url2 = requests.get(link2)
        text2 = url2.text
        data2 = json.loads(text2)
        orders.append(data2)
    return orders

def updatestatus(orders):
    for i in orders:
        if not i['Status'] == None:
            realnumber=i['Order_id'].replace('uniqlo', '')
            db.execute("UPDATE orders SET status = :status WHERE order_id=:order_id",status=i['Status'],order_id=realnumber)
            print(realnumber)

updatestatus(orderstoupdate())