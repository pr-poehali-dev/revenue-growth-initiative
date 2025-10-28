import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const cases = [
  {
    title: "ЖК «Северная Столица»",
    description: "Оснащение 450 квартир премиум-класса",
    metrics: "450 квартир • 3 месяца • 2024",
    image: "https://cdn.poehali.dev/projects/308223f4-af7d-44fc-8000-0a7b39e2e02d/files/f7e64208-f8a8-45c0-aecf-82c963519f01.jpg",
  },
  {
    title: "Сеть отелей «Сапфир»",
    description: "Комплексная поставка сантехники для 5 объектов",
    metrics: "5 отелей • 850 номеров • 2023",
    image: "https://cdn.poehali.dev/projects/308223f4-af7d-44fc-8000-0a7b39e2e02d/files/f7e64208-f8a8-45c0-aecf-82c963519f01.jpg",
  },
  {
    title: "Бизнес-центр «Технопарк»",
    description: "Премиум-решения для офисных и общественных зон",
    metrics: "12 этажей • 200 санузлов • 2024",
    image: "https://cdn.poehali.dev/projects/308223f4-af7d-44fc-8000-0a7b39e2e02d/files/f7e64208-f8a8-45c0-aecf-82c963519f01.jpg",
  },
];

export const CasesSection = () => {
  return (
    <section id="cases" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Реализованные проекты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Более 500 успешно завершенных проектов по всей России
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{caseItem.title}</h3>
                </div>
              </div>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-3">{caseItem.description}</p>
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  <Icon name="Building2" size={16} />
                  <span>{caseItem.metrics}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
