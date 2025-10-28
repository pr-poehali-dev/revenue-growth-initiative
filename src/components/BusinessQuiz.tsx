import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";

interface QuizData {
  businessType: string;
  storeArea: string;
  priceSegment: string;
  city: string;
  name: string;
  phone: string;
  email: string;
  consent: boolean;
}

export const BusinessQuiz = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [quizData, setQuizData] = useState<QuizData>({
    businessType: "",
    storeArea: "",
    priceSegment: "",
    city: "",
    name: "",
    phone: "",
    email: "",
    consent: false,
  });

  const totalSteps = 5;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quizData.consent) {
      toast({
        title: "Необходимо согласие",
        description: "Пожалуйста, дайте согласие на обработку персональных данных",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Спасибо за ответы!",
      description: "Менеджер свяжется с вами с персональным предложением в течение 15 минут.",
    });
    setStep(1);
    setQuizData({
      businessType: "",
      storeArea: "",
      priceSegment: "",
      city: "",
      name: "",
      phone: "",
      email: "",
      consent: false,
    });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Тип вашего бизнеса</h3>
              <p className="text-muted-foreground">
                Это поможет нам подготовить персональное предложение
              </p>
            </div>
            <RadioGroup
              value={quizData.businessType}
              onValueChange={(value) =>
                setQuizData({ ...quizData, businessType: value })
              }
              className="space-y-3"
            >
              {[
                { value: "builder", label: "Комплектовщик" },
                { value: "construction", label: "Строительная компания" },
                { value: "store", label: "Розничный магазин" },
                { value: "chain", label: "Сеть магазинов" },
                { value: "diy", label: "DIY / Стройматериалы" },
              ].map((option) => (
                <Card
                  key={option.value}
                  className={`cursor-pointer transition-all ${
                    quizData.businessType === option.value
                      ? "border-primary border-2"
                      : "hover:border-primary/50"
                  }`}
                  onClick={() =>
                    setQuizData({ ...quizData, businessType: option.value })
                  }
                >
                  <CardContent className="flex items-center p-4">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label
                      htmlFor={option.value}
                      className="ml-3 cursor-pointer font-medium flex-1"
                    >
                      {option.label}
                    </Label>
                  </CardContent>
                </Card>
              ))}
            </RadioGroup>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Площадь магазина/склада</h3>
              <p className="text-muted-foreground">
                Для расчета оптимального ассортимента
              </p>
            </div>
            <RadioGroup
              value={quizData.storeArea}
              onValueChange={(value) =>
                setQuizData({ ...quizData, storeArea: value })
              }
              className="space-y-3"
            >
              {[
                { value: "small", label: "До 100 м²" },
                { value: "medium", label: "100-500 м²" },
                { value: "large", label: "500-1000 м²" },
                { value: "xlarge", label: "Более 1000 м²" },
                { value: "none", label: "Без торговой точки" },
              ].map((option) => (
                <Card
                  key={option.value}
                  className={`cursor-pointer transition-all ${
                    quizData.storeArea === option.value
                      ? "border-primary border-2"
                      : "hover:border-primary/50"
                  }`}
                  onClick={() =>
                    setQuizData({ ...quizData, storeArea: option.value })
                  }
                >
                  <CardContent className="flex items-center p-4">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label
                      htmlFor={option.value}
                      className="ml-3 cursor-pointer font-medium flex-1"
                    >
                      {option.label}
                    </Label>
                  </CardContent>
                </Card>
              ))}
            </RadioGroup>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Ценовой сегмент</h3>
              <p className="text-muted-foreground">
                С каким сегментом вы работаете?
              </p>
            </div>
            <RadioGroup
              value={quizData.priceSegment}
              onValueChange={(value) =>
                setQuizData({ ...quizData, priceSegment: value })
              }
              className="space-y-3"
            >
              {[
                { value: "economy", label: "Эконом" },
                { value: "middle", label: "Средний" },
                { value: "premium", label: "Премиум" },
                { value: "mixed", label: "Смешанный" },
              ].map((option) => (
                <Card
                  key={option.value}
                  className={`cursor-pointer transition-all ${
                    quizData.priceSegment === option.value
                      ? "border-primary border-2"
                      : "hover:border-primary/50"
                  }`}
                  onClick={() =>
                    setQuizData({ ...quizData, priceSegment: option.value })
                  }
                >
                  <CardContent className="flex items-center p-4">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label
                      htmlFor={option.value}
                      className="ml-3 cursor-pointer font-medium flex-1"
                    >
                      {option.label}
                    </Label>
                  </CardContent>
                </Card>
              ))}
            </RadioGroup>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Ваш город</h3>
              <p className="text-muted-foreground">
                Для расчета логистики и сроков доставки
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="city">Город</Label>
                <Input
                  id="city"
                  placeholder="Введите название города"
                  value={quizData.city}
                  onChange={(e) =>
                    setQuizData({ ...quizData, city: e.target.value })
                  }
                  className="mt-2"
                />
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Контактные данные</h3>
              <p className="text-muted-foreground">
                Куда отправить персональное коммерческое предложение?
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Ваше имя *</Label>
                <Input
                  id="name"
                  placeholder="Иван Иванов"
                  value={quizData.name}
                  onChange={(e) =>
                    setQuizData({ ...quizData, name: e.target.value })
                  }
                  required
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="phone">Телефон *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  value={quizData.phone}
                  onChange={(e) =>
                    setQuizData({ ...quizData, phone: e.target.value })
                  }
                  required
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@company.ru"
                  value={quizData.email}
                  onChange={(e) =>
                    setQuizData({ ...quizData, email: e.target.value })
                  }
                  required
                  className="mt-2"
                />
              </div>
              <div className="flex items-start space-x-3 pt-2">
                <Checkbox
                  id="consent"
                  checked={quizData.consent}
                  onCheckedChange={(checked) =>
                    setQuizData({ ...quizData, consent: checked as boolean })
                  }
                  required
                />
                <Label
                  htmlFor="consent"
                  className="text-sm text-muted-foreground leading-tight cursor-pointer"
                >
                  Я даю согласие на обработку персональных данных и соглашаюсь с{" "}
                  <a href="#" className="text-primary hover:underline">
                    политикой конфиденциальности
                  </a>
                </Label>
              </div>
              <Button type="submit" size="lg" className="w-full">
                Получить предложение
              </Button>
            </form>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="p-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-muted-foreground">
              Шаг {step} из {totalSteps}
            </span>
            <span className="text-sm font-medium text-primary">
              {Math.round((step / totalSteps) * 100)}%
            </span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {renderStep()}

        <div className="flex gap-4 mt-8">
          {step > 1 && (
            <Button
              type="button"
              variant="outline"
              onClick={handleBack}
              className="flex-1"
            >
              <Icon name="ChevronLeft" size={20} className="mr-2" />
              Назад
            </Button>
          )}
          {step < totalSteps && (
            <Button
              type="button"
              onClick={handleNext}
              disabled={
                (step === 1 && !quizData.businessType) ||
                (step === 2 && !quizData.storeArea) ||
                (step === 3 && !quizData.priceSegment) ||
                (step === 4 && !quizData.city)
              }
              className="flex-1"
            >
              Далее
              <Icon name="ChevronRight" size={20} className="ml-2" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
