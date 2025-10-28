import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const advantages = [
  {
    icon: "Factory",
    title: "Собственное производство",
    description: "Полный цикл производства с контролем качества на каждом этапе",
  },
  {
    icon: "TrendingUp",
    title: "Прямые цены",
    description: "Работа без посредников. Оптовые цены от производителя",
  },
  {
    icon: "Award",
    title: "Сертификация",
    description: "Вся продукция сертифицирована и соответствует ГОСТ",
  },
  {
    icon: "Truck",
    title: "Быстрая доставка",
    description: "Собственный склад и логистика по всей России",
  },
  {
    icon: "Shield",
    title: "Гарантия качества",
    description: "Расширенная гарантия до 5 лет на всю продукцию",
  },
  {
    icon: "Headphones",
    title: "Техподдержка 24/7",
    description: "Профессиональная поддержка на всех этапах сотрудничества",
  },
];

export const AdvantagesSection = () => {
  return (
    <section id="advantages" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Почему выбирают нас</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Комплексные решения для застройщиков, отелей и торговых сетей
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300 group"
            >
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name={advantage.icon} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
