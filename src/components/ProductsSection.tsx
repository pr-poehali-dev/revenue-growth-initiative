import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const products = [
  {
    image: "https://cdn.poehali.dev/projects/308223f4-af7d-44fc-8000-0a7b39e2e02d/files/556ab70e-b772-45c1-a096-2ad165386d63.jpg",
    title: "Смесители для ванной",
    description: "Широкий ассортимент моделей для ванных комнат",
    specs: ["Хром, матовый хром", "Керамический картридж", "Гарантия 5 лет"],
    category: "EvaGold",
  },
  {
    image: "https://cdn.poehali.dev/projects/308223f4-af7d-44fc-8000-0a7b39e2e02d/files/20a0bd6f-7e6e-450d-85db-2a5d2f24576d.jpg",
    title: "Душевые стойки Premium",
    description: "Премиум-системы с термостатом и тропическим душем",
    specs: ["Тропический душ", "Термостат", "Ручной душ в комплекте"],
    category: "EvaGold",
  },
  {
    image: "https://cdn.poehali.dev/projects/308223f4-af7d-44fc-8000-0a7b39e2e02d/files/c01c888a-5a56-4cea-a568-20e4d1a25277.jpg",
    title: "Кухонные смесители",
    description: "Функциональные решения для профессиональных кухонь",
    specs: ["Выдвижной излив", "Поворот 360°", "Антибактериальное покрытие"],
    category: "EvaGold",
  },
  {
    image: "https://cdn.poehali.dev/projects/308223f4-af7d-44fc-8000-0a7b39e2e02d/files/23ebbc9e-1814-4d43-b4d4-92aec10e9c0b.jpg",
    title: "Смесители для умывальника",
    description: "Современные модели с однорычажным управлением",
    specs: ["Аэратор экономии воды", "Плавный ход рычага", "Быстрый монтаж"],
    category: "EvaGold",
  },
  {
    image: "https://cdn.poehali.dev/projects/308223f4-af7d-44fc-8000-0a7b39e2e02d/files/37b3a2e4-6bb3-4af7-90c6-b41e9d66bce4.jpg",
    title: "Настенные смесители",
    description: "Минималистичный дизайн для современных ванных",
    specs: ["Скрытый монтаж", "Регулировка длины излива", "Защита от известкового налета"],
    category: "EvaGold",
  },
  {
    image: "https://cdn.poehali.dev/projects/308223f4-af7d-44fc-8000-0a7b39e2e02d/files/20a0bd6f-7e6e-450d-85db-2a5d2f24576d.jpg",
    title: "Душевые системы",
    description: "Комплексные системы для душевых кабин",
    specs: ["Верхний душ 250мм", "3 режима душа", "Хромированная сталь"],
    category: "EvaGold",
  },
];

export const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Наша продукция</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Широкий ассортимент смесителей и душевых систем премиум-класса
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold">
                  {product.category}
                </div>
              </div>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="space-y-2">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6" variant="outline">
                  Узнать больше
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
