# FoodCost Calculator

Калькулятор себестоимости продуктов и рецептов. Приложение работает локально в браузере, хранит данные в IndexedDB и поддерживает офлайн-режим после первой загрузки.

## Запуск

Требуется Node.js 20 или новее.

```bash
git clone https://github.com/mariyamaslova006-hub/111.git
cd 111
npm install
npm run dev
```

После запуска откройте адрес, который напечатает Vite, обычно `http://localhost:5173/`. Команду нужно выполнять на вашем компьютере в папке репозитория. Если сервер запущен в облачной среде Codex, её `localhost` доступен только внутри этой среды.

## Проверки

```bash
npm run typecheck
npm test
npm run build
npm run preview
```

## Cloudflare Pages

Build command: `npm run build`  
Output directory: `dist`

Публикация даёт HTTPS-доступ к приложению, но не создаёт облачную синхронизацию. Данные остаются на устройстве; перенос выполняется через JSON-резервную копию в разделе «Настройки».
