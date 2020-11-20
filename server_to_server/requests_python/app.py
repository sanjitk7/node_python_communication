import requests
value =  requests.get("http://localhost:3030/")
print(value.json())
