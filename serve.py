"""Run: python3 serve.py — then open http://127.0.0.1:8765."""
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

if __name__ == '__main__':
    directory = str(Path(__file__).resolve().parent / 'dist')
    server = ThreadingHTTPServer(('127.0.0.1', 8765), partial(SimpleHTTPRequestHandler, directory=directory))
    print('Money Calculators: http://127.0.0.1:8765', flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        server.server_close()
