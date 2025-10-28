import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export const TelegramSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 text-center animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 mb-6">
            <Icon name="MessageCircle" size={32} className="text-primary md:w-10 md:h-10" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Подписывайтесь на наш Telegram-канал
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Эксклюзивные акции и специальные предложения только для постоянных партнеров. 
            Будьте первыми, кто узнает о новинках и выгодных условиях!
          </p>
          <Button
            size="lg"
            className="text-lg px-8 animate-scale-in"
            style={{ animationDelay: '0.2s' }}
            asChild
          >
            <a
              href="https://t.me/grandfayans1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Icon name="Send" size={20} />
              Присоединиться к каналу
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Только для партнёров • Акции • Новинки • Специальные условия
          </p>
        </Card>
      </div>
    </section>
  );
};
