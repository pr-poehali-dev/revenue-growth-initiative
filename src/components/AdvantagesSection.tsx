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
    icon: "CheckCircle2",
    title: "Соответствие ГОСТ",
    description: "Вся продукция соответствует российским стандартам качества",
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
    icon: "Megaphone",
    title: "Маркетинговая поддержка",
    description: "Обучающие материалы, контент для соцсетей, обзоры и лайфхаки",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {advantages.map((advantage, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300 group hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-4 md:pt-6">
                <div className="flex md:flex-col items-start md:items-start gap-4 md:gap-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 md:mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={advantage.icon} size={24} className="text-primary md:w-7 md:h-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2">{advantage.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground">{advantage.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};