from bs4 import BeautifulSoup
import requests

website = input('Enter a website to scrap:')

r = requests.get(website, headers={'User-Agent': 'Mozilla/5.0','cache-control': 'max-age=0'}, cookies={'cookies':''})

soup = BeautifulSoup(website, 'html.parser')