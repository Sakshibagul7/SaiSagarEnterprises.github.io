SAI SAGAR ENTERPRISES — AUTHENTIC AGRO COMMODITIES & BULK ENQUIRY PORTAL
APMC Market Yard / Satra Plaza, Vashi, Navi Mumbai, Maharashtra - 400703
Mandi Desk: +91 8169094382 | WhatsApp: +91 80873 23550
Email: info@saisagarenterprises.in | GSTIN: 27AFTFS1532H1ZO

================================================================================
1. OVERVIEW — FRONTEND-ONLY BULK ENQUIRY SYSTEM
================================================================================
Sai Sagar Enterprises operates as an authentic agricultural commodity trading
and processing desk. The website has been upgraded to a pure frontend-only
Bulk Enquiry System.

Key Architectural Principles:
1. Pure Frontend Only:
   - Zero backend server, zero Node.js server, zero database required.
   - Operates by simply opening `index.html` in any web browser.
2. Complete Separation of Concerns:
   - HTML structure in `index.html`.
   - Styling in `style.css` (Zero inline styles).
   - Core application logic & UI in `app.js`.
   - Email service configuration in `email-config.js`.
3. Professional B2B Bulk Purchasing Flow:
   - Retail "Add to Cart" and checkout purchase actions have been replaced with
     "Request Bulk Quote" buttons on all commodity cards and specs modals.
   - Clicking opens a mobile-responsive bulk enquiry modal.
   - Selected product name is automatically pre-populated and read-only.
   - Comprehensive form captures buyer volume, packaging, frequency,
     company details, delivery destination, target price, and quality specs.
4. Robust Anti-Spam & Reliability:
   - Honeypot anti-spam trap prevents automated bot submissions.
   - Submission throttling enforces rate limiting between requests.
   - Loading state with animated spinner prevents duplicate clicks.
   - If email service transmission fails or credentials are pending, all
     entered form details are preserved safely so no buyer data is lost.
5. Direct WhatsApp Mandi Desk Integration:
   - Floating WhatsApp button and reference-linked follow-up buttons allow
     instant commercial negotiations directly with the APMC trading desk.

