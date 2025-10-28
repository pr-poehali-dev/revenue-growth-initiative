import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
              <span className="text-sm font-semibold text-accent">EvaGold — 26 лет на рынке</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Производство сантехники для <span className="text-primary">B2B</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Прямые поставки смесителей и душевых стоек от производителя. Оптовые цены,
              гарантия качества, техподдержка 24/7.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="#contact">Получить прайс-лист</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <a href="#products">Каталог продукции</a>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-4xl font-bold text-primary">26</div>
                <div className="text-sm text-muted-foreground">лет на рынке</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">клиентов</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">10К+</div>
                <div className="text-sm text-muted-foreground">объектов</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow">
              <img
                src="https://cdn.poehali.dev/projects/308223f4-af7d-44fc-8000-0a7b39e2e02d/files/f7e64208-f8a8-45c0-aecf-82c963519f01.jpg"
                alt="Производство"
                className="w-full h-[500px] object-cover"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
