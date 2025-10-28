import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Icon name="Droplets" size={32} className="text-primary" />
          <span className="text-2xl font-bold text-foreground">AquaTech</span>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            О нас
          </a>
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
  );
};
