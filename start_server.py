#!/usr/bin/env python3
"""
Mebel ERP Mockups - Local Development Server
Bu skript loyihani lokal serverda ishga tushiradi va CORS xatolarini bartaraf qiladi.
"""

import http.server
import socketserver
import os
import webbrowser
from threading import Timer

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # CORS headers qo'shish (agar kerak bo'lsa)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        return super().end_headers()

def open_browser():
    """Brauzerni avtomatik ochish"""
    webbrowser.open(f'http://localhost:{PORT}/index.html')

def main():
    os.chdir(DIRECTORY)

    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print(f"🚀 Mebel ERP Mockups serveri ishga tushdi!")
        print(f"📍 Server manzili: http://localhost:{PORT}")
        print(f"📂 Loyiha papkasi: {DIRECTORY}")
        print(f"\n✅ Brauzerni ochish uchun quyidagi havolaga bosing:")
        print(f"   http://localhost:{PORT}/index.html")
        print(f"\n⏹  Serverni to'xtatish uchun Ctrl+C ni bosing")

        # 1 sekunddan keyin brauzerni avtomatik ochish
        timer = Timer(1, open_browser)
        timer.daemon = True
        timer.start()

        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n👋 Server to'xtatildi. Xayr!")

if __name__ == "__main__":
    main()