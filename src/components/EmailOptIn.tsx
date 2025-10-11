import React from 'react';
const EmailOptIn = () => {
  return <div className="elegant-modal-container p-8 max-w-md mx-auto flex flex-col items-center justify-center">
      <div className="space-y-6 w-full flex flex-col items-center">
        <div className="text-center space-y-3">
          <h3 className="text-white font-light text-2xl tracking-wide">Edward V2</h3>
          <p className="text-sm text-white/70 max-w-lg mx-auto leading-relaxed font-light whitespace-nowrap">
            Early access launching soon. Enter your email to be first in line.
          </p>
        </div>
        
        {/* ConvertKit Form */}
        <div className="w-full max-w-md">
          <style dangerouslySetInnerHTML={{
          __html: `
              /* Minimal branding overrides */
              .formkit-form[data-uid="54cc8446bc"] {
                max-width: 500px;
                margin: 0 auto;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
              }

              .formkit-fields {
                display: flex;
                flex-direction: column;
                gap: 12px;
                justify-content: center;
                align-items: stretch;
              }

              .formkit-input {
                width: 100%;
                padding: 14px 18px;
                font-size: 15px;
                font-weight: 300;
                background: rgba(255, 255, 255, 0.06) !important;
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                border: 1px solid rgba(255, 255, 255, 0.12) !important;
                border-radius: 12px;
                outline: none;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                color: white !important;
                text-align: center;
              }

              .formkit-input::placeholder {
                color: rgba(255, 255, 255, 0.4) !important;
                font-weight: 300;
              }

              .formkit-input:focus {
                background: rgba(255, 255, 255, 0.08) !important;
                border-color: rgba(255, 255, 255, 0.25) !important;
                transform: translateY(-1px);
              }

              .formkit-submit {
                width: 100%;
                background: rgba(255, 255, 255, 0.08) !important;
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                color: white !important;
                font-weight: 400;
                font-size: 15px;
                padding: 14px 24px;
                border: 1px solid rgba(255, 255, 255, 0.15) !important;
                border-radius: 12px;
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                letter-spacing: 0.3px;
              }

              .formkit-submit:hover {
                background: rgba(255, 255, 255, 0.12) !important;
                border-color: rgba(255, 255, 255, 0.25) !important;
                transform: translateY(-2px);
              }
              
              /* Hide the "Built with Kit" badge */
              .formkit-powered-by-convertkit-container {
                display: none !important;
                height: 0;
                overflow: hidden;
                visibility: hidden;
              }
              
              /* Optional: tweak alert styles */
              .formkit-alert {
                display: none;
              }
              
              @media (max-width: 480px) {
                .formkit-fields {
                  flex-direction: column;
                }
                .formkit-submit {
                  width: 100%;
                }
              }
            `
        }} />
          
          <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
          <form action="https://app.kit.com/forms/8293966/subscriptions" className="seva-form formkit-form" method="post" data-sv-form="8293966" data-uid="54cc8446bc" data-format="inline" data-version="5" style={{
          minWidth: "400px 500px 600px 700px 800px"
        }}>
            <div data-style="clean">
              <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
              <div data-element="fields" data-stacked="false" className="seva-fields formkit-fields">
                <div className="formkit-field">
                  <input className="formkit-input" name="email_address" aria-label="Email Address" placeholder="email@example.com" required type="email" />
                </div>
                <button data-element="submit" className="formkit-submit">
                  <span>Get Early Access</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>;
};
export default EmailOptIn;