================================================================================
2. EMAILJS SETUP & CONFIGURATION INSTRUCTIONS
================================================================================
The frontend uses EmailJS (https://www.emailjs.com/) to deliver enquiries directly
to your business inbox.

Where to enter your credentials:
Open the file: `email-config.js`

You will see:
```javascript
const EMAIL_CONFIG = {
    serviceId: "YOUR_EMAILJS_SERVICE_ID",
    templateId: "YOUR_EMAILJS_TEMPLATE_ID",
    customerConfirmationTemplateId: "",
    publicKey: "YOUR_EMAILJS_PUBLIC_KEY",
    businessRecipientEmail: "info@saisagarenterprises.in",
    businessPhone: "+91 8169094382",
    businessWhatsApp: "918087323550"
};
```

Step-by-step Setup Guide:
1. Register on EmailJS:
   - Create a free account at https://www.emailjs.com/
2. Connect Email Service:
   - In EmailJS Dashboard -> "Email Services" -> "Add New Service".
   - Choose Gmail, Outlook, or your custom business SMTP server.
   - Copy the generated "Service ID" (e.g. `service_abc123`) and paste it into
     `serviceId` in `email-config.js`.
3. Create Admin Notification Template:
   - In EmailJS Dashboard -> "Email Templates" -> "Create New Template".
   - Set Subject:
     `New Bulk Enquiry: {{enquiry_reference}} - {{product_name}} ({{quantity_display}})`
   - Set "To Email":
     `info@saisagarenterprises.in` (or your preferred inbox).
   - Use the variables below in your template body.
   - Copy the generated "Template ID" (e.g. `template_xyz456`) and paste it into
     `templateId` in `email-config.js`.
4. Copy Public Key:
   - In EmailJS Dashboard -> "Account" -> "Public Key" (or Integration tab).
   - Copy your Public Key (e.g. `user_9AbCdEfGh...`) and paste it into
     `publicKey` in `email-config.js`.
5. Optional Customer Acknowledgment Template:
   - If you want an automatic email sent to the customer acknowledging receipt:
     Create a 2nd template in EmailJS.
     Set "To Email" to `{{business_email}}`.
     Include text clearly stating:
     "This acknowledges receipt of your enquiry. A binding commercial quote
      will be issued after verifying mandi spot rates and freight."
     Paste its Template ID into `customerConfirmationTemplateId`.
     Leave empty ("") if not needed.

================================================================================
3. EMAIL TEMPLATE VARIABLES REFERENCE
================================================================================
The following variables are automatically populated and passed to EmailJS:

Variable Name            Description & Example
--------------------------------------------------------------------------------
{{enquiry_reference}}    Unique Reference ID (e.g. SSE-ENQ-20261021-4821)
{{submission_time}}      Timestamp (e.g. 21 Oct 2026, 12:45 PM IST)
{{product_name}}         Commodity name (e.g. Royal 1121 XXL Steam Basmati Rice)
{{quantity_required}}    Numeric quantity (e.g. 50)
{{quantity_unit}}        Lot unit (e.g. 50 kg bags, metric tonnes, kg)
{{quantity_display}}     Formatted volume string (e.g. 50 50 kg bags)
{{packaging_preference}} Packaging format (e.g. 50 kg Traditional Mandi Jute Bags)
{{purchase_frequency}}   Frequency (one-time spot, monthly contract, regular supply)
{{company_name}}         Buyer firm name (e.g. Om Agro Traders)
{{contact_person}}       Full name of contact person (e.g. Ramesh Kulkarni)
{{business_email}}       Contact email (e.g. procurement@omagro.com)
{{mobile_number}}        10-digit mobile number (e.g. 9822012345)
{{delivery_city}}        Destination city (e.g. Pune)
{{delivery_state}}       Destination state (e.g. Maharashtra)
{{pin_code}}             6-digit destination PIN (e.g. 411037)
{{delivery_location}}    Full location (e.g. Pune, Maharashtra - 411037)
{{target_price}}         Target rate (e.g. ₹95/kg or Ex-Mandi spot rate)
{{quality_specs}}        Sortex purity, moisture % or NABL lab requirements
{{additional_message}}   Custom transport or delivery timeline requests
{{recipient_email}}      Business recipient address configured in frontend

================================================================================
4. SAMPLE EMAIL TEMPLATE BODY
================================================================================
Subject:
[Bulk Enquiry] {{enquiry_reference}} — {{quantity_display}} of {{product_name}}

Body:
============================================================
SAI SAGAR ENTERPRISES — MANDI PROCUREMENT DESK
New Bulk Commercial Commodity Enquiry
============================================================

REFERENCE ID: {{enquiry_reference}}
SUBMISSION TIME: {{submission_time}}

COMMODITY DETAILS:
• Product Name: {{product_name}}
• Required Volume: {{quantity_display}}
• Packaging Preference: {{packaging_preference}}
• Purchase Frequency: {{purchase_frequency}}
• Target Price: {{target_price}}
• Quality Specs: {{quality_specs}}

BUYER & FIRM INFORMATION:
• Company Name: {{company_name}}
• Contact Person: {{contact_person}}
• Business Email: {{business_email}}
• Mobile Number: {{mobile_number}}

DELIVERY DESTINATION:
• City & State: {{delivery_city}}, {{delivery_state}}
• PIN Code: {{pin_code}}
• Destination: {{delivery_location}}

ADDITIONAL NOTES:
{{additional_message}}
============================================================

================================================================================
5. TESTING & VERIFICATION CHECKLIST
================================================================================
1. Opening the Modal:
   - Click "Request Bulk Quote" on any commodity card.
   - Verify the product name is populated into the read-only field.
   - Click "Specs" -> In the specs popup, click "Request Bulk Quote" -> Verify modal opens.
   - Click "📋 Request Bulk Quote" in the navigation header -> Verify modal opens.
2. Form Validation:
   - Try submitting with empty fields -> Native validation points to missing fields.
   - Enter an invalid email or short phone number -> Clear error alert appears.
   - Enter invalid PIN code (not 6 digits) -> Form prevents submission.
3. Anti-Spam & Throttling:
   - Hidden honeypot field prevents automated bot submission.
   - Submitting twice within 15 seconds shows rate limiting notice.
4. Unconfigured EmailJS Graceful Notice:
   - If placeholder values remain in `email-config.js`, clicking submit shows a clear
     configuration alert explaining credentials are required in `email-config.js`.
   - All entered form fields are safely PRESERVED without loss.
   - No fake success message is shown.
5. Live Email Delivery:
   - Enter your valid EmailJS Service ID, Template ID, and Public Key in `email-config.js`.
   - Submit the form -> Button shows loading spinner -> Enquiry registers with reference
     number `SSE-ENQ-YYYYMMDD-XXXX` -> Full summary card and WhatsApp button appear.
6. Responsive Verification:
   - Test on desktop (2-column form grid) and mobile viewport (single column).
   - Press "Escape" or click the backdrop to close the modal.
