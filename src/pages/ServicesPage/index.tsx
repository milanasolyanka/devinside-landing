import ServiceCard from "components/ServiceCard";

import { serviceElements } from "data/services";

import "./services-page.scss";

const ServicesPage = () => {
  return (
    <div className="servicesSection" id="services">
      <div className="servicesSection__title">Наши услуги</div>
      <div className="servicesSection__cards">
        {serviceElements.map((element) => (
          <ServiceCard
            picture={element.picture}
            title={element.title}
            description={element.description}
          ></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
