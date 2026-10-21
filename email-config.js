/**
 * SAI SAGAR ENTERPRISES — BULK ENQUIRY EMAIL CONFIGURATION
 * Authentic Agricultural Commodity Traders & Mandi Desk
 * APMC Market Yard, Phase II, Nashik / Vashi, Navi Mumbai, Maharashtra
 * 
 * --------------------------------------------------------------------------
 * INSTRUCTIONS FOR EMAILJS SETUP (Frontend-Only Email Dispatch):
 * --------------------------------------------------------------------------
 * This project uses EmailJS (https://www.emailjs.com/) for frontend-only
 * email delivery. No backend server, Node.js or database is required.
 * 
 * Step 1: Create a free account at https://www.emailjs.com/
 * Step 2: In your EmailJS Dashboard:
 *         a. Navigate to "Email Services" -> Click "Add New Service"
 *            (Select Gmail, Outlook, or your custom business SMTP).
 *            Copy your Service ID (e.g., "service_abcdef1") and paste below.
 *         b. Navigate to "Email Templates" -> Click "Create New Template"
 *            Use the template variables below in your template body and subject.
 *            Copy your Template ID (e.g., "template_1234567") and paste below.
 *         c. Navigate to "Account" (bottom-left) -> "Public Key"
 *            Copy your Public Key (e.g., "AbCdEfGhIjKlMnOpQ") and paste below.
 * Step 3: (Optional) If you want a customer receipt acknowledgment email:
 *         Create a second template in EmailJS and paste its ID into
 *         `customerConfirmationTemplateId` below.
 * 
 * --------------------------------------------------------------------------
 * TEMPLATE VARIABLES AVAILABLE IN YOUR EMAILJS TEMPLATE:
 * --------------------------------------------------------------------------
 * {{enquiry_reference}}     - Unique reference code (e.g. SSE-ENQ-20261021-4821)
 * {{submission_time}}       - Exact submission timestamp (e.g. 21 Oct 2026, 02:45 PM)
 * {{product_name}}          - Selected agricultural commodity
 * {{quantity_required}}     - Quantity value entered by buyer
 * {{quantity_unit}}         - Unit of measurement (MT, 50kg bags, 25kg bags, kg, other)
 * {{quantity_display}}      - Formatted quantity string (e.g. "50 Metric Tonnes")
 * {{packaging_preference}}  - Packaging type (Jute bags, PP bags, Jumbo bags, etc.)
 * {{purchase_frequency}}    - Frequency (One-time spot, Monthly contract, Regular)
 * {{company_name}}          - Buyer's firm / trading enterprise name
 * {{contact_person}}        - Contact person's full name
 * {{business_email}}        - Buyer's business email address
 * {{mobile_number}}         - Buyer's 10-digit mobile number
 * {{delivery_city}}         - Destination delivery city
 * {{delivery_state}}        - Destination delivery state
 * {{pin_code}}              - Destination PIN code
 * {{delivery_location}}     - Full combined destination string
 * {{target_price}}          - Buyer's target price or spot rate
 * {{quality_specs}}         - Custom laboratory or sortex quality specifications
 * {{additional_message}}    - Custom logistics or delivery notes
 * {{recipient_email}}       - Mandi Desk business inbox
 * 
 * SECURITY NOTE:
 * Never put private API secret keys or email passwords in frontend code.
 * The EmailJS Public Key is designed for client-side use. For production,
 * enable "Domain Whitelisting" in the EmailJS dashboard under Account -> Security.
 */

const EMAIL_CONFIG = {
    // 1. EmailJS Service ID (from EmailJS -> Email Services)
    serviceId: "YOUR_EMAILJS_SERVICE_ID",

    // 2. EmailJS Primary Template ID for Mandi Desk notifications
    templateId: "YOUR_EMAILJS_TEMPLATE_ID",

    // 3. Optional: EmailJS Template ID for Customer Auto-Reply receipt acknowledgment
    // Leave as empty string ("") if you do not want an automatic acknowledgment email.
    customerConfirmationTemplateId: "",

    // 4. EmailJS Account Public Key (from EmailJS -> Account -> Public Key)
    publicKey: "YOUR_EMAILJS_PUBLIC_KEY",

    // 5. Official Sai Sagar Enterprises contact details (used in UI and fallbacks)
    businessRecipientEmail: "info@saisagarenterprises.in",
    businessPhone: "+91 8169094382",
    businessWhatsApp: "918087323550",
    mandiDeskAddress: "Office No. 273, Satra Plaza, Plot No. 19, Sector 19D, Palm Beach Road, Vashi, Navi Mumbai, Maharashtra - 400703"
};

// Expose on window for universal client-side accessibility
if (typeof window !== "undefined") {
    window.EMAIL_CONFIG = EMAIL_CONFIG;
}
