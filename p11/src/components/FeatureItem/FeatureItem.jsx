import React from "react";
import logoFeature from "../../assets/img/icon-chat.png";

export default function FeatureItem() {
  return (
    <div>
      <img src={logoFeature} alt="Chat Icon" class="feature-icon" />
      <h3 class="feature-item-title">You are our #1 priority</h3>
      <p>Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.</p>
    </div>
  );
}
