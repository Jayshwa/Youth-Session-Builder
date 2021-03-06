import os
import threading


def start_json():
    os.system('start cmd.exe /k "npx json-server --watch data/db.json --port 8500"')


def start_elements():
    os.system(
        'start cmd.exe /k "npx json-server --watch data/elements.json --port 9000"'
    )


def start_react():
    os.system('start cmd.exe /k "npm start"')


jsonThread = threading.Thread(target=start_json)
elementThread = threading.Thread(target=start_elements)
reactThread = threading.Thread(target=start_react)

jsonThread.start()
elementThread.start()
reactThread.start()
