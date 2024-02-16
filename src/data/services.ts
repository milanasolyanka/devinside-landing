import { IServiceElement } from "types";

import services1 from "assets/services1.png";
import services2 from "assets/services2.png";
import services3 from "assets/services3.png";
import services4 from "assets/services4.png";
import services5 from "assets/services5.png";

export const serviceElements: IServiceElement[] = [
  {
    picture: services1,
    title: "Web-разработка",
    description:
      "Комплекс мероприятий и услуг направленных на проектирование, разработку, тестирование и ввод в эксплуатацию различных веб-решений",
  },
  {
    picture: services2,
    title: "Аналитика",
    description:
      "Сбор и анализ требований, формирование сопутствующей проектной документации",
  },
  {
    picture: services3,
    title: "BigData",
    description:
      "Кластеризация, классификация, структурирование и обработка больших объемов информации",
  },
  {
    picture: services4,
    title: "Свёрточные нейронные сети",
    description:
      "Разработка приложений, позволяющих распознавать объекты, лица на изображениях, речь и многое другое.",
  },
  {
    picture: services5,
    title: "Генеративные нейронные сети",
    description:
      "Реализация сервисов для создания (генерации) текстов, картинок или их автоматического редактирования",
  },
];
