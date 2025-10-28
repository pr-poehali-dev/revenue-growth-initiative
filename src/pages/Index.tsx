import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Наш менеджер свяжется с вами в ближайшее время.",
    });
    setFormData({ name: "", company: "", phone: "", email: "", message: "" });
  };

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

  const products = [
    {
      image: "https://cdn.poehali.dev/projects/308223f4-af7d-44fc-8000-0a7b39e2e02d/files/556ab70e-b772-45c1-a096-2ad165386d63.jpg",
      title: "Смесители для ванной",
      description: "Широкий ассортимент моделей для ванных комнат",
      specs: ["Хром, матовый хром", "Керамический картридж", "Гарантия 5 лет"],
    },
    {
      image: "https://cdn.poehali.dev/projects/308223f4-af7d-44fc-8000-0a7b39e2e02d/files/20a0bd6f-7e6e-450d-85db-2a5d2f24576d.jpg",
      title: "Душевые стойки",
      description: "Премиум-системы с термостатом и тропическим душем",
      specs: ["Тропический душ", "Термостат", "Ручной душ в комплекте"],
    },
    {
      image: "https://cdn.poehali.dev/projects/308223f4-af7d-44fc-8000-0a7b39e2e02d/files/556ab70e-b772-45c1-a096-2ad165386d63.jpg",
      title: "Кухонные смесители",
      description: "Функциональные решения для профессиональных кухонь",
      specs: ["Выдвижной излив", "Поворот 360°", "Антибактериальное покрытие"],
    },
  ];

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

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Droplets" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-foreground">AquaTech</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#advantages" className="text-sm font-medium hover:text-primary transition-colors">
              Преимущества
            </a>
            <a href="#products" className="text-sm font-medium hover:text-primary transition-colors">
              Продукция
            </a>
            <a href="#cases" className="text-sm font-medium hover:text-primary transition-colors">
              Кейсы
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>
          <Button asChild>
            <a href="#contact">Оставить заявку</a>
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
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
                  <div className="text-4xl font-bold text-primary">15+</div>
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

      <section id="advantages" className="py-20 bg-white">
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

      <section id="products" className="py-20 bg-muted/30">
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
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
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

      <section id="cases" className="py-20 bg-white">
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

      <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Оставьте заявку, и наш менеджер свяжется с вами в течение 15 минут
              </p>

              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Телефон</h3>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      <p className="text-sm text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p className="text-muted-foreground">sales@aquatech.ru</p>
                      <p className="text-sm text-muted-foreground">Ответим в течение часа</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Адрес</h3>
                      <p className="text-muted-foreground">г. Москва, ул. Промышленная, д. 15</p>
                      <p className="text-sm text-muted-foreground">Производство и склад</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Ваше имя *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder="Название компании *"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Телефон *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Комментарий"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Droplets" size={32} />
                <span className="text-2xl font-bold">AquaTech</span>
              </div>
              <p className="text-white/80">
                Производство и оптовая продажа смесителей и душевых стоек премиум-класса
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/80">
                <p>+7 (495) 123-45-67</p>
                <p>sales@aquatech.ru</p>
                <p>г. Москва, ул. Промышленная, д. 15</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <div className="space-y-2">
                <a href="#advantages" className="block text-white/80 hover:text-white transition-colors">
                  Преимущества
                </a>
                <a href="#products" className="block text-white/80 hover:text-white transition-colors">
                  Продукция
                </a>
                <a href="#cases" className="block text-white/80 hover:text-white transition-colors">
                  Кейсы
                </a>
                <a href="#contact" className="block text-white/80 hover:text-white transition-colors">
                  Контакты
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
            © 2024 AquaTech. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
