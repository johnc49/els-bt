import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import p1 from "../images/p1.jpg";

/**
 * Repo: https://github.com/awran5/react-floating-whatsapp
 */

export default function WhatsappIcon() {
  return (
    <div className="container">
      <FloatingWhatsApp
        phoneNumber="+260973186816"
        accountName="EL'S WORTH"
        allowEsc
        allowClickAway
        notification
        avatar={p1}
        // notificationSound
      />
    </div>
  );
}
