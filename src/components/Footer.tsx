import Icon from "@/components/ui/icon";

export const Footer = () => {
  return (
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
              <a href="#about" className="block text-white/80 hover:text-white transition-colors">
                О нас
              </a>
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
  );
};
