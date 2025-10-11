
import React from 'react';

const MobileEmailOptIn = () => {
  return <div className="glass-effect p-8 rounded-2xl max-w-lg mx-auto">
      <div className="space-y-6 w-full flex flex-col items-center">
        <div className="text-center space-y-3">
          <h3 className="text-white mb-3 leading-tight font-bold text-xl">Positioning Intelligence for Serious Business Owners That Are Creating A Category Of One</h3>
          <p className="text-white/50 text-sm leading-relaxed">
            Developed & Designed by Troy Assoignon & PositioningiQ. Interface, Design & Voice Components by Instalanding.ai and Elevenlabs.io.
          </p>
        </div>
        
        {/* ConvertKit Form */}
        <div className="w-full">
          <style dangerouslySetInnerHTML={{
          __html: `
              .formkit-form[data-uid="54cc8446bc"] {
                max-width: 100%;
                margin: 0 auto;
                font-family: 'Inter', sans-serif;
              }
              
              .formkit-fields {
                display: flex;
                flex-direction: column;
                gap: 12px;
                align-items: center;
              }
              
              .formkit-input {
                width: 100%;
                padding: 14px 16px;
                font-size: 16px;
                background-color: oklch(1 0 0 / 8%) !important;
                backdrop-filter: blur(0.25em) brightness(1.2) saturate(1.2);
                border: 1px solid oklch(1 0 0 / 15%) !important;
                border-radius: 12px;
                outline: none;
                transition: all 0.2s ease;
                color: white !important;
                box-shadow: 
                  0 0.1em 0.25em 0 oklch(0 0 0 / 15%), 
                  0 0 1em 0 oklch(0 0 0 / 12.5%),      
                  inset 0.075em 0.075em 0.05em 0 oklch(1 0 0 / 40%), 
                  inset -0.075em -0.075em 0.05em 0 oklch(1 0 0 / 40%), 
                  inset 0 0 3em .5em oklch(0 0 0 / 20%);
              }
              
              .formkit-input::placeholder {
                color: oklch(1 0 0 / 60%) !important;
              }
              
              .formkit-input:focus {
                background-color: oklch(1 0 0 / 12%) !important;
                border-color: oklch(1 0 0 / 30%) !important;
              }
              
              .formkit-submit {
                width: 100%;
                background-color: oklch(1 0 0 / 12%) !important;
                backdrop-filter: blur(0.25em) brightness(1.2) saturate(1.2);
                color: white !important;
                font-weight: 600;
                padding: 14px 24px;
                border: 1px solid oklch(1 0 0 / 15%) !important;
                border-radius: 12px;
                cursor: pointer;
                transition: all 0.3s ease;
                font-size: 16px;
                box-shadow: 
                  0 0.1em 0.25em 0 oklch(0 0 0 / 15%), 
                  0 0 1em 0 oklch(0 0 0 / 12.5%),      
                  inset 0.075em 0.075em 0.05em 0 oklch(1 0 0 / 40%), 
                  inset -0.075em -0.075em 0.05em 0 oklch(1 0 0 / 40%), 
                  inset 0 0 3em .5em oklch(0 0 0 / 20%);
              }
              
              .formkit-submit:hover {
                background-color: oklch(1 0 0 / 18%) !important;
                transform: scale(1.02);
              }
              
              .formkit-powered-by-convertkit-container {
                display: none !important;
              }
              
              .formkit-alert {
                display: none;
              }
            `
        }} />
          
          <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
          <form action="https://app.kit.com/forms/8293966/subscriptions" className="seva-form formkit-form" method="post" data-sv-form="8293966" data-uid="54cc8446bc" data-format="inline" data-version="5">
            <div data-style="clean">
              <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
              <div data-element="fields" data-stacked="false" className="seva-fields formkit-fields">
                <div className="formkit-field">
                  <input className="formkit-input" name="email_address" aria-label="Email Address" placeholder="Your email" required type="email" />
                </div>
                <button data-element="submit" className="formkit-submit">
                  <span>Advanced Access</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>;
};

export default MobileEmailOptIn;
