import { socialMediaLinks } from "data/socialMediaLinks";

import vkLogo from "assets/footerVk.svg";
import telegramLogo from "assets/footerTelegram.svg";
import whatsappLogo from "assets/footerWhatsapp.svg";

import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer" id="contacts">
      <div className="footer-left">
        <div className="footer-component">+7 914 455 14 14</div>
        <div className="footer-component">devinside.info@gmail.com</div>
        <div className="footer-component">
          Россия, Томск, ул. Красноармейская, 147, 220
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-title">DEVINSIDE</div>
        <div className="footer-icons">
          <a
            href={socialMediaLinks.vkLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={vkLogo} alt="Иконка ВК" />
          </a>
          <a
            href={socialMediaLinks.telegramLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={telegramLogo} alt="Иконка Телеграм" />
          </a>
          <a
            href={socialMediaLinks.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsappLogo} alt="Иконка Ватсап" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
