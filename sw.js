self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});
self.addEventListener('fetch', (e) => {
    // ปล่อยให้โหลดออนไลน์ปกติ ไม่ดักจับแคชเพื่อความลื่นไหลของระบบสตรีม
});
