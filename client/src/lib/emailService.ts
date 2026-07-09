import emailjs from "@emailjs/browser";

// EmailJS Configuration - Client Side Only
const SERVICE_ID = "service_janddhl";
const TEMPLATE_ID = "template_xi3zd4c";
const PUBLIC_KEY = "Ghzb7FbKl2QdBXLi8";
const PRIMARY_EMAIL = "info@rudradairyandfarm.shop";

// Initialize EmailJS with public key only
emailjs.init({
  publicKey: PUBLIC_KEY,
});

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  businessType?: string;
  productInterest?: string;
}

/**
 * Send contact form email via EmailJS
 * Sends to primary email: info@rudradairyandfarm.shop
 */
export const sendContactEmail = async (data: ContactFormData): Promise<boolean> => {
  try {
    const templateParams = {
      to_email: PRIMARY_EMAIL,
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
      business_type: data.businessType || "Not specified",
      product_interest: data.productInterest || "Not specified",
      website: "rudradairyandfarm.shop",
      timestamp: new Date().toLocaleString("en-IN"),
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams
    );

    console.log("Email sent successfully:", response);
    return true;
  } catch (error) {
    console.error("Failed to send email:", error);
    return false;
  }
};

/**
 * Send inquiry email for product samples
 */
export const sendSampleRequestEmail = async (data: {
  name: string;
  email: string;
  phone: string;
  company: string;
  productType: string;
  quantity: string;
  message: string;
}): Promise<boolean> => {
  try {
    const templateParams = {
      to_email: PRIMARY_EMAIL,
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      subject: `Sample Request - ${data.productType}`,
      message: `Company: ${data.company}\nProduct: ${data.productType}\nQuantity: ${data.quantity}\n\nMessage: ${data.message}`,
      business_type: "Sample Request",
      product_interest: data.productType,
      website: "rudradairyandfarm.shop",
      timestamp: new Date().toLocaleString("en-IN"),
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams
    );

    console.log("Sample request email sent successfully:", response);
    return true;
  } catch (error) {
    console.error("Failed to send sample request email:", error);
    return false;
  }
};

/**
 * Send bulk order inquiry email
 */
export const sendBulkOrderEmail = async (data: {
  name: string;
  email: string;
  phone: string;
  company: string;
  productType: string;
  quantity: string;
  deliveryTimeline: string;
  specialRequirements: string;
}): Promise<boolean> => {
  try {
    const templateParams = {
      to_email: PRIMARY_EMAIL,
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      subject: `Bulk Order Inquiry - ${data.productType}`,
      message: `Company: ${data.company}\nProduct: ${data.productType}\nQuantity: ${data.quantity}\nDelivery Timeline: ${data.deliveryTimeline}\nSpecial Requirements: ${data.specialRequirements}`,
      business_type: "Bulk Order",
      product_interest: data.productType,
      website: "rudradairyandfarm.shop",
      timestamp: new Date().toLocaleString("en-IN"),
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams
    );

    console.log("Bulk order email sent successfully:", response);
    return true;
  } catch (error) {
    console.error("Failed to send bulk order email:", error);
    return false;
  }
};

export default {
  sendContactEmail,
  sendSampleRequestEmail,
  sendBulkOrderEmail,
  PRIMARY_EMAIL,
};
