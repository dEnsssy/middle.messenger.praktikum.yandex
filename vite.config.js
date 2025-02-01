import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

const pageContexts = {
    index: {
        title: "Авторизация",
    },
    reg: { title: "Регистрация" },
    chats: {
        title: "Чаты",
        chats: [
            { name: "Андрей", lastMessage: "Изображение", time: "10:49" },
            { name: "Киноклуб", lastMessage: "Вы стикер", time: "12:00" },
            {
                name: "Илья",
                lastMessage:
                    "Друзья, у меня для вас особенный выпуск новостей...",
                time: "16:32",
            },
            { name: "Андрей", lastMessage: "Изображение", time: "10:49" },
            { name: "Киноклуб", lastMessage: "Вы стикер", time: "12:00" },
            {
                name: "Илья",
                lastMessage:
                    "Друзья, у меня для вас особенный выпуск новостей...",
                time: "16:32",
            },
            { name: "Андрей", lastMessage: "Изображение", time: "10:49" },
            { name: "Киноклуб", lastMessage: "Вы стикер", time: "12:00" },
            {
                name: "Илья",
                lastMessage:
                    "Друзья, у меня для вас особенный выпуск новостей...",
                time: "16:32",
            },
            { name: "Андрей", lastMessage: "Изображение", time: "10:49" },
            { name: "Киноклуб", lastMessage: "Вы стикер", time: "12:00" },
            {
                name: "Илья",
                lastMessage:
                    "Друзья, у меня для вас особенный выпуск новостей...",
                time: "16:32",
            },
            { name: "Андрей", lastMessage: "Изображение", time: "10:49" },
            { name: "Киноклуб", lastMessage: "Вы стикер", time: "12:00" },
            {
                name: "Илья",
                lastMessage:
                    "Друзья, у меня для вас особенный выпуск новостей...",
                time: "16:32",
            },
        ],
        messages: [
            {
                text: "Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.",
                time: "11:56",
                isMe: false,
            },
            { image: "camera.jpg", time: "11:56", isMe: false },
            { text: "Круто!", time: "12:00", isMe: true },
        ],
    },
    e400: {
        title: "Ошибка",
    },
    e500: {
        title: "Ошибка",
    },
    profile: {
        title: "Профиль",
    },
};

export default defineConfig({
    build: {
        outDir: "dist", // Папка для собранного проекта
        emptyOutDir: true, // Очистка папки перед новой сборкой
        assetsDir: "assets", // Подпапка для статических файлов
        rollupOptions: {
            input: {
                index: "index.html",
                reg: "reg.html",
                chats: "chats.html",
                profile: "profile.html",
                e400: "e400.html",
                e500: "e500.html",
            },
        },
    },
    plugins: [
        handlebars({
            partialDirectory: "src/partials", // Путь к частичным шаблонам
            // Функци для динамического выбора контекста, не знаю как иначе динамически выбирать контекст
            context(pagePath) {
                const pageName = pagePath.split("/").pop().split(".")[0]; // Получаем имя страницы
                return pageContexts[pageName] || {}; // Возвращаем соответствующий контекст
            },
        }),
    ],
    server: {
        port: 3000, // Порт для dev-сервера
        open: true, // Автоматически открывать проект в браузере
    },
    resolve: {
        alias: {
            "@": "/src", // Алиас для удобства работы с папкой src
        },
    },
});
