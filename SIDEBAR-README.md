# Sidebar Boshqaruv Tizimi

## 📋 Nima qilindi?

Barcha HTML faylardagi takrorlanuvchi sidebar kodi bitta joyga to'plandi. Endi siz sidebar'ni bir marta o'zgartirsangiz, barcha sahifalarda avtomatik yangilanadi.

## 📁 Yaratilgan fayllar

1. **sidebar.html** - Sidebar HTML kodi
2. **sidebar-styles.css** - Sidebar CSS stillari
3. **sidebar-loader.js** - Sidebar'ni yuklash uchun JavaScript

## 🔧 Qanday ishlaydi?

Har bir HTML faylda:
```html
<!-- Head qismida -->
<link rel="stylesheet" href="sidebar-styles.css">

<!-- Body qismida -->
<div id="sidebar-container"></div>

<!-- Body oxirida -->
<script src="sidebar-loader.js"></script>
```

JavaScript sidebar.html faylini o'qiydi va `sidebar-container` ga joylashtiradi.

## ✏️ Sidebar'ni qanday o'zgartirish kerak?

Faqat **sidebar.html** faylini tahrir qiling. Boshqa hech narsa kerak emas!

### Misol: Yangi menyu qo'shish

```html
<a href="24-yangi-modul.html" class="menu-item" data-page="yangi">🆕 Yangi modul</a>
```

### Misol: Stil o'zgartirish

**sidebar-styles.css** faylini tahrir qiling:
```css
.sidebar {
    width: 280px;  /* O'lchamni o'zgartirish */
    background: #1a252f;  /* Rangni o'zgartirish */
}
```

## 🎯 Afzalliklari

✅ **Bir marta yoziladi** - Sidebar kodi faqat sidebar.html da
✅ **Oson boshqarish** - Faqat 1 faylni tahrirlash kifoya
✅ **Avtomatik yangilanadi** - Barcha sahifalar avtomatik yangilanadi
✅ **Active holatni ko'rsatadi** - Joriy sahifa menuda ajratib ko'rsatiladi

## 🛠️ Yangi sahifa qo'shish

Yangi HTML sahifa yaratganingizda:

1. Ushbu shablon kodini qo'shing:

```html
<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sahifa nomi - Mebel ERP</title>
    <link rel="stylesheet" href="sidebar-styles.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #f5f5f5;
        }
        /* Boshqa stillar... */
    </style>
</head>
<body>
    <div id="sidebar-container"></div>

    <div class="main-content">
        <!-- Sahifa kontenti -->
    </div>

    <script src="sidebar-loader.js"></script>
</body>
</html>
```

2. sidebar.html ga yangi menyu elementini qo'shing

## 📦 Yordamchi scriptlar

Loyihada 3 ta yordamchi Python script bor (ishlatish shart emas):

- `update_all_html_files.py` - Barcha HTML fayllarni yangilash
- `fix_sidebar_cleanup.py` - Eski sidebar qoldiqlarini tozalash
- `remove_duplicate_styles.py` - Dublikat stillarni olib tashlash

## ⚠️ Muhim

- **CORS xatolik** - Agar brauzerda sahifani to'g'ridan-to'g'ri ochsangiz (file://), sidebar yuklanmasligi mumkin. Buning uchun mahalliy server ishlatish kerak:

```bash
# Python server
python3 -m http.server 8000

# Keyin brauzerda: http://localhost:8000/1-buyurtmalar.html
```

yoki VS Code'da "Live Server" extension'ni ishlatishingiz mumkin.

## 🚀 Keyingi bosqichlar (ixtiyoriy)

Agar loyihangiz rivojlanib, murakkablashsa:

1. **React/Vue.js** - Komponentlar bilan ishlash
2. **Backend integration** - PHP/Node.js bilan
3. **Build tools** - Webpack, Vite va boshqalar

Hozircha bu yechim sizning statik HTML loyihangiz uchun juda yaxshi ishlaydi! 🎉
