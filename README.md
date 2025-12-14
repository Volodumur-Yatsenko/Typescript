# Розробка базових компонентів інтернет-магазину з використанням Generic типів у TypeScript

## Опис проекту

Цей проект демонструє використання Generic типів у TypeScript для створення типобезпечних функцій управління товарами в інтернет-магазині.

## Структура проекту

- `shop.ts` - основний файл з типами та функціями
- `tsconfig.json` - конфігурація TypeScript
- `package.json` - залежності проекту

## Встановлення

```bash
npm install
```

## Запуск

### Компіляція TypeScript
```bash
npm run build
```

### Запуск скомпільованого коду
```bash
npm start
```

### Запуск безпосередньо через ts-node
```bash
npm run dev
```

## Основні компоненти

### Типи товарів

1. **BaseProduct** - базовий тип для всіх товарів
2. **Electronics** - тип для електроніки
3. **Clothing** - тип для одягу
4. **Books** - тип для книг

### Функції для роботи з товарами

- `findProduct<T>(products, id)` - пошук товару за ID
- `filterByPrice<T>(products, maxPrice)` - фільтрація товарів за ціною
- `filterByCategory<T>(products, category)` - фільтрація товарів за категорією

### Функції для роботи з кошиком

- `addToCart<T>(cart, product, quantity)` - додавання товару в кошик
- `removeFromCart<T>(cart, productId, quantity)` - видалення товару з кошика
- `calculateTotal<T>(cart)` - підрахунок загальної вартості
- `getTotalQuantity<T>(cart)` - підрахунок загальної кількості товарів

## Особливості реалізації

- ✅ Всі функції типобезпечні завдяки використанню Generic типів
- ✅ Перевірка вхідних даних у всіх функціях
- ✅ Підтримка різних типів товарів через generics
- ✅ Детальні коментарі до всіх функцій
- ✅ Приклади використання з тестовими даними

## Приклад використання

```typescript
// Створення тестових даних
const electronics: Electronics[] = [
  {
    id: 1,
    name: "Смартфон",
    price: 15000,
    category: 'electronics',
    // ...
  }
];

// Пошук товару
const phone = findProduct(electronics, 1);

// Додавання в кошик
const cart = addToCart([], phone, 1);

// Підрахунок вартості
const total = calculateTotal(cart);
```

